  /* ---------- machine data ---------- */
  const ICONS={
    lime:'<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="#6FB13A"/><circle cx="32" cy="32" r="19" fill="#B6E26A"/><g stroke="#fff" stroke-width="2.4"><line x1="32" y1="13" x2="32" y2="51"/><line x1="13" y1="32" x2="51" y2="32"/><line x1="18" y1="18" x2="46" y2="46"/><line x1="46" y1="18" x2="18" y2="46"/></g><circle cx="32" cy="32" r="3" fill="#fff"/></svg>',
    berry:'<svg viewBox="0 0 64 64"><circle cx="24" cy="30" r="11" fill="#3F6BE0"/><circle cx="40" cy="28" r="10" fill="#6E8FF0"/><circle cx="33" cy="42" r="10" fill="#2C4FBF"/><circle cx="21" cy="27" r="2.4" fill="#cfe0ff"/><circle cx="37" cy="25" r="2.4" fill="#cfe0ff"/></svg>',
    pom:'<svg viewBox="0 0 64 64"><circle cx="32" cy="34" r="20" fill="#C42F3A"/><path d="M32 14c2 0 5 2 5 5s-3 4-5 4-5-1-5-4 3-5 5-5z" fill="#8E1F2B"/><g fill="#7A1722"><circle cx="26" cy="32" r="3"/><circle cx="36" cy="30" r="3"/><circle cx="32" cy="40" r="3"/><circle cx="40" cy="38" r="3"/><circle cx="24" cy="40" r="3"/></g></svg>',
    melon:'<svg viewBox="0 0 64 64"><path d="M10 28 a22 22 0 0 0 44 0z" fill="#3CAE50"/><path d="M13 28 a19 19 0 0 0 38 0z" fill="#F0F4E8"/><path d="M16 28 a16 16 0 0 0 32 0z" fill="#F2738C"/><g fill="#1A2542"><circle cx="26" cy="34" r="1.6"/><circle cx="32" cy="38" r="1.6"/><circle cx="38" cy="34" r="1.6"/></g></svg>',
    snowflake:'<svg viewBox="0 0 32 32" fill="none" stroke="#29B5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16" y1="4" x2="16" y2="28"/><line x1="5.6" y1="10" x2="26.4" y2="22"/><line x1="5.6" y1="22" x2="26.4" y2="10"/><path d="M16 9l-3-3M16 9l3-3M16 23l-3 3M16 23l3 3"/><path d="M10.8 13l-4-.6M10.8 13l-.6-4M21.2 19l4 .6M21.2 19l.6 4M21.2 13l4-.6M21.2 13l.6-4M10.8 19l-4 .6M10.8 19l-.6 4"/></svg>',
    dbt:'<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#FF694B"/><g stroke="#fff" stroke-width="2.4" stroke-linecap="round"><line x1="13" y1="9" x2="11" y2="23"/><line x1="21" y1="9" x2="19" y2="23"/><line x1="8.5" y1="13" x2="23.5" y2="13"/><line x1="8.5" y1="19" x2="23.5" y2="19"/></g></svg>',
    slack:'<svg viewBox="0 0 32 32"><rect x="13" y="2.5" width="6" height="14.5" rx="3" fill="#36C5F0"/><rect x="13" y="15" width="6" height="14.5" rx="3" fill="#2EB67D"/><rect x="2.5" y="13" width="14.5" height="6" rx="3" fill="#ECB22E"/><rect x="15" y="13" width="14.5" height="6" rx="3" fill="#E01E5A"/></svg>',
    zendesk:'<svg viewBox="0 0 32 32" fill="#03363D"><path d="M15 8.5V27L3 27z"/><path d="M17 27a6 6 0 0 1 12 0z"/></svg>',
    gemini:'<svg viewBox="0 0 32 32"><path d="M16 2c1 7.4 6.6 13 14 14-7.4 1-13 6.6-14 14-1-7.4-6.6-13-14-14 7.4-1 13-6.6 14-14z" fill="#3186FF"/></svg>',
    cloudrun:'<svg viewBox="0 0 32 32"><path d="M9 23a6.5 6.5 0 0 1-.7-13A8.5 8.5 0 0 1 24.5 11 5.5 5.5 0 0 1 23 23z" fill="#4285F4"/><path d="M13.5 11l7.5 5-7.5 5z" fill="#fff"/></svg>',
    python:'<svg viewBox="0 0 32 32"><path d="M15.6 3c-4 0-6.6 1-6.6 4.8v3.3h6.7v1H6.5C2.7 13.1 1 15.5 1 19.5s1.6 6.4 5.4 6.4H9v-3.8c0-3 2.3-5.3 5.3-5.3h6.4c2.9 0 5-2.1 5-5V7.8C25.7 4.4 22.6 3 18.6 3zm-3.4 2.6a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4z" fill="#3C78AA"/><path d="M16.4 29c4 0 6.6-1 6.6-4.8v-3.3h-6.7v-1h9.2c3.8 0 5.5-2.4 5.5-6.4s-1.6-6.4-5.4-6.4H23v3.8c0 3-2.3 5.3-5.3 5.3h-6.4c-2.9 0-5 2.1-5 5v3c0 3.4 3.1 4.8 7.1 4.8zm3.4-2.6a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4z" fill="#F2C53D"/></svg>'
  };
  const projects=[
    {fc:"#4B7A00",coin:"assets/flavor-lime.png",flavor:"Key Lime",ribbon:"The Big Win",rcls:"r-blue",
     title:"Machine History Summarizer",
     impact:"Tech support can pull a machine's full service history in seconds, instead of digging through tickets and alerts by hand.",
     did:"Built a summarizer that gathers every Zendesk ticket and Well alert for a machine and turns it into one concise history, right inside Slack. It runs on Snowflake Cortex, summarizing each ticket first, then combining those into the machine's full story.",
     tools:[{ic:"snowflake",name:"Snowflake Cortex"},{ic:"zendesk",name:"Zendesk"},{ic:"slack",name:"Slack"}]},
    {fc:"#246EFF",coin:"assets/flavor-pom-blueberry.png",flavor:"Pomegranate Blueberry",ribbon:"Under the Hood",rcls:"r-blue",
     title:"Call Summarizer Upgrade",
     impact:"Service-call recaps come out cleaner and the recording links work in production again, so the team can trust what the summarizer produces.",
     did:"Moved the summarizer onto a newer Gemini model for better write-ups, and fixed a bug that broke the recording links once it ran on Cloud Run. The old code needed a private key the server didn't have, so I switched it to sign links through Google IAM instead.",
     tools:[{ic:"gemini",name:"Gemini 2.5 Flash"},{ic:"cloudrun",name:"Cloud Run"},{ic:"python",name:"Python"}]},
    {fc:"#C8102E",coin:"assets/flavor-watermelon.png",flavor:"Watermelon",ribbon:"New: Growth",rcls:"r-red",
     title:"Expansion Targeting MVP",
     impact:"Sales can see exactly which of a client's sites don't have a Bevi yet, turning guesswork into a clear list of expansion targets.",
     did:"I match the location of every Bevi unit against all of our client and prospect locations, then flag the sites that don't have a Bevi yet. Those gaps are the expansion opportunities.",
     tools:[{ic:"python",name:"Python"},{ic:"snowflake",name:"Snowflake"}]},
    {fc:"#FA5D05",coin:"assets/flavor-mango.png",flavor:"Peach Mango",ribbon:"Day-to-day",rcls:"r-orange",
     title:"Other data team work",
     impact:"This is where I built the foundational data-science skills the rest of my work stands on, while keeping other teams unblocked with the data they needed.",
     did:"The day-to-day requests that don't fit on a coin: pulling data out of Snowflake (like a Quench data pull and a machine list for Rob K.) and building new tables off the source tables in dbt so other teams can use them.",
     tools:[{ic:"snowflake",name:"Snowflake"},{ic:"dbt",name:"dbt"}]}
  ];
  const grid=document.getElementById("grid");
  projects.forEach((p,i)=>{
    const b=document.createElement("button");b.className="flavor";b.dataset.i=i;
    b.innerHTML='<span class="ribbon '+p.rcls+'">'+p.ribbon+'</span><span class="icon"><img src="'+p.coin+'" alt=""></span><span class="ftxt"><b>'+p.title+'</b><span>'+p.flavor+'</span></span><span class="check">✓</span>';
    grid.appendChild(b);
  });
  const flavorBtns=[...document.querySelectorAll(".flavor")];
  const pourBtn=document.getElementById("pour");
  const overlay=document.getElementById("overlay");
  const dcontent=document.getElementById("dcontent");
  let selected=null;
  function selectFlavor(i){selected=i;flavorBtns.forEach(b=>b.classList.toggle("sel",+b.dataset.i===i));pourBtn.disabled=false;}
  flavorBtns.forEach(b=>b.addEventListener("click",()=>selectFlavor(+b.dataset.i)));
  function pour(){
    if(selected===null)return;const p=projects[selected];
    document.getElementById("drinkcard").style.setProperty("--fc",p.fc);
    const toolsHTML=p.tools?'<div class="tools"><span class="tlabel">Built with</span>'+p.tools.map(t=>'<span class="tool">'+ICONS[t.ic]+t.name+'</span>').join('')+'</div>':'';
    dcontent.innerHTML='<div class="dhead"><span class="icon"><img src="'+p.coin+'" alt=""></span><span class="dtag">'+p.ribbon+'</span></div><div class="fl">'+p.flavor+'</div><h3>'+p.title+'</h3><div class="impact"><span class="seglbl">Why it matters</span>'+p.impact+'</div><div class="seg"><span class="seglbl">What I did</span><p>'+p.did+'</p></div>'+toolsHTML+'<div class="dnav"><button class="btn btn-ghost" id="back">← Back to menu</button><button class="btn btn-blue" id="nextf">Next flavor →</button></div>';
    overlay.classList.add("open");
    document.getElementById("back").onclick=closeOverlay;
    document.getElementById("nextf").onclick=nextFlavor;
  }
  function closeOverlay(){overlay.classList.remove("open");}
  function gotoFlavor(n){closeOverlay();setTimeout(()=>{selectFlavor(n);pour();},260);}
  function nextFlavor(){if(selected===null)return;if(selected>=projects.length-1){closeOverlay();return;}gotoFlavor(selected+1);}
  function prevFlavor(){if(selected===null)return;gotoFlavor((selected-1+projects.length)%projects.length);}
  pourBtn.addEventListener("click",pour);
  overlay.addEventListener("click",e=>{if(e.target===overlay)closeOverlay();});
  document.querySelectorAll(".style").forEach(s=>s.addEventListener("click",()=>{document.querySelectorAll(".style").forEach(x=>x.classList.remove("on"));s.classList.add("on");}));

  /* ---------- deck controller ---------- */
  const track=document.getElementById("track");
  const slides=[...document.querySelectorAll(".slide")];
  const dotsWrap=document.getElementById("dots");
  const count=document.getElementById("count");
  const prevB=document.getElementById("prev"), nextB=document.getElementById("next");
  let idx=0;
  slides.forEach((s,i)=>{const d=document.createElement("div");d.className="dot"+(i===0?" on":"");d.onclick=()=>go(i);dotsWrap.appendChild(d);});
  const dots=[...document.querySelectorAll(".dot")];
  function go(i){
    idx=Math.max(0,Math.min(slides.length-1,i));
    track.style.transform="translateX("+(-idx*100)+"vw)";
    slides.forEach((s,k)=>s.classList.toggle("active",k===idx));
    dots.forEach((d,k)=>d.classList.toggle("on",k===idx));
    count.textContent=(idx+1)+" / "+slides.length;
    prevB.disabled=idx===0; nextB.disabled=idx===slides.length-1;
  }
  function next(){go(idx+1);} function prev(){go(idx-1);}
  prevB.onclick=prev; nextB.onclick=next;
  go(0);

  /* ---------- bubbles ---------- */
  function makeBubbles(wrap,count,sidesOnly){
    if(!wrap)return;
    for(let i=0;i<count;i++){
      const b=document.createElement("span");
      b.className="bubble";
      const size=(12+Math.random()*38).toFixed(1)+"px";
      b.style.width=size; b.style.height=size;
      const left=sidesOnly?(Math.random()<0.5?Math.random()*14:86+Math.random()*14):Math.random()*100;
      b.style.left=left.toFixed(2)+"%";
      const dur=7+Math.random()*9;
      b.style.animationDuration=dur.toFixed(2)+"s";
      b.style.animationDelay=(-Math.random()*dur).toFixed(2)+"s";
      b.style.setProperty("--dx",(Math.random()*70-35).toFixed(0)+"px");
      wrap.appendChild(b);
    }
  }
  makeBubbles(document.getElementById("bubbles"),28,false);     // thank-you: everywhere
  makeBubbles(document.getElementById("bubblesWin"),16,true);   // big win: sides only, behind content

  /* ---------- randomize polaroid tilts ---------- */
  document.querySelectorAll(".polaroid").forEach(p=>{
    const sign=Math.random()<0.5?-1:1;
    const deg=(2+Math.random()*4.5)*sign;   // ±2 to ±6.5 degrees
    p.style.setProperty("--rot",deg.toFixed(2)+"deg");
  });

  const hint=document.querySelector(".hint");
  let hintGone=false;
  function dropHint(){if(!hintGone){hintGone=true;hint.classList.add("gone");}}
  setTimeout(dropHint,7000);

  window.addEventListener("keydown",e=>{
    const onMachine=slides[idx].classList.contains("slide-machine");
    const ovOpen=overlay.classList.contains("open");
    if(e.key==="ArrowRight"||e.key==="PageDown"){e.preventDefault();dropHint(); if(ovOpen){nextFlavor();return;} next();}
    else if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();dropHint(); if(ovOpen){prevFlavor();return;} prev();}
    else if(onMachine){
      const n=parseInt(e.key,10);
      if(n>=1&&n<=projects.length)selectFlavor(n-1);
      else if(e.key==="Enter"){e.preventDefault();pour();}
      else if(e.key==="Escape")closeOverlay();
    }
  });
