const assert = require('node:assert/strict');
require('../dist/gateway.js');
const gateway = globalThis.MasarGateway;

async function test() {
  const frame = new DataView(new ArrayBuffer(20));
  frame.setUint8(0, 2);
  frame.setUint8(1, 1);
  [3375, -225, 120, 726, 42, 900, 100, -32768, 1820].forEach((value, i) =>
    frame.setInt16(2 + i * 2, value, true)
  );
  assert.equal(gateway.decode(new DataView(new ArrayBuffer(19))), null);
  const reading = gateway.decode(frame, 1000);
  assert.equal(reading.temp, 33.75);
  assert.equal(reading.pitchHead, -2.25);
  assert.equal(reading.hr, 72.6);
  assert.equal(reading.chestMotion, .042);
  assert.equal(reading.ecgRaw, 1820);
  assert.equal(reading.chestAudio, null);
  assert.equal(reading.pitchNeck, null);
  assert.deepEqual(reading.online, {head: true, chest: true, neck: false});
  const stream = new EventTarget();
  stream.startNotifications = async () => {};
  const gatt = {
    connected: false,
    async connect() { this.connected = true; return this; },
    disconnect() { this.connected = false; },
    async getPrimaryService() {
      return {getCharacteristic: async uuid => uuid.startsWith('5ae10014')
        ? {readValue: async () => new TextEncoder().encode('MS1:M01')} : stream};
    }
  };
  const device = {gatt};
  await assert.rejects(gateway.open(device, 'MS1:M02', () => {}), /kit-mismatch/);
  assert.equal(gatt.connected, false);
  let sample;
  assert.equal(await gateway.open(device, 'MS1:M01', value => { sample = value; }), 'MS1:M01');
  stream.value = frame;
  stream.dispatchEvent(new Event('characteristicvaluechanged'));
  assert.equal(sample.hr, 72.6);
  await gateway.select({requestDevice: async ({filters}) => {
    assert.equal(filters[0].name, 'MS1-M01');
    assert.equal(filters[0].services.length, 1);
  }}, 'MS1:M01');
  console.log('PASS: gateway framing, missing readings, barcode identity, notifications and chooser filter.');
}
test().catch(error => { console.error(error); process.exitCode = 1; });
