const assert=require('node:assert/strict');
const E=require('../dist/simulation.js');
const patient=(i)=>({slot:i,scenarioId:i,demo:true});
assert.equal(E.profiles.length,12);
assert.equal(new Set(E.profiles.map(p=>p.ar)).size,12);
for(let i=0;i<12;i++){
 const p=patient(i),samples=Array.from({length:121},(_,t)=>E.sample(p,t*.5));
 for(const s of samples){
  assert.ok(s.hr>=35&&s.hr<=175);assert.ok(s.temp>25&&s.temp<42);
  assert.ok(s.risk>=0&&s.risk<=100);assert.ok(s.confidence>=0&&s.confidence<=100);
  assert.equal(s.indicator,s.risk>=72?'critical':s.risk>=42?'warning':'stable');
  for(const k of ['pitchHead','rollHead','pitchNeck','rollNeck','chestMotion'])assert.ok(Number.isFinite(s[k]));
 }
 for(const key of ['hr','temp','risk','pitchNeck','chestMotion'])assert.ok(new Set(samples.map(s=>s[key])).size>2,`${i}: ${key} should vary`);
 assert.deepEqual(E.sample(p,7.2),E.sample(p,7.2),'same scenario/time must remain consistent across screens');
 assert.notEqual(E.wavePath(p,1).path,E.wavePath(p,2).path);
 assert.notEqual(E.trendPoints(p,'hr',1),E.trendPoints(p,'hr',2));
 const w=E.wavePath(p,500,600,120);assert.ok(!/NaN|Infinity/.test(w.path));assert.ok(w.lastY>=0&&w.lastY<=120);
}
const offline=E.sample({slot:0,demo:false},10);assert.equal(offline.hr,null);assert.equal(offline.temp,null);assert.equal(offline.risk,null);assert.equal(offline.indicator,'offline');
const frozen=E.sample(patient(0),9);assert.deepEqual(E.sample({...patient(0),closedAt:1,frozenTelemetry:frozen},100),frozen);
const archived={...patient(0),closedAt:1,frozenAtSimulation:9,frozenTelemetry:frozen};
assert.deepEqual(E.wavePath(archived,1),E.wavePath(archived,200));
assert.equal(E.trendPoints(archived,'hr',1),E.trendPoints(archived,'hr',200));
for(const status of ['critical','warning','stable'])for(let t=0;t<60;t++)assert.equal(E.sample({...patient(4),manualScenario:status},t).indicator,status);
assert.ok(E.profiles.some((_,i)=>new Set(Array.from({length:60},(_,t)=>E.sample(patient(i),t).indicator)).size>1),'automatic scenarios must cross status boundaries');
console.log('PASS: 12 unique scenarios; changing bounded readings; consistent snapshots; moving traces; offline values; frozen archives; manual overrides; automatic status changes.');
