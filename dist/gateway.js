'use strict';
((root) => {
  const service = '5ae10011-8c7d-4b1f-92a0-559c075a0100';
  const data = '5ae10012-8c7d-4b1f-92a0-559c075a0100';
  const identity = '5ae10014-8c7d-4b1f-92a0-559c075a0100';
  const signals = [
    ['temp', 100, 'head'], ['pitchHead', 100, 'head'], ['rollHead', 100, 'head'],
    ['hr', 10, 'chest'], ['chestMotion', 1000, 'chest'],
    ['pitchNeck', 100, 'neck'], ['rollNeck', 100, 'neck'], ['chestAudio', 1, 'chest'],
    ['ecgRaw', 1, 'chest']
  ];

  function decode(view, at = Date.now()) {
    if (view.byteLength !== 20 || view.getUint8(0) !== 2) return null;
    const mask = view.getUint8(1);
    const online = {head: true, chest: Boolean(mask & 1), neck: Boolean(mask & 2)};
    const readings = {at, online};
    signals.forEach(([key, scale, role], index) => {
      const raw = view.getInt16(2 + index * 2, true);
      readings[key] = online[role] && raw !== -32768 ? raw / scale : null;
    });
    return readings;
  }

  async function select(bluetooth, code) {
    if (!bluetooth) throw Error('unsupported');
    const filter = {services: [service]};
    if (code) filter.name = 'MS1-' + code.slice(4);
    return bluetooth.requestDevice({filters: [filter]});
  }

  async function open(device, expectedCode, onSample) {
    try {
      const gatt = await device.gatt.connect();
      const gateway = await gatt.getPrimaryService(service);
      const idCharacteristic = await gateway.getCharacteristic(identity);
      const code = new TextDecoder().decode(await idCharacteristic.readValue());
      if (!/^MS1:[A-Z0-9]{1,8}$/.test(code) || (expectedCode && code !== expectedCode)) {
        throw Error('kit-mismatch');
      }
      const stream = await gateway.getCharacteristic(data);
      stream.addEventListener('characteristicvaluechanged', event => {
        const sample = decode(event.target.value);
        if (sample) onSample(sample);
      });
      await stream.startNotifications();
      return code;
    } catch (error) {
      if (device.gatt.connected) device.gatt.disconnect();
      throw error;
    }
  }

  root.MasarGateway = {decode, select, open, signals};
})(globalThis);
