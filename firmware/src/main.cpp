#include <Arduino.h>
#include <Wire.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLE2902.h>
#include <BLEScan.h>
#include <Adafruit_NeoPixel.h>
#include <driver/i2s.h>
#include <math.h>

#if !defined(CONFIG_IDF_TARGET_ESP32C3)
#error "Masar One requires ESP32-C3 for all three patches"
#endif

constexpr char SERVICE[] = "5ae10011-8c7d-4b1f-92a0-559c075a0100";
constexpr char DATA[] = "5ae10012-8c7d-4b1f-92a0-559c075a0100";
constexpr char IDENTITY[] = "5ae10014-8c7d-4b1f-92a0-559c075a0100";
#ifndef KIT_ID
#define KIT_ID "M01"
#endif
constexpr char kit[] = KIT_ID;
static_assert(sizeof(kit) >= 2 && sizeof(kit) <= 9, "Kit ID length must be 1–8");
constexpr int16_t missing = INT16_MIN;
constexpr uint8_t imu = 0x68;
constexpr int i2cSda = 4;
constexpr int i2cScl = 5;
constexpr int chestEcg = 0;
constexpr int chestLeadOffPositive = 1;
constexpr int chestLeadOffNegative = 3;
constexpr int chestMicClock = 6;
constexpr int chestMicWordSelect = 7;
constexpr int chestMicData = 10;
constexpr int headLedData = 6;
constexpr int headLedEnable = 7;
constexpr int headLedCount = 2 * 8;
constexpr bool chest = NODE_ROLE == 2;
constexpr bool head = NODE_ROLE == 1;
constexpr uint32_t ttl = 3500;
constexpr size_t peerBytes = 23;
struct Peer {
  int16_t values[4];
  uint32_t seen;
  bool received;
};

BLECharacteristic* telemetry;
BLEScan* scanner;
BLEAdvertising* advertising;
volatile bool restartAdvertising = false;
portMUX_TYPE peerLock = portMUX_INITIALIZER_UNLOCKED;
Peer peers[2] = {};
int16_t tilt = missing, roll = missing, movement = missing, temperature = missing;
int16_t pulse = missing, ecg = missing, soundLevel = missing;
bool imuReady = false, microphoneReady = false;
float ecgBase = 2048, peakLevel = 20;
bool abovePeak = false;
uint32_t lastPeak = 0;
Adafruit_NeoPixel matrix(headLedCount, headLedData, NEO_GRB + NEO_KHZ800);

void put(uint8_t* bytes, int16_t v) {
  bytes[0] = uint16_t(v) & 0xff;
  bytes[1] = uint16_t(v) >> 8;
}
int16_t get(const uint8_t* bytes) {
  return int16_t(bytes[0] | (uint16_t(bytes[1]) << 8));
}
bool readRegs(uint8_t addr, uint8_t reg, uint8_t* data, uint8_t length) {
  Wire.beginTransmission(addr);
  Wire.write(reg);
  if (Wire.endTransmission(false) || Wire.requestFrom(addr, length) != length) return false;
  for (uint8_t i = 0; i < length; ++i) data[i] = Wire.read();
  return true;
}
bool writeReg(uint8_t addr, uint8_t reg, uint8_t value) {
  Wire.beginTransmission(addr);
  Wire.write(reg);
  Wire.write(value);
  return Wire.endTransmission() == 0;
}
int16_t bigEndian(const uint8_t* data) {
  return int16_t((uint16_t(data[0]) << 8) | data[1]);
}
void sampleSensors() {
  uint8_t id, bytes[6];
  if (!imuReady) {
    imuReady = readRegs(imu, 0x75, &id, 1) && id == 0x68
      && writeReg(imu, 0x6b, 0);
  }
  if (imuReady && readRegs(imu, 0x3b, bytes, 6)) {
    float x = bigEndian(bytes) / 16384.0f;
    float y = bigEndian(bytes + 2) / 16384.0f;
    float z = bigEndian(bytes + 4) / 16384.0f;
    tilt = lroundf(atan2f(-x, sqrtf(y*y + z*z)) * 18000 / PI);
    roll = lroundf(atan2f(y, z) * 18000 / PI);
    movement = lroundf(fabsf(sqrtf(x*x + y*y + z*z) - 1) * 1000);
  } else {
    imuReady = false;
    tilt = roll = movement = missing;
  }
  if (head) {
    temperature = missing;
    if (readRegs(0x18, 0x07, bytes, 2) && bytes[0] == 0x04 && readRegs(0x18, 0x05, bytes, 2)) {
      int16_t raw = bigEndian(bytes) & 0x1fff;
      temperature = lroundf((raw & 0x1000 ? raw - 0x2000 : raw) * 6.25f);
    }
  }
}
void sampleECG() {
  if (digitalRead(chestLeadOffPositive) || digitalRead(chestLeadOffNegative)) {
    pulse = ecg = missing;
    lastPeak = 0;
    abovePeak = false;
    return;
  }
  ecg = analogRead(chestEcg);
  ecgBase += .01f * (ecg - ecgBase);
  const float amplitude = fabsf(ecg - ecgBase);
  peakLevel = fmaxf(12, peakLevel * .997f + amplitude * .003f);
  const bool high = amplitude > peakLevel * 2.2f;
  const uint32_t now = millis();
  const uint32_t interval = now - lastPeak;
  if (high && !abovePeak && interval > 300) {
    pulse = lastPeak && interval <= 2000 ? lroundf(600000.0f / interval) : missing;
    lastPeak = now;
  }
  if (lastPeak && now - lastPeak > 2500) pulse = missing;
  abovePeak = high;
}

#if NODE_ROLE == 2
bool startMicrophone() {
  i2s_config_t config = {};
  config.mode = i2s_mode_t(I2S_MODE_MASTER | I2S_MODE_RX);
  config.sample_rate = 16000;
  config.bits_per_sample = I2S_BITS_PER_SAMPLE_32BIT;
  config.channel_format = I2S_CHANNEL_FMT_ONLY_LEFT;
  config.communication_format = I2S_COMM_FORMAT_STAND_I2S;
  config.dma_buf_count = 4;
  config.dma_buf_len = 128;
  i2s_pin_config_t pins = {};
  pins.mck_io_num = I2S_PIN_NO_CHANGE;
  pins.bck_io_num = chestMicClock;
  pins.ws_io_num = chestMicWordSelect;
  pins.data_out_num = I2S_PIN_NO_CHANGE;
  pins.data_in_num = chestMicData;
  return i2s_driver_install(I2S_NUM_0, &config, 0, nullptr) == ESP_OK
    && i2s_set_pin(I2S_NUM_0, &pins) == ESP_OK;
}
void sampleMicrophone() {
  if (!microphoneReady) return;
  int32_t buffer[128];
  size_t bytes = 0;
  if (i2s_read(I2S_NUM_0, buffer, sizeof(buffer), &bytes, 0) != ESP_OK || bytes < 2 * sizeof(int32_t)) return;
  double sum = 0, squares = 0;
  const size_t count = bytes / sizeof(int32_t);
  for (size_t i = 0; i < count; ++i) {
    const double value = buffer[i] >> 16;
    sum += value;
    squares += value * value;
  }
  const double mean = sum / count;
  soundLevel = lround(sqrt(fmax(0.0, squares / count - mean * mean)));
}
#endif

class ScanCallbacks : public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice device) override {
    if (!device.haveManufacturerData()) return;
    const std::string payload = device.getManufacturerData();
    if (payload.size() != peerBytes) return;
    const auto* bytes = reinterpret_cast<const uint8_t*>(payload.data());
    if (bytes[0] != 0xff || bytes[1] != 0xff || bytes[2] != 'M' || bytes[3] != '1'
        || bytes[4] != 2 || (bytes[5] != 2 && bytes[5] != 3)
        || strncmp(reinterpret_cast<const char*>(bytes + 6), kit, 9) != 0) return;
    Peer incoming = {};
    for (size_t i = 0; i < 4; ++i) incoming.values[i] = get(bytes + 15 + 2*i);
    incoming.seen = millis();
    incoming.received = true;
    portENTER_CRITICAL(&peerLock);
    peers[bytes[5] - 2] = incoming;
    portEXIT_CRITICAL(&peerLock);
  }
};
class ServerCallbacks : public BLEServerCallbacks {
  void onDisconnect(BLEServer*) override { restartAdvertising = true; }
};
void scanComplete(BLEScanResults) {}

void advertisePeer() {
  uint8_t bytes[peerBytes] = {0xff, 0xff, 'M', '1', 2, NODE_ROLE};
  memcpy(bytes + 6, kit, sizeof(kit));
  put(bytes + 15, chest ? pulse : tilt);
  put(bytes + 17, chest ? movement : roll);
  put(bytes + 19, chest ? soundLevel : missing);
  put(bytes + 21, chest ? ecg : missing);
  BLEAdvertisementData payload;
  payload.setFlags(0x06);
  payload.setManufacturerData(std::string(reinterpret_cast<char*>(bytes), sizeof(bytes)));
  advertising->stop();
  advertising->setAdvertisementData(payload);
  advertising->start();
}
void publishAggregate() {
  Peer incoming[2];
  portENTER_CRITICAL(&peerLock);
  memcpy(incoming, peers, sizeof(peers));
  portEXIT_CRITICAL(&peerLock);
  const uint32_t now = millis();
  const bool chestOnline = incoming[0].received && now - incoming[0].seen < ttl;
  const bool neckOnline = incoming[1].received && now - incoming[1].seen < ttl;
  const int16_t values[] = {temperature, tilt, roll,
    chestOnline ? incoming[0].values[0] : missing, chestOnline ? incoming[0].values[1] : missing,
    neckOnline ? incoming[1].values[0] : missing, neckOnline ? incoming[1].values[1] : missing,
    chestOnline ? incoming[0].values[2] : missing, chestOnline ? incoming[0].values[3] : missing};
  uint8_t packet[20] = {2, uint8_t((chestOnline ? 1 : 0) | (neckOnline ? 2 : 0))};
  for (size_t i = 0; i < 9; ++i) put(packet + 2 + i*2, values[i]);
  telemetry->setValue(packet, sizeof(packet));
  telemetry->notify();
}

void setup() {
  Serial.begin(115200);
  Wire.begin(i2cSda, i2cScl);
  Wire.setTimeOut(20);
#if NODE_ROLE == 2
  pinMode(chestLeadOffPositive, INPUT);
  pinMode(chestLeadOffNegative, INPUT);
  analogReadResolution(12);
  analogSetPinAttenuation(chestEcg, ADC_11db);
  microphoneReady = startMicrophone();
#endif
  if (head) {
    pinMode(headLedEnable, OUTPUT);
    digitalWrite(headLedEnable, LOW);
    pinMode(headLedData, OUTPUT);
    digitalWrite(headLedData, LOW);
    matrix.begin();
    digitalWrite(headLedEnable, HIGH);
    matrix.setBrightness(15);
    matrix.fill(matrix.Color(10, 10, 10));
    matrix.show();
  }
  const std::string name = head ? std::string("MS1-") + kit : "";
  BLEDevice::init(name);
  advertising = BLEDevice::getAdvertising();
  if (head) {
    auto* server = BLEDevice::createServer();
    server->setCallbacks(new ServerCallbacks());
    auto* service = server->createService(SERVICE);
    telemetry = service->createCharacteristic(DATA, BLECharacteristic::PROPERTY_NOTIFY);
    telemetry->addDescriptor(new BLE2902());
    auto* identity = service->createCharacteristic(IDENTITY, BLECharacteristic::PROPERTY_READ);
    identity->setValue(std::string("MS1:") + kit);
    service->start();
    advertising->addServiceUUID(SERVICE);
    advertising->setScanResponse(true);
    advertising->start();
    scanner = BLEDevice::getScan();
    scanner->setAdvertisedDeviceCallbacks(new ScanCallbacks(), true);
    scanner->setActiveScan(false);
    scanner->setInterval(90);
    scanner->setWindow(40);
  } else {
    advertising->setAdvertisementType(ADV_TYPE_NONCONN_IND);
    advertisePeer();
  }
}

void loop() {
  static uint32_t lastEcg = 0, lastPublish = 0, lastScan = 0;
  const uint32_t now = millis();
#if NODE_ROLE == 2
  if (now - lastEcg >= 4) {
    lastEcg = now;
    sampleECG();
  }
  sampleMicrophone();
#endif
  if (head && (lastScan == 0 || now - lastScan >= 6000)) {
    lastScan = now;
    scanner->clearResults();
    scanner->start(5, scanComplete, false);
  }
  if (restartAdvertising) {
    restartAdvertising = false;
    advertising->start();
  }
  if (now - lastPublish >= 500) {
    lastPublish = now;
    sampleSensors();
    if (head) publishAggregate();
    else advertisePeer();
  }
  delay(1);
}
