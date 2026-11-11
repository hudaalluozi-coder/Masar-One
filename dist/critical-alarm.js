'use strict';
(() => {
 let context, lastBeep=-Infinity, sound=[];
 function stop(){
  for(const oscillator of sound){try{oscillator.stop();}catch{}}
  sound=[];lastBeep=-Infinity;
 }
 async function unlock(){
  const Audio=window.AudioContext||window.webkitAudioContext;
  if(!Audio)return false;
  try{
   context??=new Audio();
   if(context.state!=='running')await context.resume();
   return context.state==='running';
  }catch{return false;}
 }
 function update(active){
  if(!active){if(sound.length)stop();return;}
  if(context?.state!=='running'||context.currentTime-lastBeep<3)return;
  lastBeep=context.currentTime;
  sound=[0,.21].map(offset=>{
   const oscillator=context.createOscillator(),gain=context.createGain(),start=lastBeep+offset;
   oscillator.frequency.value=850;
   gain.gain.setValueAtTime(.07,start);
   gain.gain.exponentialRampToValueAtTime(.001,start+.15);
   oscillator.connect(gain).connect(context.destination);
   oscillator.start(start);oscillator.stop(start+.16);
   return oscillator;
  });
 }
 window.MasarCriticalAlarm={unlock,update};
})();
