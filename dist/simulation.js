/* Deterministic presentation scenarios. No model inference or clinical classification. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.MasarSimulation=api;})(typeof window!=='undefined'?window:globalThis,function(){
 'use strict';
 const profiles=[
  {ar:'اضطراب النبض',en:'Irregular pulse',noteAr:'نبض افتراضي متغير مع موجة غير منتظمة.',noteEn:'Variable simulated pulse with an irregular waveform.',hr:126,ha:13,temp:34.7,ta:.35,risk:78,ra:12,period:22,mode:'irregular',motion:.025,tilt:3},
  {ar:'بطء النبض',en:'Slow pulse',noteAr:'نبض افتراضي منخفض يتغير ببطء.',noteEn:'A slow simulated pulse with gradual changes.',hr:49,ha:6,temp:33.3,ta:.22,risk:46,ra:11,period:27,mode:'slow',motion:.018,tilt:2},
  {ar:'إجهاد حراري',en:'Heat stress',noteAr:'ارتفاع تدريجي افتراضي في حرارة الجلد والنبض.',noteEn:'An illustrative rise in skin temperature and pulse.',hr:105,ha:9,temp:36.8,ta:.55,risk:66,ra:15,period:25,mode:'fast',motion:.035,tilt:4},
  {ar:'ضيق تنفس',en:'Breathing difficulty',noteAr:'سيناريو لحركة صدر مرتفعة مع نبض متسارع.',noteEn:'A scenario of increased chest movement and faster pulse.',hr:108,ha:11,temp:33.8,ta:.25,risk:60,ra:14,period:19,mode:'fast',motion:.085,tilt:3},
  {ar:'دوار وعدم اتزان',en:'Dizziness & imbalance',noteAr:'تغير افتراضي أكبر في ميل الرأس والرقبة.',noteEn:'Larger illustrative changes in head and neck tilt.',hr:86,ha:8,temp:33.1,ta:.27,risk:43,ra:12,period:24,mode:'normal',motion:.044,tilt:14},
  {ar:'تدهور بالدورة الدموية',en:'Circulatory deterioration',noteAr:'سيناريو متصاعد يجمع تسارع النبض وتغير حرارة الجلد.',noteEn:'An escalating scenario combining faster pulse and skin-temperature changes.',hr:136,ha:13,temp:32.7,ta:.4,risk:84,ra:10,period:21,mode:'fast',motion:.016,tilt:3},
  {ar:'ألم صدري',en:'Chest discomfort',noteAr:'سيناريو لألم صدري مُبلّغ عنه مع تغير النبض.',noteEn:'A reported chest-discomfort scenario with a varying pulse.',hr:97,ha:8,temp:33.6,ta:.25,risk:51,ra:14,period:28,mode:'normal',motion:.029,tilt:2},
  {ar:'رعشة وقشعريرة',en:'Tremor & chills',noteAr:'حركة افتراضية أعلى مع تشوش حركي بالموجة.',noteEn:'Increased simulated movement and motion artifact in the trace.',hr:101,ha:10,temp:35.6,ta:.5,risk:57,ra:12,period:23,mode:'tremor',motion:.095,tilt:8},
  {ar:'إغماء عابر',en:'Transient faintness',noteAr:'سيناريو لتغير وضعية الرأس ثم تحسن تدريجي.',noteEn:'A head-position change followed by an illustrative recovery.',hr:66,ha:9,temp:33.0,ta:.3,risk:46,ra:14,period:32,mode:'normal',motion:.021,tilt:19},
  {ar:'قلق وتسارع نبض',en:'Anxiety & fast pulse',noteAr:'نبض افتراضي متسارع مع دورات هدوء وتحسن.',noteEn:'Faster simulated pulse with cycles of settling and improvement.',hr:110,ha:15,temp:33.5,ta:.28,risk:44,ra:15,period:26,mode:'fast',motion:.047,tilt:5},
  {ar:'تعافٍ بعد الإجهاد',en:'Recovery after exertion',noteAr:'سيناريو منخفض الخطورة مع نبض يستقر تدريجيًا.',noteEn:'A low-risk illustrative scenario with a settling pulse.',hr:77,ha:6,temp:33.4,ta:.24,risk:22,ra:9,period:30,mode:'normal',motion:.026,tilt:3},
  {ar:'انخفاض حرارة الجلد',en:'Low skin temperature',noteAr:'حرارة جلد افتراضية منخفضة مع تغيرات بطيئة.',noteEn:'Lower simulated skin temperature with slow changes.',hr:74,ha:7,temp:30.9,ta:.45,risk:48,ra:11,period:29,mode:'low',motion:.014,tilt:2}
 ];
 const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
 function profile(p){
  const base=profiles[((Number.isInteger(p.scenarioId)?p.scenarioId:p.slot)||0)%profiles.length]||profiles[0];
  const training=p.trainingProfile;
  return training?{...base,hr:training.hr,risk:({critical:85,warning:56,stable:24})[training.status],ra:3,mode:'normal',ha:3}:base;
 }
 function sample(p,t=0){
  if(p.closedAt&&p.frozenTelemetry)return {...p.frozenTelemetry};
  if(!p.demo)return {hr:null,temp:null,pitchHead:null,rollHead:null,pitchNeck:null,rollNeck:null,chestMotion:null,risk:null,confidence:null,indicator:'offline'};
  if(p.closedAt)return {hr:p.hr,temp:p.temp,pitchHead:p.pitchHead,rollHead:p.rollHead,pitchNeck:p.pitchNeck,rollNeck:p.rollNeck,chestMotion:p.chestMotion,risk:{critical:78,warning:46,stable:12}[p.indicator]||0,confidence:94,indicator:p.indicator};
  const a=profile(p),phase=(p.scenarioId??p.slot??0)*.73,w=t*2*Math.PI/a.period;
  let risk=a.risk+a.ra*Math.sin(w+phase)+1.5*Math.sin(t*.71+phase);
  if(p.manualScenario&&p.manualScenario!=='offline')risk=({stable:22,warning:56,critical:85}[p.manualScenario]||a.risk)+4*Math.sin(w+phase);
  risk=Math.round(clamp(risk,3,97));
  return {hr:Math.round(clamp(a.hr+a.ha*Math.sin(w*1.35+phase)+a.ha*.18*Math.sin(t*1.6+phase),35,175)),temp:Number((a.temp+a.ta*Math.sin(w*.75+phase)).toFixed(2)),pitchHead:Number((a.tilt*.45*Math.sin(t*.43+phase)).toFixed(2)),rollHead:Number((a.tilt*.3*Math.cos(t*.39+phase)).toFixed(2)),pitchNeck:Number((a.tilt*Math.sin(t*.27+phase)).toFixed(2)),rollNeck:Number((a.tilt*.65*Math.cos(t*.32+phase)).toFixed(2)),chestMotion:Number((a.motion*(1+.32*Math.sin(t*.65+phase))).toFixed(4)),risk,confidence:Math.round(89+6*(1+Math.sin(w*.6+phase))/2),indicator:risk>=72?'critical':risk>=42?'warning':'stable'};
 }
 const gaussian=(x,m,s)=>Math.exp(-.5*((x-m)/s)**2);
 function irregularBeatDistance(t,hr){
  const intervals=[.85,1.31,.74,1.12,.91,1.25,.82], period=60/hr;
  const cycle=intervals.reduce((sum,n)=>sum+n,0)*period;
  const position=((t%cycle)+cycle)%cycle;
  let previous=0;
  for(const interval of intervals){
   const next=previous+interval*period;
   if(position<next)return position-previous<next-position?position-previous:position-next;
   previous=next;
  }
  return 0;
 }
 function trainingEcg(p,t,a){
  const phase=(p.scenarioId??p.slot??0)*.73,k=2*Math.PI/a.period*1.35;
  const beats=t*a.hr/60-a.ha/60/k*Math.cos(k*t+phase)-a.ha*.18/96*Math.cos(1.6*t+phase);
  const seconds=(beats-Math.round(beats))*60/a.hr;
  const {wander,st,rhythm}=p.trainingProfile.trace;
  if(rhythm==='af'){
   const q=irregularBeatDistance(t,a.hr);
   return -.12*gaussian(q,-.024,.009)+gaussian(q,0,.011)-.24*gaussian(q,.026,.010)
    +.24*gaussian(q,.145,.034)+.024*Math.sin(t*39)+.011*Math.sin(t*52+.4);
  }
  const sigmoid=x=>1/(1+Math.exp(-x));
  const segment=sigmoid((seconds-.047)/.008)-sigmoid((seconds-.145)/.014);
  return .11*gaussian(seconds,-.141,.018)-.13*gaussian(seconds,-.026,.008)
   +gaussian(seconds,0,.010)-.25*gaussian(seconds,.027,.009)
   +.25*gaussian(seconds,.151,.032)+st*segment
   +wander*Math.sin(t*2.4+phase)+.006*Math.sin(t*57+phase);
 }
 function ecgPoint(p,t){const a=profile(p);if(p.trainingProfile?.trace)return trainingEcg(p,t,a);const phase=(p.scenarioId??p.slot??0)*.73,k=2*Math.PI/a.period*1.35;let beats=t*a.hr/60-a.ha/60/k*Math.cos(k*t+phase)-a.ha*.18/96*Math.cos(1.6*t+phase)+(a.mode==='irregular'?.16*Math.sin(t*2.1):0);let q=((beats%1)+1)%1;let v=.08*gaussian(q,.16,.04)-.13*gaussian(q,.35,.012)+gaussian(q,.39,.011)-.3*gaussian(q,.425,.016)+.22*gaussian(q,.66,.065);v*=a.mode==='low'?.62:1;v+=.025*Math.sin(t*2.5);if(a.mode==='tremor')v+=.085*Math.sin(t*37)+.025*Math.sin(t*61);return v;}
 function wavePath(p,t,width=300,height=34){if(p.closedAt&&Number.isFinite(p.frozenAtSimulation))t=p.frozenAtSimulation;const duration=width>400?5.5:3.2,step=p.trainingProfile?.trace?1:width>400?2:3;let path='',lastY=0;for(let x=0;x<=width;x+=step){const at=t-duration+x/width*duration;const y=clamp(height*.64-ecgPoint(p,at)*height*.48,2,height-2);lastY=y;path+=(x?'L':'M')+x.toFixed(1)+','+y.toFixed(2);}return {path,lastY};}
 function trendPoints(p,key,t,width=500,height=140){if(p.closedAt){t=p.frozenAtSimulation??0;p={...p,closedAt:null,frozenTelemetry:null};}const vals=Array.from({length:40},(_,i)=>{const s=sample(p,t-20+i/39*20);return key==='motion'?s.pitchNeck:s[key];});const a=profile(p),lo=key==='hr'?a.hr-a.ha*1.7:key==='temp'?a.temp-a.ta*1.8:-a.tilt*1.6,hi=key==='hr'?a.hr+a.ha*1.7:key==='temp'?a.temp+a.ta*1.8:a.tilt*1.6;return vals.map((v,i)=>`${(i/39*width).toFixed(1)},${(height-10-clamp((v-lo)/(hi-lo||1),0,1)*(height-20)).toFixed(2)}`).join(' ');}
 return {profiles,profile,sample,wavePath,trendPoints};
});
