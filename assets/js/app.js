/* ===== 1. CONFIG: shudhu ei part-ta edit korun ===== */
const CONFIG = {
  name:{en:'Dr. A. B. Rahman',bn:'ড. এ. বি. রহমান'},
  title:{en:'Professor',bn:'অধ্যাপক'},
  dept:{en:'Dept. of CSE, University of Chittagong',bn:'সিএসই বিভাগ, চট্টগ্রাম বিশ্ববিদ্যালয়'},
  tagline:{en:'Researcher | Teacher | Mentor',bn:'গবেষক | শিক্ষক | মেন্টর'},
  bio:{en:'I work on machine learning and data-driven solutions for climate and security problems. I have supervised students at BSc, MSc and PhD level.',
       bn:'আমি মেশিন লার্নিং এবং জলবায়ু ও নিরাপত্তা সমস্যার ডেটা-নির্ভর সমাধান নিয়ে কাজ করি। আমি বিএসসি, এমএসসি ও পিএইচডি পর্যায়ে শিক্ষার্থীদের তত্ত্বাবধান করেছি।'},
  intro:{en:'Professor of Computer Science and Engineering. I teach, research and mentor students in machine learning, climate data and security.',bn:'কম্পিউটার সায়েন্স ও ইঞ্জিনিয়ারিংয়ের অধ্যাপক। আমি মেশিন লার্নিং, জলবায়ু ডেটা ও নিরাপত্তা বিষয়ে পাঠদান, গবেষণা ও শিক্ষার্থীদের মেন্টরিং করি।'},
  email:'name@cu.ac.bd', phone:'+880 1XXX-XXXXXX',
  office:{en:'Room 305, CSE Building, University of Chittagong',bn:'কক্ষ ৩০৫, সিএসই ভবন, চট্টগ্রাম বিশ্ববিদ্যালয়'},
  map:'https://maps.google.com/?q=University+of+Chittagong',
  openToSupervise:true, updated:'2026-11-01',
  stats:{papers:48,citations:1200,hindex:14,students:9},
  socials:{Scholar:'https://scholar.google.com',ORCID:'https://orcid.org',ResearchGate:'https://researchgate.net',LinkedIn:'https://linkedin.com'},
  timeline:[
    {year:'2016–now',t:{en:'Professor, University of Chittagong',bn:'অধ্যাপক, চট্টগ্রাম বিশ্ববিদ্যালয়'}},
    {year:'2014',t:{en:'PhD, Computer Science',bn:'পিএইচডি, কম্পিউটার সায়েন্স'}},
    {year:'2009',t:{en:'MSc, CSE',bn:'এমএসসি, সিএসই'}}],
  research:[
    {i:'🧠',t:{en:'Machine Learning',bn:'মেশিন লার্নিং'},d:{en:'Deep and classical models for real data.',bn:'বাস্তব ডেটার জন্য মডেল।'}},
    {i:'🌍',t:{en:'Climate Data Science',bn:'জলবায়ু ডেটা সায়েন্স'},d:{en:'Prediction from environmental data.',bn:'পরিবেশ ডেটা থেকে পূর্বাভাস।'}},
    {i:'🔐',t:{en:'Cybersecurity',bn:'সাইবার নিরাপত্তা'},d:{en:'Intrusion and malware detection.',bn:'অনুপ্রবেশ ও ম্যালওয়্যার শনাক্তকরণ।'}}],
  publications:[
    {year:2026,type:'journal',authors:'Rahman, A. B., Das, S.',title:'Sample journal paper title',venue:'IEEE Access',doi:'10.1109/xxxx',cites:12},
    {year:2025,type:'conf',authors:'Rahman, A. B.',title:'Sample conference paper title',venue:'ICCIT 2025',doi:'10.1109/yyyy',cites:5},
    {year:2024,type:'journal',authors:'Rahman, A. B., Khan, M.',title:'Another sample paper',venue:'Scientific Reports',doi:'10.1038/zzzz',cites:40},
    {year:2023,type:'book',authors:'Rahman, A. B.',title:'Sample book chapter',venue:'Springer',doi:'',cites:3}],
  courses:[{code:'CSE 101',t:{en:'Intro to Programming',bn:'প্রোগ্রামিং পরিচিতি'},m:{en:'BSc, 1st year',bn:'বিএসসি, ১ম বর্ষ'}}],
  projects:[{t:{en:'Sample research project',bn:'নমুনা গবেষণা প্রকল্প'},m:{en:'PI | UGC | 2025–2027 | Ongoing',bn:'প্রধান গবেষক | ইউজিসি | ২০২৫–২০২৭'}}],
  awards:[{t:{en:'Best Paper Award',bn:'সেরা গবেষণাপত্র পুরস্কার'},m:{en:'ICCIT, 2024',bn:'আইসিসিআইটি, ২০২৪'}}],
  talks:[{t:{en:'Keynote: AI for Climate',bn:'মূল বক্তব্য: জলবায়ুর জন্য এআই'},m:{en:'Dhaka, 2025',bn:'ঢাকা, ২০২৫'}}],
  students:[], news:[{t:{en:'New paper accepted',bn:'নতুন গবেষণাপত্র গৃহীত'},m:{en:'Oct 2026',bn:'অক্টোবর ২০২৬'}}]
};
const I18N={
 en:{nav_home:'Home',nav_about:'About',nav_research:'Research',nav_papers:'Papers',nav_teaching:'Teaching',nav_projects:'Projects & grants',nav_awards:'Awards',nav_talks:'Talks & events',nav_students:'Students',nav_news:'News',nav_contact:'Contact',more:'More',open_sup:'Open to supervise',dl_cv:'Download CV',papers:'Papers',citations:'Citations',hindex:'h-index',supervised:'Supervised',reset:'Reset',copied:'Email copied',cite_ok:'Citation copied',link_ok:'Link copied',updated:'Last updated',hello:'Hello, I am',know_more:'More about me',about_sub:'Biography, education and achievements',who:'Biography',edu:'Education & experience',res_sub:'Research areas, metrics and projects',pub_title:'Publications',pub_sub:'Papers, citations and DOI links',teach_title:'Teaching & mentoring',teach_sub:'Courses, students, talks and news',contact_sub:'Get in touch with me',tab_courses:'Courses',tab_students:'Students',tab_talks:'Talks',tab_news:'News',your_name:'Your name',your_email:'Your email',your_msg:'Message',send:'Send message',quick:'Quick links',top:'Top',email:'Email',phone:'Phone',office:'Office',copy:'Copy',call:'Call',map:'Open map',search:'Search publications…',results:'results'},
 bn:{nav_home:'হোম',nav_about:'পরিচিতি',nav_research:'গবেষণা',nav_papers:'প্রকাশনা',nav_teaching:'পাঠদান',nav_projects:'প্রকল্প ও অনুদান',nav_awards:'পুরস্কার',nav_talks:'বক্তৃতা ও অনুষ্ঠান',nav_students:'শিক্ষার্থী',nav_news:'সংবাদ',nav_contact:'যোগাযোগ',more:'আরও',open_sup:'তত্ত্বাবধানে আগ্রহী',dl_cv:'সিভি ডাউনলোড',papers:'প্রকাশনা',citations:'সাইটেশন',hindex:'এইচ-ইনডেক্স',supervised:'তত্ত্বাবধান',reset:'রিসেট',copied:'ইমেইল কপি হয়েছে',cite_ok:'রেফারেন্স কপি হয়েছে',link_ok:'লিংক কপি হয়েছে',updated:'সর্বশেষ আপডেট',hello:'আমি',know_more:'আমার সম্পর্কে আরও',about_sub:'জীবনী, শিক্ষা ও অর্জন',who:'জীবনী',edu:'শিক্ষা ও অভিজ্ঞতা',res_sub:'গবেষণার ক্ষেত্র, পরিসংখ্যান ও প্রকল্প',pub_title:'প্রকাশনা',pub_sub:'গবেষণাপত্র, সাইটেশন ও DOI লিংক',teach_title:'পাঠদান ও মেন্টরিং',teach_sub:'কোর্স, শিক্ষার্থী, বক্তৃতা ও সংবাদ',contact_sub:'আমার সাথে যোগাযোগ করুন',tab_courses:'কোর্স',tab_students:'শিক্ষার্থী',tab_talks:'বক্তৃতা',tab_news:'সংবাদ',your_name:'আপনার নাম',your_email:'আপনার ইমেইল',your_msg:'বার্তা',send:'বার্তা পাঠান',quick:'দ্রুত লিংক',top:'উপরে',email:'ইমেইল',phone:'ফোন',office:'অফিস',copy:'কপি',call:'কল',map:'ম্যাপ',search:'প্রকাশনা খুঁজুন…',results:'টি ফলাফল'}};

/* ===== 2. Helpers ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get:(k,d)=>{try{return localStorage.getItem(k)??d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}},del:k=>{try{localStorage.removeItem(k)}catch(e){}}};
const root=document.documentElement;let lang=store.get('tp-lang','en');
const L=o=>o&&typeof o==='object'?(o[lang]||o.en||''):(o??'');
const T=k=>I18N[lang][k]||I18N.en[k]||k;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const bnDigits=s=>lang==='bn'?String(s).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]):String(s);
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
const copy=async(txt,msg)=>{try{await navigator.clipboard.writeText(txt)}catch(e){}toast(msg)};

/* ===== 3. Pages / router (hash based) ===== */
const PAGES=[['home','🏠','nav_home'],['about','👤','nav_about'],['research','🔬','nav_research'],['publications','📄','pub_title'],['teaching','🎓','nav_teaching'],['contact','✉','nav_contact']];
const BAR=['home','about','publications','contact'];let cur='home';
function markActive(){const h=location.hash.slice(1);cur=PAGES.some(p=>p[0]===h)?h:'home';
 $$('.page').forEach(p=>p.classList.toggle('active',p.id===cur));
 $$('[data-nav]').forEach(a=>{const on=a.dataset.nav===cur;a.classList.toggle('active',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
 $('#moreBtn').classList.toggle('active',!BAR.includes(cur));
 document.title=`${L(CONFIG.name)} | ${T(PAGES.find(p=>p[0]===cur)[2])}`;placeBubble()}
function route(){markActive();scrollTo(0,0);closeSheet();if(cur==='about')counters();if(cur==='research')requestAnimationFrame(buildCharts)}
addEventListener('hashchange',route);
function placeBubble(){const a=$('#pillNav a.active'),b=$('#bubble');if(!a||!a.offsetWidth){b.style.width=0;return}b.style.left=a.offsetLeft+'px';b.style.width=a.offsetWidth+'px'}
addEventListener('resize',placeBubble);addEventListener('load',placeBubble);document.fonts?.ready.then(placeBubble);

/* ===== 4. Theme ===== */
const ACCENTS={ocean:'#0ea5e9',indigo:'#6366f1',emerald:'#10b981',rose:'#f43f5e',amber:'#f59e0b',violet:'#8b5cf6'};
function applyTheme(m){root.dataset.theme=m==='auto'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):m}
function setTheme(m){store.set('tp-theme',m);const go=()=>{applyTheme(m);syncUI();buildCharts()};
 document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches?document.startViewTransition(go):go()}
function setAccent(a){if(a[0]==='#'){root.style.setProperty('--accent',a);root.removeAttribute('data-accent')}else{root.style.removeProperty('--accent');root.dataset.accent=a}
 store.set('tp-accent',a);syncUI();buildCharts()}
function syncUI(){const m=store.get('tp-theme','auto'),a=store.get('tp-accent','indigo');
 $$('.seg button').forEach(b=>b.classList.toggle('on',b.dataset.v===m));$$('.swatches button').forEach(b=>b.classList.toggle('on',b.dataset.a===a))}
function buildSettings(){const w=$('#swatches');w.innerHTML=Object.entries(ACCENTS).map(([k,v])=>`<button data-a="${k}" style="background:${v}" aria-label="${k}"></button>`).join('')+'<input type="color" id="customColor" aria-label="Custom color">';
 w.onclick=e=>e.target.dataset.a&&setAccent(e.target.dataset.a);$('#customColor').oninput=e=>setAccent(e.target.value);
 $$('.seg button').forEach(b=>b.onclick=()=>setTheme(b.dataset.v));$('#langBtn').onclick=()=>setLang(lang==='en'?'bn':'en');
 $('#resetBtn').onclick=()=>{['tp-theme','tp-accent','tp-lang'].forEach(store.del);root.style.removeProperty('--accent');root.dataset.accent='indigo';applyTheme('auto');setLang('en');syncUI();buildCharts()};
 matchMedia('(prefers-color-scheme: dark)').onchange=()=>store.get('tp-theme','auto')==='auto'&&(applyTheme('auto'),buildCharts());syncUI()}

/* ===== 5. Language + rendering ===== */
function setLang(l){lang=l;root.lang=l;store.set('tp-lang',l);$$('[data-i18n]').forEach(el=>el.textContent=T(el.dataset.i18n));renderAll();markActive()}
const card=(h,m)=>`<div class="card glass"><h3>${h}</h3><p class="meta">${m||''}</p></div>`;
function list(id,items,fn){$('#'+id).innerHTML=(items||[]).map(fn).join('')}
const TABS=[['courseList','tab_courses','courses'],['studentList','tab_students','students'],['talkList','tab_talks','talks'],['newsList','tab_news','news']];let tab=null;
function renderTabs(){const av=TABS.filter(t=>CONFIG[t[2]]?.length);if(!av.some(t=>t[0]===tab))tab=av[0]?.[0];
 $('#teachTabs').innerHTML=av.map(t=>`<button role="tab" data-t="${t[0]}" class="${t[0]===tab?'on':''}" aria-selected="${t[0]===tab}">${esc(T(t[1]))}</button>`).join('');
 TABS.forEach(t=>$('#'+t[0]).classList.toggle('on',t[0]===tab))}
$('#teachTabs').onclick=e=>{const b=e.target.closest('button');if(b){tab=b.dataset.t;renderTabs()}};

function renderAll(){const C=CONFIG,soc=Object.entries(C.socials).map(([k,v])=>`<a href="${esc(v)}" target="_blank" rel="noopener">${k}</a>`).join('');
 $('#heroName').textContent=L(C.name);$('#heroTitle').textContent=L(C.title)+' · '+L(C.dept);$('#heroTag').textContent=L(C.tagline);$('#intro').textContent=L(C.intro);
 $('#superviseBadge').hidden=!C.openToSupervise;$('#socials').innerHTML=soc;$('#contactSocials').innerHTML=soc;
 $('#bio').textContent=L(C.bio);$('#interests').innerHTML=C.research.map(r=>`<span class="chip">${esc(L(r.t))}</span>`).join('');
 $$('[data-count]').forEach(el=>el.textContent=bnDigits(C.stats[el.dataset.count]||0));
 $('#timeline').innerHTML=C.timeline.map(x=>`<li><small>${bnDigits(x.year)}</small><br>${esc(L(x.t))}</li>`).join('');
 $('#awardCard').hidden=!C.awards.length;list('awardList',C.awards,a=>`<div class="award"><span>🏆</span><div><b>${esc(L(a.t))}</b><small>${esc(L(a.m))}</small></div></div>`);
 list('researchList',C.research,r=>card(r.i+' '+esc(L(r.t)),esc(L(r.d))));
 $('#projectBlock').hidden=!C.projects.length;list('projectList',C.projects,p=>card(esc(L(p.t)),esc(L(p.m))));
 list('courseList',C.courses,c=>card(esc(c.code)+' — '+esc(L(c.t)),esc(L(c.m))));
 ['student','talk','news'].forEach(k=>list(k+'List',C[k+'s']||C[k],p=>card(esc(L(p.t)),esc(L(p.m)))));
 renderTabs();$('#pubSearch').placeholder=T('search');renderPubs();
 const cc=[['✉','email',C.email,'mailto:'+C.email],['📞','phone',C.phone,'tel:'+C.phone.replace(/\s/g,'')],['📍','office',L(C.office),C.map]];
 $('#contactCards').innerHTML=cc.map(([i,k,v,h])=>`<div class="ccard glass"><span class="ci">${i}</span><div><small>${T(k)}</small><b>${esc(v)}</b></div><div class="acts"><a href="${esc(h)}" ${k==='office'?'target="_blank" rel="noopener"':''} aria-label="${T(k==='phone'?'call':k==='office'?'map':'email')}">${k==='email'?'✉':k==='phone'?'📞':'🗺'}</a>${k!=='office'?`<button data-c="${esc(v)}" aria-label="${T('copy')}">⧉</button>`:''}</div></div>`).join('');
 $('#fName').textContent=L(C.name);$('#fDept').textContent=L(C.dept);$('#fSocials').innerHTML=soc;
 $('#fLinks').innerHTML=PAGES.map(p=>`<a href="#${p[0]}" data-nav="${p[0]}">${esc(T(p[2]))}</a>`).join('');
 $('#fContact').innerHTML=`${esc(C.email)}<br>${esc(C.phone)}<br>${esc(L(C.office))}`;
 $('#footer').textContent=`© ${bnDigits(new Date().getFullYear())} ${L(C.name)} · ${T('updated')}: ${bnDigits(C.updated)}`;
 $('#sheetLinks').innerHTML=PAGES.map(p=>`<a href="#${p[0]}" data-nav="${p[0]}">${p[1]}<br>${esc(T(p[2]))}</a>`).join('');
 buildCharts()}
$('#contactCards').onclick=e=>{const b=e.target.closest('button[data-c]');b&&copy(b.dataset.c,T('copied'))};
$('#msgForm').onsubmit=e=>{e.preventDefault();const f=e.target;location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent('Message from '+f.n.value)}&body=${encodeURIComponent(f.m.value+'\n\n'+f.n.value+' <'+f.e.value+'>')}`};
$('#toTop').onclick=$('#topBtn').onclick=()=>scrollTo({top:0,behavior:'smooth'});

/* ===== 6. Publications ===== */
function renderPubs(){const q=$('#pubSearch').value.toLowerCase(),ty=$('#pubType').value,so=$('#pubSort').value,P=CONFIG.publications;
 const p=P.filter(x=>(!ty||x.type===ty)&&(!q||(x.title+x.venue+x.authors).toLowerCase().includes(q))).sort((a,b)=>so==='cites'?b.cites-a.cites:b.year-a.year);
 $('#pubCount').textContent=bnDigits(p.length)+' '+T('results');
 $('#pubList').innerHTML=p.map(x=>{const i=P.indexOf(x);return `<div class="card glass pub"><span class="chip">${bnDigits(x.year)}</span><span class="chip">${x.type}</span><h3>${esc(x.title)}</h3><p class="meta">${esc(x.authors)} — <i>${esc(x.venue)}</i> · ${bnDigits(x.cites)} ${T('citations')}</p>
 <p>${x.doi?`<a class="doi" href="https://doi.org/${esc(x.doi)}" target="_blank" rel="noopener">DOI</a> `:''}<button data-i="${i}" data-f="apa">APA</button><button data-i="${i}" data-f="bib">BibTeX</button></p></div>`}).join('')||'<p class="muted">—</p>'}
$('#pubList').onclick=e=>{const b=e.target.closest('button');if(!b)return;const x=CONFIG.publications[b.dataset.i];
 copy(b.dataset.f==='apa'?`${x.authors} (${x.year}). ${x.title}. ${x.venue}.${x.doi?' https://doi.org/'+x.doi:''}`:`@article{${x.authors.split(',')[0].toLowerCase()}${x.year},\n title={${x.title}},\n journal={${x.venue}},\n year={${x.year}},\n doi={${x.doi}}\n}`,T('cite_ok'))};
['pubSearch','pubType','pubSort'].forEach(i=>$('#'+i).addEventListener('input',renderPubs));

/* ===== 7. Counters + scroll effects ===== */
function counters(){$$('[data-count]').forEach(el=>{const to=CONFIG.stats[el.dataset.count]||0,t0=performance.now();
 const step=t=>{const p=Math.min((t-t0)/1200,1);el.textContent=bnDigits(Math.round(to*(1-Math.pow(1-p,3))));p<1&&requestAnimationFrame(step)};requestAnimationFrame(step)})}
addEventListener('scroll',()=>{const h=root.scrollHeight-innerHeight;$('#progress').style.transform=`scaleX(${h>0?scrollY/h:0})`;$('#pillNav').classList.toggle('small',scrollY>40);$('#fab').classList.remove('open')},{passive:true});

/* ===== 8. Bottom sheet + settings popover ===== */
const sheet=$('#sheet'),backdrop=$('#backdrop');
function openSheet(){sheet.classList.add('open');backdrop.classList.add('show');sheet.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#sheetLinks a')?.focus()}
function closeSheet(){sheet.style.transform='';sheet.classList.remove('open','drag');backdrop.classList.remove('show');sheet.setAttribute('aria-hidden','true');document.body.style.overflow=''}
$('#moreBtn').onclick=openSheet;backdrop.onclick=closeSheet;$('#sheetLinks').onclick=e=>e.target.closest('a')&&closeSheet();
addEventListener('keydown',e=>{if(e.key==='Escape'){closeSheet();$('#settings').classList.remove('show')}});
let y0=null;const hd=$('#handle');
hd.onpointerdown=e=>{y0=e.clientY;hd.setPointerCapture(e.pointerId);sheet.classList.add('drag')};
hd.onpointermove=e=>{if(y0!==null)sheet.style.transform=`translateY(${Math.max(0,e.clientY-y0)}px)`};
hd.onpointerup=e=>{if(y0===null)return;const dy=e.clientY-y0;y0=null;sheet.classList.remove('drag');dy>100?closeSheet():sheet.style.transform=''};
$('#settingsBtn').onclick=()=>{const s=$('#settings');if(!s.classList.contains('pop')){document.body.append(s);s.classList.add('pop')}s.classList.toggle('show')};

/* ===== 9. FAB ===== */
$('#fabBtn').onclick=()=>{const f=$('#fab');f.classList.toggle('open');$('#fabBtn').setAttribute('aria-expanded',f.classList.contains('open'))};
$('#shareBtn').onclick=()=>navigator.share?navigator.share({title:L(CONFIG.name),url:location.href}).catch(()=>{}):copy(location.href,T('link_ok'));
document.addEventListener('click',e=>{if(!e.target.closest('#fab'))$('#fab').classList.remove('open');if(!e.target.closest('#settings,#settingsBtn'))$('#settings').classList.remove('show')});

/* ===== 10. Charts (Research page) ===== */
let charts=[];
function buildCharts(){if(cur!=='research'||typeof Chart==='undefined')return;charts.forEach(c=>c.destroy());charts=[];
 const cs=getComputedStyle(root),ac=cs.getPropertyValue('--accent').trim(),P=CONFIG.publications;
 const yrs=[...new Set(P.map(p=>p.year))].sort(),cnt=yrs.map(y=>P.filter(p=>p.year===y).length),ty=['journal','conf','book'],tc=ty.map(t=>P.filter(p=>p.type===t).length);
 Chart.defaults.color=cs.getPropertyValue('--muted').trim();
 charts.push(new Chart($('#chartYear'),{type:'bar',data:{labels:yrs.map(bnDigits),datasets:[{label:T('papers'),data:cnt,backgroundColor:ac,borderRadius:8}]},options:{maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{precision:0}}}}}));
 charts.push(new Chart($('#chartType'),{type:'doughnut',data:{labels:ty,datasets:[{data:tc,backgroundColor:[ac,'#10b981','#f59e0b'],borderWidth:0}]},options:{maintainAspectRatio:false}}));
 $('#sumYear').textContent=yrs.map((y,i)=>`${bnDigits(y)}: ${bnDigits(cnt[i])}`).join(', ');$('#sumType').textContent=ty.map((t,i)=>`${t}: ${bnDigits(tc[i])}`).join(', ')}

/* ===== Start ===== */
document.addEventListener('DOMContentLoaded',()=>{buildSettings();setLang(lang);route()});