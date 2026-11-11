'use strict';
(() => {
 const build=(status,hr,ar,en,historyAr,historyEn,priorityAr,priorityEn,rhythm='sinus')=>({
  status,hr,title:[ar,en],history:[historyAr,historyEn],
  why:[historyAr,historyEn],priority:[priorityAr,priorityEn],
  trace:{label:rhythm==='af'?['نظم غير منتظم دون موجة P مميزة','Irregular rhythm without discrete P waves']:
   hr<60?['بطء جيبي تدريبي','Training sinus bradycardia']:hr>100?['تسرّع جيبي تدريبي','Training sinus tachycardia']:['نظم جيبي تدريبي','Training sinus rhythm'],
   wander:.012,st:0,rhythm}
 });
 window.MasarResponderDemos={
  EMS031:[
   build('critical',142,'اشتباه برجفان أذيني سريع','Suspected atrial fibrillation with rapid ventricular response','خفقان ودوخة مع نبض سريع غير منتظم.','Palpitations and dizziness with a fast, irregular pulse.','تقييم الاستقرار وتخطيط قلب لتحديد النظم.','Assess stability and obtain an ECG to establish rhythm.','af'),
   build('critical',43,'بطء قلب عرضي','Symptomatic bradycardia','دوخة وقرب إغماء مع نبض بطيء وضغط منخفض.','Presyncope with a slow pulse and low blood pressure.','تقييم عاجل للتروية وتأكيد نوع النظم بالتخطيط.','Urgently assess perfusion and confirm the rhythm with ECG.'),
   build('critical',127,'اشتباه باستـرواح الصدر بعد إصابة','Suspected traumatic pneumothorax','ضيق نفس متزايد بعد إصابة صدرية مع انخفاض أصوات التنفس في جهة واحدة.','Worsening breathlessness after chest trauma with reduced unilateral breath sounds.','تقييم فوري للتنفس والدورة الدموية.','Immediate breathing and circulation assessment.'),
   build('stable',75,'اشتباه بصداع نصفي','Suspected migraine','صداع نابض مشابه لنوبات سابقة مع حساسية للضوء، والفحص العصبي التدريبي دون عجز بؤري.','Pulsatile headache similar to previous episodes with photophobia and no focal deficit in the training examination.','مراجعة القصة وعلامات الإنذار.','Review history and red flags.'),
   build('stable',79,'اشتباه بشد عضلي قطني','Suspected lumbar muscle strain','ألم قطني بدأ بعد رفع حمل ويزداد بالحركة.','Lower back pain after lifting, worse with movement.','فحص الحركة وتقييم علامات الإنذار.','Assess mobility and screen for red flags.'),
   build('stable',84,'اشتباه بالتهاب معدة وأمعاء','Suspected gastroenteritis','إسهال ومغص مع قدرة على شرب السوائل ووعي مستقر.','Diarrhea and cramps with preserved oral intake and alertness.','تقييم علامات الجفاف.','Assess hydration.'),
   build('stable',71,'اشتباه بكدمة سطحية بالساعد','Suspected superficial forearm contusion','ألم وكدمة موضعية بعد ارتطام مع حركة محفوظة.','Localized pain and bruising after impact with preserved movement.','فحص الطرف وتحديد الحاجة إلى التصوير.','Examine the limb and assess imaging need.')
  ],
  EMS046:[
   build('critical',124,'اشتباه بنزيف هضمي علوي مع عدم استقرار','Suspected upper gastrointestinal bleeding with instability','قيء دموي مع شحوب وتسارع النبض وهبوط الضغط.','Hematemesis with pallor, tachycardia and hypotension.','تقييم فوري للدورة الدموية ومصدر النزف.','Immediately assess circulation and the bleeding source.'),
   build('critical',132,'اشتباه بإجهاد حراري شديد مع اضطراب الوعي','Suspected severe heat illness with altered mentation','تعرض مطول للحرارة تلاه ارتباك وتسارع النبض.','Prolonged heat exposure followed by confusion and tachycardia.','تقييم فوري للوعي وحرارة الجسم المركزية.','Immediately assess mentation and core temperature.'),
   build('warning',97,'اشتباه بمغص كلوي','Suspected renal colic','ألم مغصي بالخاصرة يمتد للأربية.','Colicky flank pain radiating to the groin.','تقييم الألم والعلامات المصاحبة.','Assess pain and associated findings.'),
   build('warning',102,'اشتباه بعدوى تنفسية سفلية','Suspected lower respiratory infection','سعال وحمى مع ارتفاع النبض.','Cough and fever with an elevated pulse.','قياس تشبع الأكسجين وفحص التنفس.','Check oxygen saturation and assess breathing.'),
   build('stable',73,'اشتباه بإصابة أربطة الرسغ','Suspected wrist sprain','ألم موضعي بعد حركة التواء مع استقرار العلامات الحيوية.','Focal pain after twisting with stable vital signs.','فحص الرسغ وتحديد الحاجة إلى التصوير.','Examine the wrist and assess imaging need.'),
   build('stable',77,'جرح سطحي باليد','Superficial hand wound','جرح صغير وتوقف النزف عند التقييم.','Small wound with bleeding stopped at assessment.','تقييم عمق الجرح ووظيفة اليد.','Assess wound depth and hand function.')
  ]
 };
})();
