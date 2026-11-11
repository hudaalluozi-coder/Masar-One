'use strict';
(() => {
const KEY='masar-one-dashboard-v2';
const paths={pulse:'M2 12h4l3-8 5 16 3-8h5',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',alert:'m12 3 10 18H2L12 3Zm0 6v5m0 3h.01',temp:'M9 14.5V5a3 3 0 0 1 6 0v9.5a5 5 0 1 1-6 0ZM12 8v9m-1 1h2',user:'M20 21v-2a7 7 0 0 0-14 0v2M13 4a4 4 0 1 1-1 0Z',grid:'M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z',cases:'M8 5V3h8v2M3 5h18v15H3ZM3 10h18m-11 0v3h4v-3',settings:'m9 3-1 3-3 1-2 3 2 2-1 4 3 2 3-1 3 2 3-2 4-1v-4l2-2-2-3-3-1-1-3Zm3 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',menu:'M4 6h16M4 12h16M4 18h16',close:'m6 6 12 12M18 6 6 18',plus:'M12 4v16M4 12h16',search:'M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm6 14 4 4',sun:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5',moon:'M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z',arrow:'m15 5-7 7 7 7M8 12h13',chevron:'m9 5 7 7-7 7',qr:'M3 3h6v6H3ZM15 3h6v6h-6ZM3 15h6v6H3Zm12 0h3v3h-3Zm6 0v6h-3m-6-9v3m0 6v-3m6-6h3',camera:'M8 5l2-2h4l2 2h5v16H3V5Zm4 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',head:'M8 21v-5l-3-2 1-3V8a7 7 0 0 1 14 0v4a6 6 0 0 1-5 6v3M7 7h10',chest:'M8 3c0 3-3 3-4 5l-1 12h18L20 8c-1-2-4-2-4-5M12 8v5m0 0-5 5m5-5 5 5',neck:'M8 3v5l-4 3 3 8 5-3 5 3 3-8-4-3V3M7 12l5 2 5-2',bluetooth:'m7 6 10 10-5 5V3l5 5L7 18',battery:'M3 7h16v10H3Zm18 3v4M6 10h3v4H6Zm6 0h4v4h-4Z',clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l4 2',check:'m5 12 4 4L20 5',edit:'m15 4 5 5M4 20l1-5L17 3l4 4L9 19l-5 1Z',download:'M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4',play:'m8 4 12 8-12 8Z',sound:'M9 8 5 12l4 4m4-10a9 9 0 0 1 0 12m4-16a14 14 0 0 1 0 20',spark:'m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z',shield:'m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4Zm-4 9 3 3 5-6',link:'m10 13 4-4m-7 6-2 2a3 3 0 0 0 4 4l4-4a3 3 0 0 0 0-4m4-4 2-2a3 3 0 0 0-4-4l-4 4a3 3 0 0 0 0 4',file:'M6 2h9l5 5v15H6Zm9 0v6h5M9 12h8m-8 4h8',info:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 7v6m0-9h.01'};
const icon=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name]||paths.pulse}"/></svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const employees=[{id:'EMS024',nameAr:'خالد العتيبي',nameEn:'Khalid Alotaibi',roleAr:'أخصائي إسعاف وطب طوارئ',roleEn:'Emergency medical specialist',agencyAr:'فريق الاستجابة الميدانية',agencyEn:'Field response team',email:'',phone:'',regionAr:'جدة',regionEn:'Jeddah'},{id:'EMS031',nameAr:'نورة الحربي',nameEn:'Noura Alharbi',roleAr:'أخصائية إسعاف',roleEn:'Paramedic',agencyAr:'فريق الاستجابة الميدانية',agencyEn:'Field response team',email:'',phone:'',regionAr:'جدة',regionEn:'Jeddah'},{id:'EMS046',nameAr:'محمد الشهري',nameEn:'Mohammed Alshehri',roleAr:'مسعف',roleEn:'Emergency responder',agencyAr:'فريق الاستجابة الميدانية',agencyEn:'Field response team',email:'',phone:'',regionAr:'مكة المكرمة',regionEn:'Makkah'}];
const fixtures=[['أحمد محمد علي','Ahmed Mohammed Ali','critical',125,36.5,34,'male'],['فاطمة حسن','Fatimah Hassan','stable',72,33.4,29,'female'],['محمود عبدالله','Mahmoud Abdullah','warning',95,35.2,46,'male'],['نورة خالد','Noura Khalid','stable',68,33.1,27,'female'],['عبدالله فهد','Abdullah Fahad','warning',86,33.1,43,'male'],['سعيد أحمد','Saeed Ahmed','critical',132,36.9,58,'male'],['مريم سالم','Maryam Salem','stable',75,33.6,38,'female'],['عبدالرحمن يوسف','Abdulrahman Yousef','warning',88,35.1,41,'male'],['هدى ناصر','Huda Nasser','stable',70,33.3,32,'female'],['ليان صالح','Layan Saleh','warning',110,33.5,24,'female'],['خالد عمر','Khalid Omar','stable',73,33.4,25,'male'],['سارة إبراهيم','Sarah Ibrahim','warning',92,35.3,36,'female']];
function initial(){const slots=fixtures.map((a,i)=>a?{id:'demo-'+(i+1),slot:i,code:'MS1:'+['M02','M03','M04','M05','M12','M06','M07','M08','M09','M13','M10','M11'][i],scenarioId:i,nameAr:a[0],nameEn:a[1],fullName:'',indicator:a[2],hr:a[3],temp:a[4],age:a[5],sex:a[6],dob:'',phone:'',email:'',identity:'',city:'',address:'',blood:'',conditions:'',allergies:'',medications:'',contactName:'',contactPhone:'',contactRelation:'',createdAt:Date.now()-(i+2)*180000,assignedTo:employees[i%3].id,pitchHead:2.3,rollHead:1.2,pitchNeck:3.4,rollNeck:1.8,chestMotion:.025,notes:[],events:[{at:Date.now()-(i+2)*180000,ar:'تم ربط الطقم بالحالة التجريبية',en:'Demo kit linked to this case'}],demo:true}:null);return{version:2,previewScenarioVersion:3,prefs:{lang:'ar',theme:'dark',animate:true},employees:structuredClone(employees),activeEmployee:'EMS024',slots,history:[]};}
let state;try{state=JSON.parse(localStorage.getItem(KEY)||'null');if(!state||state.version!==2||state.slots?.length!==12||!Array.isArray(state.history)||!Array.isArray(state.employees))state=initial();}catch{state=initial();}
const Engine=window.MasarSimulation;
if(state.previewScenarioVersion!==3){
 const fresh=initial();const used=new Set(state.slots.filter(Boolean).map(p=>p.code));
 state.slots.forEach((p,i)=>{if(p?.id.startsWith('demo-'))p.scenarioId=i;});
 for(const i of [4,9])if(!state.slots[i]&&!state.history.some(p=>p.slot===i)){let p=fresh.slots[i];if(used.has(p.code)){let k=14;while(used.has('MS1:M'+k))k++;p.code='MS1:M'+k;}state.slots[i]=p;used.add(p.code);}
 state.previewScenarioVersion=3;state.prefs.animate=true;try{localStorage.setItem(KEY,JSON.stringify(state));}catch{}
}
let simSeconds=0,lastAnimationAt=performance.now(),lastWaveAt=0,lastNumberAt=0;
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
paths.pause='M9 5v14M15 5v14';
let drawerOpen=false,tab='overview',query='',scanner=null,stream=null,cameraTimer=null,toastTimer=null,modalMode=null,targetSlot=null,editedPatient=null,tick=0;
const L=(ar,en)=>state.prefs.lang==='ar'?ar:en;
const nameOf=p=>p?.fullName||L(p?.nameAr,p?.nameEn)||L('شخص غير مسمى','Unnamed person');
const employee=()=>state.employees.find(x=>x.id===state.activeEmployee)||state.employees[0];
const employeeName=id=>{const e=state.employees.find(x=>x.id===id);return e?L(e.nameAr,e.nameEn):'—';};
const currentEmployeeName=()=>employeeName(state.activeEmployee);
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({...state,slots:state.manualSlots}));return true;}catch{toast(L('تعذر حفظ التغيير في هذا المتصفح.','This browser could not save the change.'));return false;}};
const Gateway=window.MasarGateway;
const demoSlots=initial().slots;
if(!state.manualSlots)state.manualSlots=state.slots.map(p=>p&&!p.demo&&!p.id.startsWith('demo-')?p:null);
if(!state.autoSlots)state.autoSlots=[null,...demoSlots.slice(1)];
const hudaId='EMS024',khalidId='EMS031';
const baseBoard=()=>state.activeEmployee===hudaId;
const unlimitedBoard=()=>state.activeEmployee===khalidId;
const isOwnCase=p=>baseBoard()?!p.workspaceId:p.workspaceId===state.activeEmployee;
function initializeBoards(){
 if(!state.responderBoards){
  state.activeEmployee=hudaId;
  state.responderPrefs={};
  Object.assign(state.employees.find(p=>p.id===hudaId),{nameAr:'هدى اللوزي',nameEn:'Huda Al-Louzi'});
  Object.assign(state.employees.find(p=>p.id===khalidId),{nameAr:'خالد العتيبي',nameEn:'Khalid Alotaibi'});
  state.responderBoards=Object.fromEntries(Object.entries(window.MasarResponderDemos).map(([id,records])=>[
   id,records.map((record,i)=>({...demoSlots[i+1],id:id+'-demo-'+i,slot:i,scenarioId:i,
    code:'MS1:'+ (id===khalidId?'K':'S')+(i+1),assignedTo:id,workspaceId:id,responderScenario:i,indicator:record.status}))
  ]));
 }
}
initializeBoards();
state.responderPrefs??={};
let mode=(baseBoard()?state.prefs:state.responderPrefs[hudaId])?.mode==='auto'?'auto':'manual', pendingLink=false;
function selectSlots(){state.slots=baseBoard()?(mode==='auto'?state.autoSlots:state.manualSlots):state.responderBoards[state.activeEmployee];}
selectSlots();
const connections=new Map(), liveHistory=new Map(), analysisRuns=new Map();
const isLive=p=>Boolean(p&&!p.demo);
const isAutomatic=()=>baseBoard()&&mode==='auto';
function makeCase(code,slot,data={}){
 return {id:crypto.randomUUID(),slot,code,...data,nameAr:'',nameEn:'',indicator:'offline',
  createdAt:Date.now(),assignedTo:state.activeEmployee,notes:[],events:[],demo:false};
}
function switchMode(next){
 if(!baseBoard()||next===mode||pendingLink)return;
 for(const [id,{device}] of connections){if(device.gatt.connected)device.gatt.disconnect();if(isAutomatic()){liveHistory.delete(id);analysisRuns.delete(id);}}
 connections.clear();mode=next;state.prefs.mode=next;query='';
 selectSlots();
 save();nav('#/');render();
}
function chooseMode(next){
 if(pendingLink)return;
 switchMode(next);

}
function sample(p,t){
 if(!isLive(p))return Engine.sample(withTraining(p),t);
 const history=p.closedAt?p.sensorHistory:liveHistory.get(p.id);
 const last=history?.at(-1);
 return last&&(p.closedAt||(connections.has(p.id)&&Date.now()-last.at<3500))?{...last,indicator:'offline'}:{indicator:'offline'};
}
function sourceLabel(p){
 if(p.demo)return L('حالة تدريبية','Training case');
 if(p.closedAt)return L('قراءات محفوظة','Recorded readings');
 return sample(p).online?L('قراءات مباشرة','Live readings'):L('ملف محفوظ · الحساسات غير متصلة','File saved · sensors disconnected');
}
function modeControls(){
 return `<div class="mode-controls" aria-label="${L('وضع التشغيل','Operating mode')}">
 <button class="button ${isAutomatic()?'primary':''}" data-action="mode-auto" aria-pressed="${isAutomatic()}"><kbd>1</kbd>${L('إلكتروني','Automatic')}</button>
 <button class="button ${!isAutomatic()?'primary':''}" data-action="mode-manual" aria-pressed="${!isAutomatic()}"><kbd>2</kbd>${L('يدوي','Manual')}</button></div>`;
}
async function linkGateway(existing,slot,data={},expected=existing?.code){
 if(pendingLink)return;
 pendingLink=true;
 let device;
 try{
  device=await Gateway.select(navigator.bluetooth,expected);
  if([...connections.values()].some(link=>link.device.id===device.id))throw Error('already-linked');
  let person=existing;
  const code=await Gateway.open(device,expected,reading=>{
   if(!person||connections.get(person.id)?.device!==device)return;
   const rows=liveHistory.get(person.id)||[];
   rows.push(reading);if(rows.length>900)rows.shift();
   liveHistory.set(person.id,rows);
  });
  if(!device.gatt.connected)throw Error('disconnected');
  if(state.slots.some((p,i)=>i!==slot&&p&&!p.demo&&p.code===code))throw Error('already-linked');
  if(!person)person=makeCase(code,slot,data);
  person.code=code;
  const id=person.id;
  connections.set(id,{device});
  device.addEventListener('gattserverdisconnected',()=>{
   if(connections.get(id)?.device===device){connections.delete(id);updateReadouts();}
  },{once:true});
  state.slots[slot]=person;
  save();
  if(document.getElementById('case-dialog').open)dismiss();
  nav('#/patient/'+id);
  render();
 }catch(error){
  if(device?.gatt?.connected&&![...connections.values()].some(link=>link.device===device))device.gatt.disconnect();
  const message=error.message==='unsupported'?L('جرّبي Chrome أو Edge على جهاز يدعم Web Bluetooth.','Use a device and browser that support Web Bluetooth.'):
   error.message==='kit-mismatch'?L('معرّف لصقة الجبهة مختلف عن الباركود.','The forehead gateway ID does not match the barcode.'):
   error.message==='already-linked'?L('هذه اللصقة مرتبطة ببطاقة بالفعل.','This gateway is already linked.'):
   L('تعذّر الاتصال بلصقة الجبهة. تحققي من تشغيلها واختيارها في نافذة Bluetooth.','Could not connect. Power on the forehead gateway and select it in the Bluetooth prompt.');
  formError(message);toast(message);
 }finally{pendingLink=false;}
}
function liveAnalysis(p){
 const report=analysisRuns.get(p.id);
 const headings={head:L('الجبهة وخلف الأذن','Forehead and behind ear'),chest:L('الصدر','Chest'),neck:L('الرقبة','Neck')};
 const names={temp:L('حرارة الجلد','Skin temperature'),pitchHead:L('ميل الرأس','Head pitch'),rollHead:L('الميل الجانبي للرأس','Head roll'),hr:L('النبض المقدّر','Estimated pulse'),chestMotion:L('حركة الصدر','Chest movement'),pitchNeck:L('ميل الرقبة','Neck pitch'),rollNeck:L('الميل الجانبي للرقبة','Neck roll'),chestAudio:L('مستوى الإشارة الصوتية الخام','Raw acoustic signal level'),ecgRaw:L('مستوى إشارة القلب الخام','Raw ECG sample')};
 return `<aside class="panel ai-panel"><div class="panel-title"><h2>${L('مراجعة قراءات اللصقات','Review patch readings')}</h2></div>
 <p class="small muted">${L('مراجعة تجريبية للقراءات الفعلية ضمن نافذة القياس المتاحة.','Bench review of readings in the available measurement window.')}</p>
 ${actionButton('analyze',L('حلّل جميع القراءات','Analyze all readings'),'spark','primary',`data-id="${p.id}"`)}
 ${report?.length?`<div class="section-gap"><small>${fTime(report[0].at)} – ${fTime(report.at(-1).at)} · ${report.length} ${L('حزمة','packets')}</small>
 ${Object.entries(headings).map(([role,label])=>`<div class="scenario-context section-gap"><strong>${label}</strong><ul class="ai-list">${Gateway.signals.filter(([, , r])=>r===role).map(([key])=>{
  const values=report.map(row=>row[key]).filter(Number.isFinite);
  return `<li>${names[key]} · ${values.length?`<bdi>${values[0]} → ${report.at(-1)[key]??'—'} | ${Math.min(...values)} – ${Math.max(...values)} | Δ ${(values.at(-1)-values[0]).toFixed(2)}</bdi>`:L('لا توجد قراءة','No reading')}</li>`;
 }).join('')}</ul></div>`).join('')}</div>`:report?`<p>${L('لم تصل قراءات للتحليل.','No readings are available to analyze.')}</p>`:''}
 <p class="ai-disclosure">${L('تُعرض تغيّرات الإشارة خلال نافذة القياس.','Shows signal changes during the measurement window.')}</p></aside>`;
}

const statusName=s=>({critical:L('حرجة','Critical'),warning:L('تحذير','Caution'),stable:L('مستقرة','Stable'),offline:L('بانتظار القراءات','Awaiting readings'),empty:L('بطاقة متاحة','Available slot')}[s]||'—');
const statusIcon=s=>s==='critical'?'alert':s==='warning'?'pulse':s==='stable'?'heart':'user';
const roleName=r=>({head:L('الرأس والأذن','Head & ear'),chest:L('الصدر','Chest'),neck:L('فراشة الرقبة','Neck butterfly')}[r]);
const fTime=v=>new Intl.DateTimeFormat(state.prefs.lang==='ar'?'ar-SA-u-ca-gregory-nu-latn':'en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Riyadh'}).format(v);
const fDate=v=>new Intl.DateTimeFormat(state.prefs.lang==='ar'?'ar-SA-u-ca-gregory-nu-latn':'en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'Asia/Riyadh'}).format(v);
const codeKit=p=>p.code?.split(':')[1]||'—';
const findPatient=id=>state.slots.find(p=>p?.id===id)||state.history.find(p=>p.id===id&&isOwnCase(p));
const activeCount=()=>state.slots.filter(Boolean).length;
const demoValue=(p,key)=>{const v=sample(p,simSeconds)[key];return v==null?'—':Number(v).toFixed(key==='hr'?0:key==='temp'?1:2);};
const trainingCase=p=>p?.demo?(p.workspaceId?window.MasarResponderDemos[p.workspaceId]?.[p.responderScenario]:window.MasarTrainingCases[(p.scenarioId??p.slot)-1]):null;
const withTraining=p=>{const training=trainingCase(p);return training?{...p,trainingProfile:training}:p;};
const scenarioLabel=p=>p.demo?(trainingCase(p)?L(...trainingCase(p).title):L(Engine.profile(p).ar,Engine.profile(p).en)):sourceLabel(p);
const Alarm=window.MasarCriticalAlarm;
let alarmReady=false;
function alarmLabel(){
 if(state.prefs.criticalAlarm===false)return L('تشغيل جرس الحالات الحرجة','Enable critical alarm');
 return alarmReady?L('كتم جرس الحالات الحرجة','Mute critical alarm'):L('تفعيل صوت التنبيه','Activate alarm sound');
}
function updateAlarm(){
 Alarm.update(alarmReady&&state.prefs.criticalAlarm!==false&&state.slots.some(p=>p&&!p.closedAt&&p.indicator==='critical'));
}
async function toggleAlarm(){
 if(alarmReady&&state.prefs.criticalAlarm!==false){state.prefs.criticalAlarm=false;save();updateAlarm();render();return;}
 alarmReady=await Alarm.unlock();
 if(!alarmReady){toast(L('تعذر تشغيل الصوت في هذا المتصفح.','Audio could not start in this browser.'));return;}
 state.prefs.criticalAlarm=true;save();updateAlarm();render();
}
function metric(p,key,digits){const v=sample(p,simSeconds)[key];return `<span data-metric="${key}" data-person="${p.id}" data-digits="${digits}">${v==null?'—':Number(v).toFixed(digits)}</span>`;}
function syncModel(){for(const p of state.slots){if(!p||p.closedAt||!p.demo)continue;const v=sample(p,simSeconds);for(const key of ['hr','temp','pitchHead','rollHead','pitchNeck','rollNeck','chestMotion','indicator'])p[key]=v[key];}}
function wave(p,width=300,height=34,mini=true){if(!p.demo)return `<div class="signal-empty">${L('بانتظار الإشارة','Awaiting signal')}</div>`;const w=Engine.wavePath(withTraining(p),simSeconds,width,height);return `<svg class="${mini?'mini-ecg':'chart ecg-chart'}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" data-wave="${p.id}" data-width="${width}" data-height="${height}" role="img" aria-label="${L('موجة محاكاة متحركة','Animated simulated waveform')}">${mini?'':[20,40,60,80,100].map(y=>`<path class="gridline" d="M0 ${y}H${width}"/>`).join('')}<path class="wave-line" d="${w.path}"/><circle class="wave-tip" cx="${width-1}" cy="${w.lastY}" r="${mini?2.3:3.5}"/></svg>`;}
function trackingButton(){return `<button class="icon-button tracking-control" data-action="tracking" aria-label="${state.prefs.animate?L('إيقاف المحاكاة مؤقتًا','Pause simulation'):L('تشغيل المحاكاة','Play simulation')}" title="${state.prefs.animate?L('إيقاف المحاكاة مؤقتًا','Pause simulation'):L('تشغيل المحاكاة','Play simulation')}">${icon(state.prefs.animate?'pause':'play')}</button><span class="tracking-pill"><i></i>${L('تتبّع الحالات التدريبية','Training case tracking')}</span>`;}
function toast(s){const el=document.getElementById('toast');el.textContent=s;el.className='show';clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.className='',3600);}
function nav(to){drawerOpen=false;tab='overview';location.hash=to;if(location.hash===to)render();window.scrollTo({top:0,behavior:'instant'});}
function actionButton(a,label,ico,cls='',extra=''){return`<button type="button" class="button ${cls}" data-action="${a}" ${extra}>${ico?icon(ico):''}${esc(label)}</button>`;}
function badge(p){return`<span data-live-badge="${p.id}" class="status-badge ${p.indicator}">${icon(statusIcon(p.indicator))}${statusName(p.indicator)}</span>`;}
function navItems(){return[['dashboard','grid',L('لوحة المتابعة','Monitoring board'),'#/'],['cases','cases',L('سجل الحالات','Case history'),'#/cases'],['profile','user',L('ملف المسعف','Responder profile'),'#/profile'],['settings','settings',L('الإعدادات','Settings'),'#/settings']];}
function route(){const a=location.hash.replace(/^#\/?/,'').split('/');return{page:a[0]||'dashboard',id:a[1]};}
function chrome(){const rt=route();const active=rt.page==='patient'?'dashboard':rt.page;return`<div class="shell"><aside class="rail" aria-label="${L('القائمة الرئيسية','Main menu')}"><div class="brand-mark">${icon('pulse')}</div><button class="icon-button" data-action="drawer" aria-label="${L('فتح القائمة الجانبية','Open sidebar')}" aria-expanded="${drawerOpen}">${icon('menu')}</button><nav class="rail-nav">${navItems().map(([key,ico,title,url])=>`<button class="icon-button ${active===key?'active':''}" data-route="${url}" aria-label="${title}" title="${title}">${icon(ico)}</button>`).join('')}</nav><div class="rail-bottom"><span class="demo-tag" title="${L('بيانات افتراضية','Sample data')}">${icon('bluetooth')}</span><button class="avatar" data-route="#/profile" aria-label="${L('ملف المسعف','Responder profile')}">${esc(currentEmployeeName().slice(0,1))}</button></div></aside><header class="topbar"><button class="icon-button mobile-menu" style="display:none" data-action="drawer" aria-label="${L('القائمة','Menu')}">${icon('menu')}</button><button class="button primary" data-action="add" ${isAutomatic()||(!baseBoard()&&!unlimitedBoard()&&!slotsAvailable())?'hidden':''} aria-label="${L('إضافة لصقة','Add patch kit')}">${icon('plus')}<span class="add-label">${L('إضافة لصقة','Add patch kit')}</span></button><div class="top-brand"><div class="wordmark">MASAR ONE <span>${L('مسار ون','Responder workspace')}</span></div></div><span class="demo-tag">${L('متابعة الحالات','Case monitoring')}</span><div class="top-actions"><button class="icon-button" data-action="critical-alarm" aria-label="${alarmLabel()}" title="${alarmLabel()}" aria-pressed="${alarmReady&&state.prefs.criticalAlarm!==false}">${icon(state.prefs.criticalAlarm===false?'close':'sound')}</button><button class="icon-button" data-action="language" aria-label="${L('Switch to English','التغيير للعربية')}" title="${L('Switch to English','التغيير للعربية')}"><span class="small">${state.prefs.lang==='ar'?'EN':'عربي'}</span></button><button class="icon-button" data-action="theme" aria-label="${L('تغيير المظهر','Change theme')}" title="${L('تغيير المظهر','Change theme')}">${icon(state.prefs.theme==='dark'?'sun':'moon')}</button><button class="avatar" data-action="drawer" title="${esc(currentEmployeeName())}">${esc(currentEmployeeName().slice(0,1))}</button></div></header><main id="main" class="main" tabindex="-1"></main><div class="drawer-shade" ${drawerOpen?'':'hidden'} data-action="drawer"></div><aside class="drawer" ${drawerOpen?'':'hidden inert'} aria-label="${L('القائمة الجانبية','Sidebar')}"><div class="drawer-top"><div><b>MASAR ONE</b><div class="small muted">${L('لوحة التحكم للمسعف','Responder dashboard')}</div></div><button class="icon-button" data-action="drawer" aria-label="${L('إغلاق القائمة','Close menu')}">${icon('close')}</button></div><nav class="drawer-nav">${navItems().map(([key,ico,title,url])=>`<button class="${active===key?'active':''}" data-route="${url}">${icon(ico)}${title}</button>`).join('')}</nav><div class="drawer-employee"><div class="employee-label"><div class="avatar">${esc(currentEmployeeName().slice(0,1))}</div><div><strong>${esc(currentEmployeeName())}</strong><small>${employee().id} · ${L('ملف تجريبي','Demo profile')}</small></div></div><label class="field section-gap">${L('عرض مساحة مسعف آخر','Switch responder workspace')}<select id="employee-switch">${state.employees.map(e=>`<option value="${e.id}" ${e.id===state.activeEmployee?'selected':''}>${esc(L(e.nameAr,e.nameEn))}</option>`).join('')}</select></label><p class="small muted section-gap">${L('تتصل اللوحة بلصقة الجبهة فقط.','The board connects only to the forehead gateway.')}</p></div></aside></div>`;}
function footer(){return`<footer class="workspace-foot"><div class="legend">${['critical','warning','stable'].map(s=>`<span class="${s}"><i class="dot"></i>${statusName(s)}</span>`).join('')}</div><span>${L('مساحة متابعة الحالات','Case monitoring workspace')} · MASAR ONE</span></footer>`;}
function card(p,i){if(!p)return`<button type="button" class="case-card empty" data-add-slot="${i}" aria-label="${L('تسجيل حالة في البطاقة','Register case in slot')} ${i+1}"><div class="case-card-top"><span class="case-title">${L('حالة','Case')} ${String(i+1).padStart(2,'0')}</span><span class="slot-number">#${String(i+1).padStart(2,'0')}</span></div><div class="empty-content">${icon('plus')}<b>${L('تسجيل حالة','Register case')}</b><span class="small">${L('باركود واحد · ثلاث لصقات','One barcode · Three patches')}</span></div></button>`;
 const matches=!query||[nameOf(p),p.code,p.nameAr,p.nameEn,scenarioLabel(p)].join(' ').toLowerCase().includes(query.toLowerCase());return`<button type="button" class="case-card ${p.indicator} ${p.demo?'tracking-card':''} ${matches?'':'dimmed'}" data-patient="${p.id}" aria-label="${esc(nameOf(p))}, ${statusName(p.indicator)}" style="--phase:${-i*.3}s"><div class="case-card-top"><span class="state-icon">${icon(statusIcon(p.indicator))}</span><span><span class="case-title">${L('حالة','Case')} ${String(i+1).padStart(2,'0')}</span><span class="state-label">${statusName(p.indicator)}</span></span><span class="slot-number">#${String(i+1).padStart(2,'0')}</span></div><div class="patient-name">${icon('user')}${esc(nameOf(p))}</div><div class="case-condition">${esc(scenarioLabel(p))}<span class="scenario-word">${p.demo?' · '+L('سيناريو','Scenario'):''}</span></div><div class="card-vitals"><span class="card-reading">${icon('heart')}${metric(p,'hr',0)}<small>bpm</small></span><span class="card-reading temp">${icon('temp')}${metric(p,'temp',1)}<small>°C</small></span></div>${wave(p)}<div class="card-foot"><span class="patch-mini">${p.patchCount&&p.patchCount!==3?icon('link'):['head','chest','neck'].map(r=>icon(r)).join('')}<span class="patch-mini-label">${patchLabel(p)}</span></span><span class="ltr">${esc(codeKit(p))} · <span class="live-source">${sourceLabel(p)}</span></span></div></button>`;}
const slotsAvailable=()=>state.slots.length-activeCount();
const patchCounts=[1,2,3,5];
const patchLabel=p=>p.patchCount&&p.patchCount!==3?L(`${p.patchCount} لصقة`,`${p.patchCount} ${p.patchCount===1?'patch':'patches'}`):L('ثلاث لصقات','Three patches');
function switchResponder(id){
 if(pendingLink||id===state.activeEmployee||!state.employees.some(x=>x.id===id))return;
 for(const {device} of connections.values())if(device.gatt.connected)device.gatt.disconnect();
 connections.clear();query='';
 state.responderPrefs[state.activeEmployee]=state.prefs;
 state.activeEmployee=id;
 state.prefs=state.responderPrefs[id]??{lang:state.prefs.lang,theme:state.prefs.theme,animate:true};
 selectSlots();save();nav('#/');render();
}
function dashboard(){return`<div class="page-heading"><div><h1>${L('لوحة التحكم للمسعف','Responder dashboard')}</h1><p>${baseBoard()?L('اثنتا عشرة بطاقة. طقم واحد لكل شخص.','Twelve case slots. One kit per person.'):unlimitedBoard()?L('يمكن إضافة حالات واختيار نوع طقم لكل حالة.','Add cases and select a kit for each case.'):L('ست بطاقات. تتاح الإضافة عند تفريغ بطاقة.','Six slots. Free a slot to add a case.')} ${!baseBoard()?'':isAutomatic()?L('افتحي البطاقة الأولى لتسجيل حالة وربط اللصقات. البطاقات الأخرى تعرض حالات تدريبية.','Open slot 01 to register a case and connect its patches. Other slots display training cases.'):L('اختاري بطاقة لتسجيل حالة. يمكنك ربط الطقم عند توفره.','Select a slot to register a case. Connect the kit when available.')}</p></div><div class="heading-tools">${baseBoard()?modeControls():''} ${isAutomatic()||!baseBoard()?trackingButton():''}<div class="search">${icon('search')}<input type="search" id="case-search" value="${esc(query)}" placeholder="${L('ابحث بالاسم أو باركود الطقم','Search name or kit barcode')}" aria-label="${L('البحث عن حالة','Search cases')}"></div><span class="live-clock ltr" id="workspace-clock">${fTime(Date.now())}</span></div></div><div class="summary-strip">${['critical','warning','stable','empty'].map(s=>{const count=s==='empty'?slotsAvailable():state.slots.filter(p=>p?.indicator===s).length;return`<div class="summary-item ${s}"><i class="dot"></i><strong data-summary="${s}">${count}</strong>${statusName(s)}</div>`;}).join('')}<div class="summary-item" style="margin-inline-start:auto">${icon('link')}<span>${activeCount()}${unlimitedBoard()?'':' / '+state.slots.length} ${baseBoard()?L('طقمًا','kits'):L('حالة','cases')}</span></div></div><div id="search-feedback" class="small muted" style="margin-bottom:10px" aria-live="polite"></div><div class="case-grid">${state.slots.map(card).join('')}</div>${footer()}`;}
function anatomy(p){
 const patch=(role,shape)=>`<g class="patch-target ${tab===role?'active':''}" data-patch="${role}" role="button" tabindex="0" aria-label="${roleName(role)}">${shape}</g>`;
 return `<svg class="anatomy ${p.indicator}" viewBox="0 0 240 270" role="group" aria-label="${L('رسم خطي للرأس والرقبة والصدر','Head, neck and chest line drawing')}">
 <g class="anatomy-contour">
 <path d="M21 253 26 217q3-16 21-24l40-16q12-5 14-23l1-14m40-12 2 31q1 12 14 17l42 17q17 7 20 23l6 37M63 224l-4 29m117-29 7 29"/>
 <path d="M95 39q20-18 46-9 22 7 28 29 4 13 0 31l-5 15-11 17-17 14q-12 10-25 5l-16-7q-8-3-12-14l-5-14-10-4q-3-2 0-6l11-15 2-12q4-19 14-30Z"/>
 <path d="M83 59q12-24 38-25 29-1 44 27m-48 64q9-5 15-14m-53-31q8-4 16 1m-14 5 10 1m-9 27q6 2 12 0m54-40q10-6 11 6 0 10-7 17-4 3-7-1m5-7q-4-3 3-8"/>
 <path d="M104 149q3 14 10 25m25-28q-1 16-12 30m-40 9q14 2 31 12 18-10 39-13m-39 13v45m-57-28q18 7 40 6m39 1q22 0 36-7"/>
 </g>
 ${patch('head','<path class="target-fill" d="M84 61q31-8 60-1 12 3 18 11 4 7 2 18l-6 5-4-5q3-11-4-16-24-9-66-3Z"/>')}
 ${patch('neck','<path class="target-fill" d="M98 153q6-5 18 3h6q11-8 18-3l4 8q2 6-5 9-6 2-19-6-12 8-20 6-7-3-5-9Z"/>')}
 ${patch('chest','<path class="target-fill" d="M132 197h9v20l18 20-7 6-16-17-15 17-7-6 18-20Z"/>')}
 </svg>`;
}
function patchIllustration(r){const shape=r==='head'?'<rect x="4" y="12" width="65" height="15" rx="7"/><path d="M68 19q19 0 13 21l-6 9-9-7 6-7 1-10"/>':r==='chest'?'<path d="M39 4h12v18l25 29-10 9-21-25-21 25-10-9 25-29Z"/>':'<path d="m5 14 33 11 33-11 9 17-11 17-31-10L7 48 0 31Z"/>';
 return`<svg class="patch-illustration" viewBox="0 0 90 65" aria-hidden="true"><g fill="currentColor" fill-opacity=".13" stroke="currentColor" stroke-width="1.8">${shape}</g></svg>`;}
function reading(label,value,unit,ico,note=''){return`<div class="reading-tile"><div class="reading-label">${icon(ico)}${label}</div><span class="reading-value">${value}<small>${unit}</small></span>${note?`<small class="reading-note">${note}</small>`:''}</div>`;}
function trend(p,key,color='var(--action)'){if(!p.demo)return`<div class="empty-state">${L('تظهر الاتجاهات عند وصول القراءات','Trends will appear when readings arrive')}</div>`;return`<svg class="chart live-trend" viewBox="0 0 500 140" preserveAspectRatio="none" data-trend="${p.id}" data-signal="${key}" role="img" aria-label="${L('اتجاه متغير لمحاكاة القراءات','Changing simulated reading trend')}">${[10,50,90,130].map(y=>`<path class="gridline" d="M0 ${y}H500"/>`).join('')}<polyline class="trend-trace" points="${Engine.trendPoints(withTraining(p),key,simSeconds)}" fill="none" stroke="${color}" stroke-width="2.4" stroke-linejoin="round"/></svg><div class="chart-times"><span>−20 s</span><span>−15</span><span>−10</span><span>−5</span><span>${L('الآن','Now')}</span></div>`;}
function ecg(p){return p.demo?wave(p,600,120,false):`<div class="empty-state">${L('بانتظار توصيل لصقة الصدر','Awaiting chest patch connection')}</div>`;}
const liveSeries={
 hr:['اتجاه النبض المقدّر','Estimated heart rate trend','bpm',35,180],
 temp:['اتجاه حرارة الجلد','Skin temperature trend','°C',20,45],
 chestMotion:['اتجاه حركة الصدر','Chest motion trend','g',0,1],
 pitchNeck:['اتجاه ميل الرقبة','Neck tilt trend','°',-90,90]
};
function liveTrend(p,key){
 const [ar,en,unit,low,high]=liveSeries[key];
 return `<div class="section-gap"><div class="chart-heading"><h3>${L(ar,en)}</h3><span class="small muted" dir="ltr">${low}–${high} ${unit} · 20 s</span></div>
 <svg class="chart" viewBox="0 0 500 100" preserveAspectRatio="none" role="img" aria-label="${L(ar,en)}" data-live-series="${key}" data-live-case="${p.id}">
 <path class="gridline" d="M0 10H500 M0 50H500 M0 90H500"/><path class="wave-line" fill="none" d="${liveTrendPath(p,key)}"/></svg></div>`;
}
function liveTrendPath(p,key){
 const [, , ,low,high]=liveSeries[key];
 const end=p.closedAt??Date.now(),start=end-20000;
 const rows=p.closedAt?p.sensorHistory:liveHistory.get(p.id);
 let last=-Infinity,path='';
 for(const row of rows||[]){
  if(row.at<start||row.at>end)continue;
  const value=row[key];
  if(!Number.isFinite(value)){last=-Infinity;continue;}
  const x=(row.at-start)/40,y=90-80*Math.max(0,Math.min(1,(value-low)/(high-low)));
  path+=(row.at-last>1500?'M':'L')+x.toFixed(1)+','+y.toFixed(1);
  last=row.at;
 }
 return path;
}
function liveOverview(p,role){
 const labels=[['حرارة الجلد','Skin temperature','°C','temp',1],['ميل الرأس','Head pitch','°','head',1],['الميل الجانبي للرأس','Head roll','°','head',1],
 ['النبض المقدّر','Estimated pulse','bpm','heart',0],['حركة الصدر','Chest motion','g','chest',3],
 ['ميل الرقبة','Neck pitch','°','neck',1],['الميل الجانبي للرقبة','Neck roll','°','neck',1],
 ['مستوى صوت الصدر','Chest sound level','ADC','sound',0],['إشارة القلب الخام','Raw ECG signal','ADC','pulse',0]];
 return `<div class="scenario-context"><strong>${role?roleName(role):L('القراءات الواردة من لصقة الجبهة','Readings relayed by the forehead gateway')}</strong><p>${L('اختبار الحساسات · القيم الناقصة تظهر بشرطة.','Sensor test · Missing readings appear as a dash.')}</p></div><div class="readings-grid">${Gateway.signals.map(([key,,r],i)=>{
  if(role&&role!==r)return '';
  const [ar,en,unit,ico,digits]=labels[i];return reading(L(ar,en),metric(p,key,digits),unit,ico);
 }).join('')}</div>
 ${(!role||role==='chest')?liveTrend(p,'hr')+liveTrend(p,'chestMotion')+`<p class="small muted">${L('لصقة الصدر ترسل عينات متباعدة من إشارة القلب. يتطلب عرض موجة ECG حية بث العينات المتتابعة.','The chest patch sends sparse ECG samples. A live ECG waveform requires streaming consecutive samples.')}</p>`:''}
 ${(!role||role==='head')?liveTrend(p,'temp'):''}${(!role||role==='neck')?liveTrend(p,'pitchNeck'):''}`;
}
function overview(p){if(!p.demo)return liveOverview(p);const a=Engine.profile(p);return`<div class="scenario-context"><span>${L('ملخص الحالة','Case summary')}</span><strong>${esc(scenarioLabel(p))}</strong><p>${p.demo?esc(trainingCase(p)?L(...trainingCase(p).history):L(a.noteAr,a.noteEn)):L('لا توجد قراءات متصلة حاليًا.','No patch readings are connected yet.')}</p></div><div class="readings-grid">${reading(L('النبض','Heart rate'),metric(p,'hr',0),'bpm','heart',L('من لصقة الصدر','From chest patch'))}${reading(L('حرارة الجلد','Skin temperature'),metric(p,'temp',1),'°C','temp',L('خلف الأذن','Behind the ear'))}${reading(L('ميل الرقبة','Neck tilt'),metric(p,'pitchNeck',1),'°','neck',L('موضع الفراشة','Butterfly patch position'))}${reading(L('حركة الصدر','Chest movement'),metric(p,'chestMotion',3),'g','chest',L('مؤشر حركة تجريبي','Illustrative motion reading'))}</div><div class="section-gap"><div class="chart-heading"><h3>${L('اتجاه النبض','Heart rate trend')}</h3><span class="small muted">${L('اتجاه القراءات للحالة التدريبية','Training case trend')}</span></div>${trend(p,'hr','var(--status)')}</div><div class="section-gap"><div class="chart-heading"><h3>${L('الإشارة المتحركة','Moving waveform')}</h3><span class="small muted">${trainingCase(p)?esc(L(...trainingCase(p).trace.label)):L('موجة ECG للحالة التدريبية','Training case ECG trace')}</span></div>${ecg(p)}</div>`;}
function patchView(p,r){if(!p.demo)return liveOverview(p,r);const cfg={head:{loc:L('الجبهة إلى خلف الأذن','Forehead to behind the ear'),desc:L('حرارة الجلد خلف الأذن، وميل الرأس وحركته، ومؤشر ألوان الجبهة.','Skin temperature behind the ear, head tilt and motion, and the forehead color indicator.'),tech:['TMP117','LSM6DSOX','32 × RGB']},chest:{loc:L('الصدر · شكل Y مقلوب','Chest · Inverted Y'),desc:L('إشارة ECG أحادية القناة، وتقدير النبض، وحركة الصدر، وتسجيل الأصوات.','Single-channel ECG, estimated heart rate, chest movement, and acoustic recording.'),tech:['AD8232','LSM6DSOX','INMP441']},neck:{loc:L('الرقبة · شكل فراشة','Neck · Butterfly'),desc:L('متابعة الميل والحركة عند موضع تثبيت فراشة الرقبة.','Tilt and motion at the neck butterfly attachment site.'),tech:['LSM6DSOX']}}[r];
 const values=r==='head'?reading(L('حرارة الجلد','Skin temperature'),metric(p,'temp',1),'°C','temp')+reading(L('ميل الرأس','Head pitch'),metric(p,'pitchHead',1),'°','head')+reading(L('الميل الجانبي','Head roll'),metric(p,'rollHead',1),'°','pulse')+reading(L('لون المؤشر','Indicator color'),`<span data-live-label="${p.id}" style="font-size:17px;color:var(--status)">${statusName(p.indicator)}</span>`,'','grid'):r==='chest'?reading(L('النبض','Heart rate'),metric(p,'hr',0),'bpm','heart')+reading(L('حركة الصدر','Chest movement'),metric(p,'chestMotion',3),'g','chest'):reading(L('الميل الأمامي','Neck pitch'),metric(p,'pitchNeck',1),'°','neck')+reading(L('الميل الجانبي','Neck roll'),metric(p,'rollNeck',1),'°','pulse');
 return`<div class="patch-info">${patchIllustration(r)}<div><h3>${cfg.loc}</h3><p>${cfg.desc}</p></div></div><div class="tech-tags">${cfg.tech.map(x=>`<span class="ltr">${x}</span>`).join('')}<span>${p.demo?L('اتصال محاكى','Simulated connection'):L('غير متصل','Not connected')}</span></div><div class="readings-grid">${values}</div><div class="section-gap"><div class="chart-heading"><h3>${r==='chest'?L('إشارة القلب','ECG waveform'):r==='head'?L('اتجاه الحرارة','Temperature trend'):L('اتجاه ميل الرقبة','Neck tilt trend')}</h3><span class="small muted">${L('بيانات الحالة التدريبية','Training case data')}</span></div>${r==='chest'?ecg(p):trend(p,r==='head'?'temp':'motion')}</div>${r==='chest'?`<div class="audio-placeholder section-gap">${icon('sound')}<div><b>${L('تسجيل أصوات الصدر','Chest sound recording')}</b><small>${L('سيُتاح التسجيل والاستماع بعد ربط العتاد؛ لا يوجد صوت جسدي في هذه المعاينة.','Recording and playback become available after hardware integration; no body audio is present in this preview.')}</small></div></div>`:''}`;}
const Clinical=window.MasarClinical;
const clinicalSigns={chest:['ألم صدري','Chest pain'],dyspnea:['ضيق نفس حاد','Acute breathlessness'],syncope:['فقدان وعي عابر','Transient loss of consciousness'],confusion:['تغير الوعي','Altered mental status'],neuro:['ضعف مفاجئ في جهة أو اضطراب الكلام','Sudden one-sided weakness or speech change'],heat:['تعرض للحرارة مع أعراض','Heat exposure with symptoms'],chills:['قشعريرة','Rigors'],cold:['تعرض للبرد مع أعراض','Cold exposure with symptoms']};
const clinicalMeasures={age:['العمر بالسنوات','Age in years',0,125],pulse:['النبض المؤكد / دقيقة','Confirmed pulse / min',1,300],sbp:['الضغط الانقباضي mmHg','Systolic BP mmHg',1,300],oxygen:['تشبع الأكسجين %','Oxygen saturation %',1,100],coreTemp:['حرارة الجسم المركزية °C','Core body temperature °C',25,46]};
function clinicalFields(p={}){
 const c=p.clinical||{};
 return `<fieldset class="clinical-fields"><legend>${L('المعطيات السريرية','Clinical findings')}</legend><div class="form-grid">
 ${Object.entries(clinicalMeasures).map(([k,[ar,en,min,max]])=>`<label class="field"><strong>${L(ar,en)}</strong><input name="clinical-${k}" type="number" min="${min}" max="${max}" step="${k==='coreTemp'?'0.1':'1'}" value="${esc(c[k]??(k==='age'?p.age:''))}"></label>`).join('')}
 </div><div class="clinical-signs">${Object.entries(clinicalSigns).map(([k,[ar,en]])=>`<label><input type="checkbox" name="clinical-sign" value="${k}" ${c.signs?.includes(k)?'checked':''}> ${L(ar,en)}</label>`).join('')}</div>
 <label class="field"><strong>${L('وصف الأعراض وبدايتها','Symptoms and onset notes')}</strong><textarea name="clinical-notes" maxlength="1200">${esc(c.notes||'')}</textarea></label>
 <p class="small muted">${L('اختاري الأعراض المطابقة. التقييم يحسب الاحتمالات من الاختيارات والقياسات؛ وصف الأعراض يُحفظ للمراجعة.','Select applicable symptoms. Assessment uses the selected findings and measurements; notes are retained for review.')}</p></fieldset>`;
}
function readClinical(form){
 const c={signs:form.getAll('clinical-sign').filter(k=>Object.hasOwn(clinicalSigns,k)),notes:String(form.get('clinical-notes')||'').trim().slice(0,1200)};
 for(const [key,[,,min,max]] of Object.entries(clinicalMeasures)){
  const value=form.get('clinical-'+key);
  if(value==null||value==='')continue;
  const n=Number(value);if(!Number.isFinite(n)||n<min||n>max)throw Error(L('تحققي من نطاق القياسات المدخلة.','Check the ranges of the entered measurements.'));
  c[key]=n;
 }
 return c;
}
function clinicalPanel(p){
 const training=trainingCase(p);
 if(training){
  const label=pair=>esc(L(...pair));
  return `<aside class="panel ai-panel"><div class="panel-title"><h2>${L('التشخيص الأولي','Initial clinical impression')}</h2></div>
  <p class="small muted">${L('حالة تدريبية','Training case')}</p>
  <article class="clinical-result"><h3>${label(training.title)}</h3><dl>
  <dt>${L('المعطيات من سجل الحالة','Findings from the case record')}</dt><dd>${label(training.history)}</dd>
  <dt>${L('مبررات الاشتباه','Basis for suspicion')}</dt><dd>${label(training.why)}</dd>
  <dt>${L('الأولوية','Priority')}</dt><dd>${label(training.priority)}</dd></dl></article></aside>`;
 }

 const input={...p.clinical,age:p.clinical?.age??p.age};
 const result=Clinical.assess(input);
 const rows=p.demo?[p.scenarioId??p.slot]:result.rows;
 const manualWhy={1:['نبض مؤكد أقل من 50 لدى بالغ.','Confirmed adult pulse below 50.'],2:['تعرض للحرارة مع أعراض مسجلة.','Heat exposure with recorded symptoms.'],3:['ضيق نفس حاد مسجل.','Acute dyspnea was recorded.'],5:['ضغط انقباضي منخفض مسجل لدى بالغ، ويحتاج تفسيرًا سريريًا.','Low systolic pressure was recorded in an adult and requires clinical interpretation.'],6:['ألم صدري مسجل.','Chest pain was recorded.'],7:['قشعريرة مسجلة.','Rigors were recorded.'],8:['فقدان وعي عابر مسجل.','Transient loss of consciousness was recorded.'],11:['تعرض للبرد مع أعراض مسجلة.','Cold exposure with recorded symptoms.']};
 const label=x=>esc(L(...x));
 return `<aside class="panel ai-panel"><div class="panel-title"><h2>${icon('spark')} ${L('التقييم الطبي الأولي','Initial clinical assessment')}</h2></div>
 <p class="small muted">${p.demo?L('حالة تدريبية','Training case'):L('دعم قرار مبني على المعطيات المُدخلة','Decision support based on entered findings')}</p>
 ${!p.demo&&result.urgent?`<p class="clinical-urgent">${L('علامة إنذار مسجلة · يلزم تقييم سريري عاجل','Recorded red flag · urgent clinical assessment required')}</p>`:''}
 ${rows.map(i=>{const row=Clinical.cases[i];return row?`<article class="clinical-result"><h3>${label(row.name)}</h3>
 <dl><dt>${L('ما يدعم الاحتمال','Supporting findings')}</dt><dd>${label((!p.demo&&manualWhy[i])||row.why)}</dd>
 <dt>${L('ما قد يحدث إذا تدهورت الحالة','Possible deterioration')}</dt><dd>${label(row.risk)}</dd>
 <dt>${L('ما يلزم للتحقق','What to verify')}</dt><dd>${label(row.check)}</dd></dl></article>`:'';}).join('')}
 ${!p.demo&&result.fastPulse?`<p>${L('تسرّع القلب علامة مسجلة لدى البالغ. يحدد التخطيط والسياق نوع النظم والسبب.','Tachycardia is recorded in an adult. ECG and clinical context establish rhythm and cause.')}</p>`:''}
 ${!rows.length?`<p>${L('المعطيات الحالية لا ترجّح سببًا محددًا. سجّلي الأعراض والقياسات المؤكدة لتحديث التقييم.','Current findings do not favor a specific cause. Record symptoms and confirmed measurements to update the assessment.')}</p>`:''}
 ${!p.demo?actionButton('edit-patient',L('إدخال أو تحديث المعطيات','Enter or update findings'),'edit','',`data-id="${p.id}"`):''}
 <p class="ai-disclosure">${L('تقييم أولي للمراجعة السريرية. قراءات اللصقات تُعرض منفصلة، ولا تؤكد تشخيصًا بمفردها.','Initial assessment for clinical review. Patch readings are displayed separately and do not establish a diagnosis on their own.')}</p>
 ${!p.demo?`<details class="section-gap"><summary>${L('اتجاهات الحساسات','Sensor trends')}</summary>${liveAnalysis(p)}</details>`:''}</aside>`;
}
function deleteCaseModal(id){
 const p=findPatient(id);if(!p)return;
 showModal(`${modalHeader(L('حذف الملف','Delete file'))}<div class="dialog-body"><p>${L('سيُحذف الملف وبياناته المحفوظة من هذا المتصفح.','The file and its saved details will be deleted from this browser.')}</p></div><div class="dialog-footer">${actionButton('dismiss',L('الإبقاء على الملف','Keep file'))}${actionButton('confirm-delete',L('حذف الملف','Delete file'),'','danger',`data-id="${p.id}"`)}</div>`,'delete');
}
function removeCase(id){
 if(pendingLink)return;
 const p=findPatient(id);if(!p)return;
 const i=state.slots.findIndex(x=>x?.id===id), h=state.history.findIndex(x=>x.id===id);
 if(i>=0)state.slots[i]=null;
 if(h>=0)state.history.splice(h,1);
 if(!save()){
  if(i>=0)state.slots[i]=p;
  if(h>=0)state.history.splice(h,0,p);
  return;
 }
 connections.get(id)?.device.gatt.disconnect();
 connections.delete(id);liveHistory.delete(id);analysisRuns.delete(id);
 dismiss();nav('#/');render();
}
function patientDetails(p){if(!p)return`<div class="empty-state">${L('الحالة غير موجودة','Case not found')}${actionButton('home',L('العودة للوحة','Back to dashboard'),'arrow')}</div>`;const selected=['head','chest','neck'].includes(tab)?tab:null;return`<div class="detail-heading"><button class="icon-button back-button" data-route="${p.closedAt?'#/cases':'#/'}" aria-label="${L('رجوع','Back')}">${icon('arrow')}</button><div><h1>${esc(nameOf(p))}</h1><div class="detail-meta"><span class="ltr">${esc(p.code)}</span><span>${L('المسعف:','Responder:')} ${esc(employeeName(p.assignedTo))}</span><span>${p.closedAt?L('ملف مؤرشف','Archived case'):patchLabel(p)}</span></div></div>${p.demo?badge(p):''}<div class="heading-end">${actionButton('edit-patient',L('بيانات الشخص','Person details'),'edit','',`data-id="${p.id}"`)}${actionButton('delete-case',L('حذف الملف','Delete file'),'','danger',`data-id="${p.id}"`)}${actionButton('report',L('تصدير التقرير','Export report'),'download','',`data-id="${p.id}"`)}${baseBoard()&&!p.demo&&!p.closedAt?actionButton('reconnect',L('ربط لصقة الجبهة','Connect forehead patch'),'bluetooth','',`data-id="${p.id}"`):''}${!p.closedAt&&!isAutomatic()?actionButton('close-case',L('إنهاء المتابعة','Close case'),'check','quiet',`data-id="${p.id}"`):''}</div></div><div class="detail-layout"><section class="panel body-panel"><div class="panel-title"><h2>${L('مواضع اللصقات','Patch locations')}</h2><span class="small muted">03</span></div>${anatomy(p)}<p class="body-caption">${L('اضغط على اللصقة لعرض تفاصيلها','Select a patch to view its details')}</p><div class="patch-locations">${['head','chest','neck'].map(r=>`<button class="location-button ${selected===r?'active':''}" data-patch="${r}">${icon(r)}${roleName(r)}<small>${p.demo?'Demo':r==='head'?'BLE':'↳ '+L('عبر الجبهة','via forehead')}</small></button>`).join('')}</div></section><div class="detail-center"><section class="panel ${p.indicator}" data-live-surface="${p.id}"><div class="tabs" role="tablist" aria-label="${L('تفاصيل الحالة','Case details')}">${['overview','head','chest','neck','activity'].map(r=>`<button class="tab ${tab===r?'active':''}" role="tab" aria-selected="${tab===r}" data-tab="${r}">${r==='overview'?L('نظرة عامة','Overview'):r==='activity'?L('السجل والملاحظات','Activity & notes'):roleName(r)}</button>`).join('')}</div>${tab==='overview'?overview(p):selected?patchView(p,selected):activity(p)}</section>${tab!=='activity'?`<section class="panel"><div class="panel-title"><h2>${L('معلومات الحالة','Case information')}</h2><span class="small muted">${L('البيانات الشخصية اختيارية','Personal details are optional')}</span></div><div class="info-grid">${info(L('العمر / الجنس','Age / sex'),`${p.age||'—'} · ${p.sex?L(p.sex==='male'?'ذكر':'أنثى',p.sex==='male'?'Male':'Female'):'—'}`)}${info(L('رقم التواصل','Contact number'),p.phone||'—')}${info(L('جهة اتصال للطوارئ','Emergency contact'),p.contactName||'—')}${info(L('رقم جهة الاتصال','Emergency number'),p.contactPhone||'—')}${info(L('الربط الأول','First linked'),fDate(p.createdAt)+' · '+fTime(p.createdAt))}${info(L('ملاحظات صحية مسجلة','Recorded health notes'),p.conditions||L('لم تسجل','Not recorded'))}</div></section>`:''}</div>${clinicalPanel(p)}</div>${footer()}`;}
function info(label,value){return`<div class="info-item"><small>${label}</small><span>${esc(value)}</span></div>`;}
function activity(p){return`<div class="timeline">${[...(p.events||[]).map(e=>({at:e.at,text:L(e.ar,e.en)})),...(p.notes||[]).map(n=>({at:n.at,text:n.text,by:employeeName(n.by)}))].sort((a,b)=>b.at-a.at).map(e=>`<div class="timeline-item"><b>${esc(e.text)}</b>${e.by?`<p>${esc(e.by)}</p>`:''}<time>${fDate(e.at)} · ${fTime(e.at)}</time></div>`).join('')}</div>${!p.closedAt?`<form id="note-form" data-id="${p.id}" class="note-form"><input name="note" required maxlength="1200" placeholder="${L('أضف ملاحظة للحالة…','Add a case note…')}" aria-label="${L('ملاحظة الحالة','Case note')}"><button class="button primary" type="submit">${L('حفظ','Save')}</button></form>`:''}`;}
function caseTable(rows){return rows.length?`<div class="table-wrap"><table class="cases-table"><thead><tr>${[L('الشخص / الطقم','Person / kit'),L('المؤشر','Indicator'),L('المسعف','Responder'),L('التاريخ','Date'),L('المتابعة','Monitoring'),''].map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(p=>`<tr><td><b>${esc(nameOf(p))}</b><div class="small muted ltr">${p.code}</div></td><td>${badge(p)}</td><td>${esc(employeeName(p.assignedTo))}</td><td>${fDate(p.createdAt)}</td><td><span class="small">${p.closedAt?L('مكتملة','Closed'):L('جارية','Active')}</span></td><td><button class="icon-button" data-patient="${p.id}" aria-label="${L('فتح الحالة','Open case')}">${icon('chevron')}</button></td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state">${L('لا توجد حالات مطابقة حتى الآن','No matching cases yet')}</div>`;}
function casesPage(filter='all'){let rows=[...state.slots.filter(Boolean),...state.history.filter(isOwnCase)];if(filter!=='all')rows=rows.filter(x=>x.assignedTo===filter);return`<div class="page-heading"><div><h1>${L('سجل الحالات','Case history')}</h1><p>${L('ملف لكل شخص، مع الطقم والمسعف وسجل المتابعة.','Each person’s kit, assigned responder, and monitoring history.')}</p></div></div><section class="panel"><div class="table-toolbar"><h2>${rows.length} ${L('حالة مسجلة','recorded cases')}</h2><label class="field">${L('عرض حالات المسعف','Filter by responder')}<select id="history-filter"><option value="all">${L('جميع المسعفين','All responders')}</option>${state.employees.map(e=>`<option value="${e.id}" ${e.id===filter?'selected':''}>${esc(L(e.nameAr,e.nameEn))}</option>`).join('')}</select></label></div>${caseTable(rows)}</section>${footer()}`;}
function profile(){const e=employee(),rows=[...state.slots.filter(Boolean),...state.history.filter(isOwnCase)].filter(p=>baseBoard()?p.assignedTo===e.id:true);return`<div class="page-heading"><div><h1>${L('ملف المسعف','Responder profile')}</h1><p>${L('معلومات الموظف والحالات التي باشرها.','Staff information and cases handled by this responder.')}</p></div><select id="profile-employee" aria-label="${L('اختيار المسعف','Select responder')}">${state.employees.map(x=>`<option value="${x.id}" ${x.id===e.id?'selected':''}>${esc(L(x.nameAr,x.nameEn))}</option>`).join('')}</select></div><div class="columns"><section class="panel profile-card"><div class="avatar large">${esc(currentEmployeeName().slice(0,1))}</div><h2>${esc(currentEmployeeName())}</h2><p>${esc(L(e.roleAr,e.roleEn))}</p><div class="tag-list section-gap" style="justify-content:center"><span class="demo-tag">${e.id}</span><span class="demo-tag">${L('ملف تجريبي','Demo profile')}</span></div><div class="profile-statline"><div><b>${rows.filter(p=>!p.closedAt).length}</b><small>${L('قيد المتابعة','Active')}</small></div><div><b>${rows.filter(p=>p.closedAt).length}</b><small>${L('مكتملة','Closed')}</small></div></div><p>${esc(L(e.agencyAr,e.agencyEn))}</p></section><div class="detail-center"><section class="panel"><div class="panel-title"><h2>${L('بيانات الموظف','Staff details')}</h2><span class="small muted">${e.id}</span></div><form id="employee-form"><div class="form-grid">${field('nameAr',L('الاسم بالعربية','Arabic name'),e.nameAr,'text',true)}${field('nameEn',L('الاسم بالإنجليزية','English name'),e.nameEn,'text',true)}${field('phone',L('رقم التواصل','Phone'),e.phone,'tel')}${field('email',L('البريد الإلكتروني','Email'),e.email,'email')}${field('agencyAr',L('الجهة بالعربية','Organization in Arabic'),e.agencyAr)}${field('agencyEn',L('الجهة بالإنجليزية','Organization in English'),e.agencyEn)}</div><div class="form-actions"><button class="button primary" type="submit">${L('حفظ التغييرات','Save changes')}</button></div></form></section><section class="panel"><div class="panel-title"><h2>${L('الحالات التي باشرها المسعف','Cases handled by this responder')}</h2><span class="small muted">${rows.length}</span></div>${caseTable(rows)}</section></div></div>${footer()}`;}
function settings(){return`<div class="page-heading"><div><h1>${L('الإعدادات','Settings')}</h1><p>${L('خصص مساحة المتابعة وطريقة عرض المعاينة.','Customize the monitoring workspace and preview.')}</p></div></div><div class="settings-layout"><section class="panel"><div class="panel-title"><h2>${L('اللغة والمظهر','Language & appearance')}</h2></div><div class="setting-row"><div><b>${L('لغة الواجهة','Interface language')}</b><p>${L('تتغير اتجاهات الصفحة والنصوص مع اللغة.','Text and layout direction follow your language.')}</p></div><div class="segmented">${['ar','en'].map(l=>`<button data-set-lang="${l}" class="${state.prefs.lang===l?'active':''}">${l==='ar'?'العربية':'English'}</button>`).join('')}</div></div><div class="setting-row"><div><b>${L('مظهر الشاشة','Screen appearance')}</b><p>${L('الوضع الداكن أو الفاتح، محفوظ على هذا المتصفح.','Dark or light mode, remembered in this browser.')}</p></div><div class="segmented">${['light','dark'].map(s=>`<button data-set-theme="${s}" class="${state.prefs.theme===s?'active':''}">${L(s==='light'?'فاتح':'داكن',s==='light'?'Light':'Dark')}</button>`).join('')}</div></div><div class="setting-row"><div><b>${L('تحريك القراءات والتوهج','Animate readings & glow')}</b><p>${L('تشغيل أو إيقاف حركة الموجات والقراءات والتوهج في المحاكاة.','Play or pause simulated waveforms, readings and tracking glow.')}</p></div><button class="toggle ${state.prefs.animate?'on':''}" role="switch" aria-checked="${state.prefs.animate}" data-action="animate" aria-label="${L('تحريك القراءات','Animate readings')}"><i></i></button></div></section><section class="panel"><div class="panel-title"><h2>${L('معرّف الطقم والتجربة','Kit identity & demonstration')}</h2></div><div class="setting-row"><div><b>${L('باركود موحد للّصقات الثلاث','One barcode for all three patches')}</b><p>${L('المعرّف MS1:M01 يخص طقمًا واحدًا: الرأس والأذن، والصدر، والرقبة. تعيين وحدات BLE يتم لاحقًا.','MS1:M01 identifies one head–ear, chest, and neck kit. BLE unit assignment comes later.')}</p></div>${actionButton('demo-qr',L('عرض الباركود','Show barcode'),'qr')}</div><div class="setting-row"><div><b>${L('حفظ بيانات المعاينة','Preview data storage')}</b><p>${L('الحالات وملف الموظف محفوظة محليًا في هذا المتصفح، دون حسابات أو خادم بيانات مرضى.','Cases and staff profiles stay in this browser, without accounts or a patient-data server.')}</p></div>${icon('shield')}</div><div class="setting-row"><div><b>${L('استعادة السيناريو الافتراضي','Restore sample workspace')}</b><p>${L('يعيد 12 بطاقة ويمسح التعديلات المحلية وسجل الحالات في هذه المعاينة.','Restores 12 slots and removes this preview’s local edits and case history.')}</p></div>${baseBoard()?actionButton('reset',L('استعادة','Reset'),'settings','danger'):''}</div></section></div>${footer()}`;}
function field(name,label,value='',type='text',required=false){return`<label class="field"><strong>${label}</strong><input name="${name}" type="${type}" value="${esc(value)}" ${required?'required':''} maxlength="${name==='identity'?30:180}" ${['tel','email'].includes(type)?'dir="ltr"':''}></label>`;}
function optionalFields(p={}){return`<div class="form-grid">${field('fullName',L('الاسم الكامل','Full name'),p.fullName||'')}${field('identity',L('رقم الهوية / الملف','ID / file number'),p.identity)}${field('dob',L('تاريخ الميلاد','Date of birth'),p.dob,'date')}<label class="field"><strong>${L('الجنس','Sex')}</strong><select name="sex"><option value="">${L('غير محدد','Not specified')}</option><option value="male" ${p.sex==='male'?'selected':''}>${L('ذكر','Male')}</option><option value="female" ${p.sex==='female'?'selected':''}>${L('أنثى','Female')}</option></select></label>${field('phone',L('رقم التواصل','Phone number'),p.phone,'tel')}${field('email',L('البريد الإلكتروني','Email address'),p.email,'email')}${field('city',L('المدينة','City'),p.city)}${field('address',L('العنوان','Address'),p.address)}<label class="field"><strong>${L('فصيلة الدم المسجلة','Recorded blood group')}</strong><select name="blood"><option value="">${L('غير مسجلة','Not recorded')}</option>${['A+','A−','B+','B−','AB+','AB−','O+','O−'].map(x=>`<option ${p.blood===x?'selected':''}>${x}</option>`).join('')}</select></label>${field('contactName',L('اسم جهة اتصال للطوارئ','Emergency contact name'),p.contactName)}${field('contactPhone',L('رقم جهة الاتصال','Emergency contact phone'),p.contactPhone,'tel')}${field('contactRelation',L('صلة القرابة','Relationship'),p.contactRelation)}${field('conditions',L('حالات صحية مسجلة','Recorded health conditions'),p.conditions)}${field('allergies',L('الحساسية المسجلة','Recorded allergies'),p.allergies)}<label class="field span-2"><strong>${L('أدوية أو معلومات إضافية','Medications or additional information')}</strong><textarea name="medications" maxlength="1200">${esc(p.medications||'')}</textarea></label></div>`;}
function modalHeader(title){return`<div class="dialog-header"><h2 id="dialog-title">${title}</h2><button type="button" class="icon-button" data-action="dismiss" aria-label="${L('إغلاق','Close')}">${icon('close')}</button></div>`;}
function showModal(html,mode){stopCamera();modalMode=mode;const el=document.getElementById('case-dialog');el.innerHTML=html;if(!el.open)el.showModal();}
function addModal(slot){targetSlot=Number.isInteger(slot)?slot:state.slots.findIndex(p=>!p);if(targetSlot<0&&unlimitedBoard())targetSlot=state.slots.length;if(targetSlot<0||state.slots[targetSlot]){toast(L('كل البطاقات مشغولة. أنهِ متابعة حالة لإتاحة بطاقة.','All slots are occupied. Close a case to free a slot.'));return;}showModal(`${modalHeader(L('تسجيل ملف الحالة','Register case file'))}<form id="add-form"><div class="dialog-body"><p class="modal-intro">${baseBoard()?L('يمكن تسجيل الحالة الآن وربط اللصقة لاحقًا.','Register the case now and connect the patch later.'):L('سجّل بيانات الحالة لاستخدامها في العرض.','Enter case details for the demonstration.')}</p>${unlimitedBoard()?`<label class="field"><strong>${L('عدد لصقات الطقم','Patches per kit')}</strong><select name="patchCount">${patchCounts.map(n=>`<option value="${n}" ${n===3?'selected':''}>${n}</option>`).join('')}</select></label>`:''}<div class="barcode-first"><label class="field"><strong>${L('باركود الطقم','Kit barcode')}</strong><input id="barcode-input" name="barcode" dir="ltr" placeholder="MS1:M01" autocomplete="off" maxlength="40" autofocus></label><div class="scan-actions">${actionButton('camera',L('مسح بالكاميرا','Scan with camera'),'camera')}</div><div id="camera-box" class="camera-box"><video id="scan-video" playsinline muted></video><div class="scan-target"></div></div><p id="camera-status" class="camera-status" aria-live="polite"></p><p class="barcode-help">${unlimitedBoard()?L('استخدم رمز الطقم المختار.','Use the selected kit code.'):L('باركود واحد يجمع الرأس والأذن، والصدر، وفراشة الرقبة.','One barcode links the head–ear, chest, and neck patches.')}</p></div><div class="info-grid">${info(L('البطاقة','Slot'),String(targetSlot+1).padStart(2,'0'))}${info(L('المسعف المسؤول','Assigned responder'),currentEmployeeName())}</div><details class="optional-data"><summary>${icon('user')}${L('بيانات الشخص والتواصل','Person & contact details')}<span class="optional">${L('اختياري','Optional')}</span></summary>${optionalFields()}</details>${clinicalFields()}<div id="form-error" class="form-error" role="alert"></div></div><div class="dialog-footer">${actionButton('dismiss',L('إلغاء','Cancel'),'','quiet')}<button class="button primary" type="submit">${icon('link')}${L('حفظ ملف الحالة','Save case file')}</button></div></form>`,'add');}
function editModal(id){editedPatient=id;const p=findPatient(id);if(!p)return;const copy={...p,fullName:p.fullName||L(p.nameAr,p.nameEn)};showModal(`${modalHeader(L('بيانات الشخص','Person details'))}<form id="edit-patient-form"><div class="dialog-body"><p class="modal-intro"><span class="ltr">${esc(p.code||'—')}</span> · ${L('لا يلزم استكمال جميع الحقول.','All fields are optional.')}</p>${optionalFields(copy)}${clinicalFields(p)}<div id="form-error" class="form-error" role="alert"></div></div><div class="dialog-footer">${actionButton('dismiss',L('إلغاء','Cancel'),'','quiet')}<button class="button primary" type="submit">${L('حفظ البيانات','Save details')}</button></div></form>`,'edit');}
function qrModal(){showModal(`${modalHeader(L('باركود الطقم التجريبي','Demo kit barcode'))}<div class="dialog-body qr-sheet"><div class="demo-tag">${L('معرّف واحد للّصقات الثلاث','One identifier for all three patches')}</div><img src="./assets/demo-kit-qr.png" alt="QR: MS1:M01"><div class="qr-code ltr">MS1:M01</div><p class="small muted section-gap">${L('للتجربة أمام اللجنة. هذا المعرّف لا ينشئ اتصال بلوتوث في المعاينة.','For the judges’ demonstration. This identifier does not establish Bluetooth in this preview.')}</p><div class="qr-roles">${['head','chest','neck'].map(r=>`<span>${roleName(r)}</span>`).join('')}</div></div><div class="dialog-footer"><a class="button" href="./assets/demo-kit-qr.png" download="Masar-One-M01-QR.png">${icon('download')}${L('تنزيل الباركود','Download barcode')}</a>${actionButton('dismiss',L('إغلاق','Close'))}</div>`,'qr');}
async function stopCamera(){clearInterval(cameraTimer);cameraTimer=null;try{scanner?.reset();}catch{}scanner=null;if(stream)stream.getTracks().forEach(t=>t.stop());stream=null;}
function cameraMessage(s){const el=document.getElementById('camera-status');if(el)el.textContent=s;}
function receiveScan(code){const normalized=normalizeCode(code);if(!normalized){cameraMessage(L('الرمز لا يطابق باركود مسار ون؛ جرّب رمز الطقم.','This is not a Masar One kit code. Try the kit barcode.'));return;}const input=document.getElementById('barcode-input');if(!input)return;input.value=normalized;stopCamera();document.getElementById('camera-box')?.classList.remove('open');cameraMessage(L('تم التقاط الباركود. اضغط ربط الطقم.','Barcode captured. Select Link kit to continue.'));}
async function startCamera(){await stopCamera();const box=document.getElementById('camera-box'),video=document.getElementById('scan-video');box.classList.add('open');cameraMessage(L('جارٍ طلب إذن الكاميرا…','Requesting camera permission…'));if(!navigator.mediaDevices?.getUserMedia){cameraMessage(L('الكاميرا غير متاحة هنا. افتح رابط HTTPS أو أدخل الباركود يدويًا.','Camera unavailable here. Open the HTTPS site or enter the code manually.'));return;}try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});if(!document.getElementById('case-dialog').open){stopCamera();return;}video.srcObject=stream;await video.play();cameraMessage(L('وجّه الكاميرا نحو الباركود. لا تُحفظ الصور.','Point the camera at the barcode. Images are not saved.'));if(window.BarcodeDetector){const formats=await BarcodeDetector.getSupportedFormats();const detector=new BarcodeDetector({formats:formats.filter(f=>['qr_code','code_128','code_39','ean_13'].includes(f))});let working=false;cameraTimer=setInterval(async()=>{if(working||video.readyState<2)return;working=true;try{const a=await detector.detect(video);if(a[0])receiveScan(a[0].rawValue);}catch{}finally{working=false;}},250);}else if(window.ZXing){scanner=new ZXing.BrowserMultiFormatReader();await scanner.decodeFromStream(stream,video,(result)=>{if(result)receiveScan(result.getText());});}else cameraMessage(L('قارئ الكاميرا غير مدعوم؛ أدخل الرمز يدويًا.','Camera decoding unsupported; enter the code manually.'));}catch(e){stopCamera();box.classList.remove('open');cameraMessage(e.name==='NotAllowedError'?L('لم يُمنح إذن الكاميرا. يمكنك السماح به أو كتابة الرمز.','Camera permission was not granted. Allow it or type the code.'):L('تعذر تشغيل الكاميرا. يمكنك كتابة الباركود.','Could not start the camera. You can type the barcode.'));}}
function normalizeCode(value){const v=String(value||'').trim().toUpperCase();const m=v.match(/^(?:MS1:)?([A-Z0-9]{1,8})(?::(?:HEAD|CHEST|NECK))?$/);return m?'MS1:'+m[1]:null;}
function personData(form){const obj={};for(const k of ['fullName','identity','dob','sex','phone','email','city','address','blood','conditions','allergies','medications','contactName','contactPhone','contactRelation'])obj[k]=String(form.get(k)||'').trim().slice(0,k==='medications'?1200:180);if(obj.dob){const d=new Date(obj.dob+'T00:00:00');if(Number.isNaN(d.getTime())||d>Date.now())throw Error(L('تاريخ الميلاد غير صالح.','Invalid date of birth.'));obj.age=Math.floor((Date.now()-d.getTime())/31557600000);}return obj;}
function formError(s){const el=document.getElementById('form-error');if(el)el.textContent=s;}
function dismiss(){stopCamera();document.getElementById('case-dialog').close();modalMode=null;}
function closeModal(id){const p=findPatient(id);if(!p||p.closedAt)return;showModal(`${modalHeader(L('إنهاء متابعة الحالة','Close monitoring case'))}<div class="dialog-body"><p>${L('إنهاء متابعة','Close monitoring for')} <b>${esc(nameOf(p))}</b>؟</p><p class="modal-intro section-gap">${L('سينتقل الملف، مع معلومات الشخص واللصقات والملاحظات، إلى سجل الحالات. وتصبح البطاقة متاحة لطقم آخر.','The person, patch details and notes will move to case history. The slot becomes available for another kit.')}</p></div><div class="dialog-footer">${actionButton('dismiss',L('إلغاء','Cancel'),'','quiet')}${actionButton('confirm-close',L('إنهاء وأرشفة','Close & archive'),'check','primary',`data-id="${p.id}"`)}</div>`,'close');}
function exportReport(p){const report={product:'Masar One',dataSource:p.demo?'TRAINING CASE':'RECORDED CASE',clinical:p.clinical,trainingImpression:trainingCase(p)||undefined,sensorHistory:p.demo?undefined:(p.sensorHistory||liveHistory.get(p.id)||[]),exportedAt:new Date().toISOString(),kit:p.code,patchCount:p.patchCount??3,person:{name:nameOf(p),age:p.age,dateOfBirth:p.dob,sex:p.sex,identity:p.identity,phone:p.phone,email:p.email,city:p.city,address:p.address,blood:p.blood,conditions:p.conditions,allergies:p.allergies,medications:p.medications,emergencyContact:p.contactName,emergencyPhone:p.contactPhone,relationship:p.contactRelation},responder:{id:p.assignedTo,name:employeeName(p.assignedTo)},patches:[{role:'HEAD',location:'Forehead to behind ear',skinTemperature:sample(p,simSeconds).temp,headPitch:sample(p,simSeconds).pitchHead,headRoll:sample(p,simSeconds).rollHead},{role:'CHEST',location:'Chest, inverted Y',heartRate:sample(p,simSeconds).hr,motion:sample(p,simSeconds).chestMotion},{role:'NECK',location:'Neck butterfly',pitch:sample(p,simSeconds).pitchNeck,roll:sample(p,simSeconds).rollNeck}],scenario:p.indicator,notes:p.notes,events:p.events,closedAt:p.closedAt||null};const blob=new Blob([JSON.stringify(report,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='Masar-One-'+codeKit(p)+'-report.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(L('تم تنزيل تقرير السيناريو.','Scenario report downloaded.'));}
function setLanguage(lang){state.prefs.lang=lang;save();render();}
function setTheme(theme){state.prefs.theme=theme;save();render();}
function render(){syncModel();updateAlarm();document.body.classList.toggle('tracking-paused',!state.prefs.animate);document.documentElement.lang=state.prefs.lang;document.documentElement.dir=state.prefs.lang==='ar'?'rtl':'ltr';document.documentElement.dataset.theme=state.prefs.theme;document.title=L('مسار ون | لوحة التحكم للمسعف','Masar One | Responder dashboard');document.getElementById('app').innerHTML=chrome();const rt=route();document.getElementById('main').innerHTML=rt.page==='patient'?patientDetails(findPatient(rt.id)):rt.page==='cases'?casesPage():rt.page==='profile'?profile():rt.page==='settings'?settings():dashboard();}
document.addEventListener('click',e=>{const b=e.target.closest('button,[data-action],[data-route],[data-patch]');if(!b)return;if(b.dataset.route){nav(b.dataset.route);return;}if(b.dataset.patient){nav('#/patient/'+b.dataset.patient);return;}if(b.dataset.addSlot!==undefined){addModal(+b.dataset.addSlot);return;}if(b.dataset.patch){tab=b.dataset.patch;render();return;}if(b.dataset.tab){tab=b.dataset.tab;render();return;}if(b.dataset.setLang){setLanguage(b.dataset.setLang);return;}if(b.dataset.setTheme){setTheme(b.dataset.setTheme);return;}const a=b.dataset.action;if(a==='critical-alarm'){void toggleAlarm();return;}if(a==='mode-auto'||a==='mode-manual'){chooseMode(a==='mode-auto'?'auto':'manual');}else if(a==='delete-case')deleteCaseModal(b.dataset.id);else if(a==='confirm-delete')removeCase(b.dataset.id);else if(a==='reconnect'&&baseBoard()){const p=findPatient(b.dataset.id);if(p&&!connections.has(p.id))linkGateway(p,p.slot);}else if(a==='analyze'){const p=findPatient(b.dataset.id);if(p){analysisRuns.set(p.id,[...(p.sensorHistory||liveHistory.get(p.id)||[])]);render();}}else if(a==='drawer'){drawerOpen=!drawerOpen;render();}else if(a==='language')setLanguage(state.prefs.lang==='ar'?'en':'ar');else if(a==='theme')setTheme(state.prefs.theme==='dark'?'light':'dark');else if(a==='add'&&!isAutomatic())addModal();else if(a==='dismiss')dismiss();else if(a==='home')nav('#/');else if(a==='camera')startCamera();else if(a==='use-demo'){document.getElementById('barcode-input').value='MS1:M01';cameraMessage(L('رمز الطقم الموحّد جاهز.','Unified kit code is ready.'));}else if(a==='demo-qr')qrModal();else if(a==='edit-patient')editModal(b.dataset.id);else if(a==='close-case')closeModal(b.dataset.id);else if(a==='report')exportReport(findPatient(b.dataset.id));else if(a==='animate'||a==='tracking'){state.prefs.animate=!state.prefs.animate;save();render();}else if(a==='confirm-close'){const i=state.slots.findIndex(p=>p?.id===b.dataset.id);if(i>=0){const p=state.slots[i];p.frozenTelemetry=sample(p,simSeconds);p.sensorHistory=liveHistory.get(p.id)||[];connections.get(p.id)?.device.gatt.disconnect();connections.delete(p.id);liveHistory.delete(p.id);p.frozenAtSimulation=simSeconds;p.closedAt=Date.now();p.events.push({at:Date.now(),ar:'إنهاء المتابعة وأرشفة الحالة',en:'Monitoring closed and case archived'});state.history.unshift(p);state.slots[i]=null;save();dismiss();nav('#/cases');toast(L('أُرشفت الحالة وأُتيحت البطاقة.','Case archived and slot released.'));}}else if(a==='reset'){showModal(`${modalHeader(L('استعادة بيانات العرض','Reset sample data'))}<div class="dialog-body"><p>${L('سيُحذف سجل المعاينة والتعديلات المحلية من هذا المتصفح فقط.','Preview history and local edits will be removed from this browser only.')}</p></div><div class="dialog-footer">${actionButton('dismiss',L('إلغاء','Cancel'))}${actionButton('confirm-reset',L('استعادة بيانات العرض','Reset sample data'),'','danger')}</div>`,'reset');}else if(a==='confirm-reset'){const prefs=state.prefs,boards=state.responderBoards,responderPrefs=state.responderPrefs,otherHistory=state.history.filter(p=>p.workspaceId);switchMode('manual');state=initial();initializeBoards();state.responderBoards=boards;state.responderPrefs=responderPrefs;state.history=otherHistory;mode='manual';state.manualSlots=Array(12).fill(null);state.autoSlots=[null,...initial().slots.slice(1)];state.slots=state.manualSlots;state.prefs={...prefs,mode:'manual'};save();dismiss();nav('#/');toast(L('تمت استعادة بيانات العرض.','Sample workspace restored.'));}});
document.addEventListener('keydown',e=>{if(!e.repeat&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.target.closest('input,textarea,select,[contenteditable]')&&!document.getElementById('case-dialog').open&&['1','2'].includes(e.key)){e.preventDefault();chooseMode(e.key==='1'?'auto':'manual');return;}if((e.key==='Enter'||e.key===' ')&&e.target.matches('.patch-target')){e.preventDefault();tab=e.target.dataset.patch;render();}if(e.key==='Escape'&&drawerOpen){drawerOpen=false;render();}});
document.addEventListener('input',e=>{if(e.target.id==='case-search'){query=e.target.value;const cards=document.querySelectorAll('.case-card[data-patient]');let found=0;cards.forEach(b=>{const p=findPatient(b.dataset.patient),match=!query||[nameOf(p),p.code,p.nameAr,p.nameEn,scenarioLabel(p)].join(' ').toLowerCase().includes(query.toLowerCase());b.classList.toggle('dimmed',!match);if(match)found++;});document.getElementById('search-feedback').textContent=query?L(`${found} حالة مطابقة — بقية البطاقات مخففة`,`${found} matching cases — other slots are dimmed`):'';}});
document.addEventListener('change',e=>{if(['employee-switch','profile-employee'].includes(e.target.id)){switchResponder(e.target.value);}if(e.target.id==='history-filter')document.getElementById('main').innerHTML=casesPage(e.target.value);if(e.target.id==='scenario-select'){const p=findPatient(e.target.dataset.id),s=e.target.value;if(!p||!p.id.startsWith('demo-')||!['auto','critical','warning','stable','offline'].includes(s))return;p.manualScenario=s==='auto'?null:s;p.indicator=s==='auto'?'stable':s;p.demo=true;p.hr=s==='critical'?125:s==='warning'?95:s==='stable'?72:null;p.temp=s==='critical'?36.5:s==='warning'?35.2:s==='stable'?33.4:null;p.events.push({at:Date.now(),ar:s==='auto'?'تشغيل التطور التلقائي للسيناريو':'تغيير سيناريو العرض إلى '+statusName(s),en:s==='auto'?'Automatic scenario progression enabled':'Preview scenario changed to '+({critical:'Critical',warning:'Caution',stable:'Stable',offline:'Offline'}[s])});save();render();}});
document.addEventListener('submit',e=>{if(e.target.id==='add-form'){e.preventDefault();const form=new FormData(e.target),barcode=String(form.get('barcode')||'').trim(),code=normalizeCode(barcode);
 if(barcode&&!code){formError(L('أدخل باركودًا بصيغة MS1:M01.','Enter a kit code such as MS1:M01.'));return;}
 if(code&&state.slots.some(p=>p&&!p.demo&&p.code===code)){formError(L('هذا الطقم مرتبط بحالة نشطة بالفعل.','This kit is already linked to an active case.'));return;}
 if((!unlimitedBoard()&&targetSlot>=state.slots.length)||state.slots[targetSlot]){formError(L('البطاقة لم تعد متاحة؛ اختر بطاقة أخرى.','This slot is no longer available.'));return;}
 try{
  const selectedCount=Number(form.get('patchCount'));
  const kit=unlimitedBoard()&&patchCounts.includes(selectedCount)?{patchCount:selectedCount}:{};
  const workspace=baseBoard()?{}:{workspaceId:state.activeEmployee,...kit};
  const person=makeCase(code,targetSlot,{...personData(form),clinical:readClinical(form),...workspace});
  const previousLength=state.slots.length;
  state.slots[targetSlot]=person;
  if(!save()){state.slots[targetSlot]=null;state.slots.length=previousLength;return;}
  dismiss();nav('#/patient/'+person.id);
 }catch(err){formError(err.message);}
 }else if(e.target.id==='edit-patient-form'){e.preventDefault();const p=findPatient(editedPatient);try{const form=new FormData(e.target);const previous={...p,events:[...p.events]};Object.assign(p,personData(form),{clinical:readClinical(form)});p.events.push({at:Date.now(),ar:'تحديث بيانات الشخص',en:'Person details updated'});if(!save()){Object.assign(p,previous);return;}dismiss();render();toast(L('تم حفظ البيانات.','Details saved.'));}catch(err){formError(err.message);}}else if(e.target.id==='employee-form'){e.preventDefault();const form=new FormData(e.target),e2=employee();for(const key of ['nameAr','nameEn','phone','email','agencyAr','agencyEn'])e2[key]=String(form.get(key)||'').trim().slice(0,180);save();render();toast(L('تم تحديث ملف المسعف.','Responder profile updated.'));}else if(e.target.id==='note-form'){e.preventDefault();const p=findPatient(e.target.dataset.id),text=String(new FormData(e.target).get('note')||'').trim().slice(0,1200);if(!text||!p)return;p.notes.push({at:Date.now(),text,by:state.activeEmployee});save();render();toast(L('تم حفظ الملاحظة.','Note saved.'));}});
document.getElementById('case-dialog').addEventListener('close',stopCamera);
window.addEventListener('hashchange',()=>{tab='overview';render();});
window.addEventListener('beforeunload',stopCamera);
function setText(el,value){if(el&&el.textContent!==String(value))el.textContent=String(value);}
function colorSurface(el,status){for(const c of ['critical','warning','stable','offline'])if(c!==status)el.classList.remove(c);el.classList.add(status);}
function updateReadouts(){
 syncModel();updateAlarm();
 document.querySelectorAll('[data-live-series]').forEach(chart=>{
  const p=findPatient(chart.dataset.liveCase);
  if(p)chart.querySelector('.wave-line').setAttribute('d',liveTrendPath(p,chart.dataset.liveSeries));
 });
 document.querySelectorAll('[data-metric]').forEach(el=>{const p=findPatient(el.dataset.person);if(!p)return;const v=sample(p,simSeconds)[el.dataset.metric];setText(el,v==null?'—':Number(v).toFixed(Number(el.dataset.digits)));});
 document.querySelectorAll('.case-card[data-patient]').forEach(el=>{const p=findPatient(el.dataset.patient);if(!p)return;const changed=!el.classList.contains(p.indicator);colorSurface(el,p.indicator);setText(el.querySelector('.state-label'),p.demo?statusName(p.indicator):sourceLabel(p));setText(el.querySelector('.live-source'),sourceLabel(p));if(!p.demo)setText(el.querySelector('.case-condition'),sourceLabel(p));if(changed){el.querySelector('.state-icon').innerHTML=icon(statusIcon(p.indicator));el.setAttribute('aria-label',nameOf(p)+', '+statusName(p.indicator));}el.style.setProperty('--beat-period',Math.max(1.2,150/(p.hr||75))+'s');});
 document.querySelectorAll('[data-summary]').forEach(el=>{const key=el.dataset.summary;setText(el,key==='empty'?slotsAvailable():state.slots.filter(p=>p?.indicator===key).length);});
 document.querySelectorAll('[data-live-badge]').forEach(el=>{const p=findPatient(el.dataset.liveBadge);if(p&&!el.classList.contains(p.indicator)){colorSurface(el,p.indicator);el.innerHTML=icon(statusIcon(p.indicator))+statusName(p.indicator);}});
 document.querySelectorAll('[data-live-surface]').forEach(el=>{const p=findPatient(el.dataset.liveSurface);if(p)colorSurface(el,p.indicator);});
 const rp=route().page==='patient'?findPatient(route().id):null;if(rp&&document.querySelector('.anatomy'))colorSurface(document.querySelector('.anatomy'),rp.indicator);
 for(const [attr,key,suffix] of [['data-risk-value','risk',''],['data-confidence-value','confidence','%']])document.querySelectorAll('['+attr+']').forEach(el=>{const p=findPatient(el.getAttribute(attr));if(!p)return;const v=sample(p,simSeconds)[key];setText(el,v==null?'—':v+suffix);});
 document.querySelectorAll('[data-risk-arc]').forEach(el=>{const p=findPatient(el.dataset.riskArc);if(p)el.setAttribute('stroke-dasharray',(sample(p,simSeconds).risk||0)+' 100');});
 document.querySelectorAll('[data-confidence-bar]').forEach(el=>{const p=findPatient(el.dataset.confidenceBar);if(p)el.style.width=(sample(p,simSeconds).confidence||0)+'%';});
 document.querySelectorAll('[data-live-label]').forEach(el=>{const p=findPatient(el.dataset.liveLabel);if(p)setText(el,statusName(p.indicator));});
 document.querySelectorAll('[data-risk-label]').forEach(el=>{const p=findPatient(el.dataset.riskLabel);if(p)setText(el,statusName(p.indicator));});
 const clock=document.getElementById('workspace-clock');if(clock)setText(clock,fTime(Date.now()));
}
function animateFrame(now){
 const dt=Math.min((now-lastAnimationAt)/1000,.12);lastAnimationAt=now;
 if(state.prefs.animate&&!document.hidden)simSeconds+=dt;
 if(now-lastNumberAt>650&&!document.hidden){lastNumberAt=now;updateReadouts();}
 if(now-lastWaveAt>48&&state.prefs.animate&&!document.hidden&&!reducedMotion.matches){lastWaveAt=now;
  document.querySelectorAll('[data-wave]').forEach(el=>{const p=findPatient(el.dataset.wave);if(!p||p.closedAt)return;const w=Engine.wavePath(withTraining(p),simSeconds,Number(el.dataset.width),Number(el.dataset.height));el.querySelector('.wave-line').setAttribute('d',w.path);el.querySelector('.wave-tip').setAttribute('cy',w.lastY);});
  document.querySelectorAll('[data-trend]').forEach(el=>{const p=findPatient(el.dataset.trend);if(p&&!p.closedAt)el.querySelector('polyline').setAttribute('points',Engine.trendPoints(withTraining(p),el.dataset.signal,simSeconds));});
 }
 requestAnimationFrame(animateFrame);
}
requestAnimationFrame(animateFrame);
render();
})();
