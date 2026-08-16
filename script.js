/* ── DATA ────────────────────────────────────────────────── */
const skills = [
  { title:"Programming",           
    icon:"bi-code-slash",  
    tags:["HTML / CSS","JavaScript","Java","SQL"] },

  { title:"Tools & Platforms",     
    icon:"bi-tools",       
    tags:["GitHub","VS Code","Bootstrap","Docker"] },

  { title:"Health & Social Svcs.", 
    icon:"bi-heart-pulse", 
    tags:["PIJ (Projet intégration jeunesse)","ICD-10-CA","CCI","OACIS","Med-Echo Plus","SicPlus"] }
];

const experience = [
  { id:"archivist",  
    open:true,  
    title:"Medical Archivist",                                                    
    dates:"2023 – Present", 
    subtitle:"Youth Protection Services",
    body:"Managed information contained in youth protection files to ensure security and confidentiality by limiting access to authorized persons, in accordance with the applicable legal framework." },

  { id:"consultant", 
    open:false, 
    title:"Consultant — Displacement Tracking Matrix & Evacuee Support Program",  
    dates:"2015 – 2018",    
    subtitle:"International Organization for Migration (IOM)",
    body:"Prepared situation reports (internal and external) and generated regular Displacement Tracking Reports (DTM) to be shared with the government, local and international humanitarian agencies, and other stakeholders." },

  { id:"nurse",      
    open:false, 
    title:"Staff Nurse",                                                          
    dates:"2010 – 2015",    
    subtitle:"Polymedical Medical Center",
    body:"Rendered nursing care safely, effectively, and consistently with patients' rights and the national and international code of ethics for nurses." }
];

const education = [
  { title:"AEC — Software Development", 
    subtitle:"Secure Desktop, Mobile & Web Applications", 
    institution:"Vanier College", year:"Expected 2026", 
    icon:"bi-laptop" },

  { title:"DCS — Medical Records",      
    subtitle:"Diploma of Collegial Studies",               
    institution:"College O'Sullivan Montréal",       
    year:"2021",          
    icon:"bi-file-medical" },

  { title:"BSc — Nursing",              
    subtitle:"Bachelor of Science in Nursing",              
    institution:"Xavier University",     
    year:"2012",          
    icon:"bi-heart-pulse" }
];

/* ── RENDER ──────────────────────────────────────────────── */
document.getElementById("skillsGrid").innerHTML = skills.map(s=>`
  <div class="col"><div class="card h-100"><div class="card-body">
    <div class="d-flex align-items-center gap-2 mb-3">
      <i class="bi ${s.icon} text-warning fs-4"></i>
      <h5 class="card-title mb-0">${s.title}</h5>
    </div>
    <div class="d-flex flex-wrap gap-2">
      ${s.tags.map(t=>`<span class="badge skill-tag">${t}</span>`).join("")}
    </div>
  </div></div></div>`).join("");

document.getElementById("experienceAccordion").innerHTML = experience.map(e=>`
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button ${e.open?"":"collapsed"}" type="button"
        data-bs-toggle="collapse" data-bs-target="#col-${e.id}" aria-expanded="${e.open}">
        <span class="acc-inner">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-briefcase text-warning"></i>
            <span class="acc-title">${e.title}</span>
          </span>
          <span class="acc-dates">${e.dates}</span>
          <span class="acc-subtitle">${e.subtitle}</span>
        </span>
      </button>
    </h2>
    <div id="col-${e.id}" class="accordion-collapse collapse ${e.open?"show":""}" data-bs-parent="#experienceAccordion">
      <div class="accordion-body">${e.body}</div>
    </div>
  </div>`).join("");

document.getElementById("educationGrid").innerHTML = education.map(e=>`
  <div class="col"><div class="card h-100"><div class="card-body">
    <div class="d-flex align-items-center gap-2 mb-2">
      <i class="bi ${e.icon} text-warning fs-4"></i>
      <h5 class="card-title mb-0">${e.title}</h5>
    </div>
    <p class="card-subtitle mb-2">${e.subtitle}</p>
    <p class="institution">${e.institution} · ${e.year}</p>
  </div></div></div>`).join("");

/* ── TYPEWRITER ──────────────────────────────────────────── */
(function(){
  const el=document.getElementById("heroTagline");
  const phrases=["Design — Build — Optimize — Repeat","Healthcare roots. Developer mindset.","Building for humans, powered by code.","Open to freelance & full-time roles."];
  let pi=0,ci=0,del=false;
  function tick(){
    el.textContent=phrases[pi].slice(0,ci)+"|";
    if(!del){ if(ci<phrases[pi].length){ci++;setTimeout(tick,65);}else{del=true;setTimeout(tick,1800);} }
    else    { if(ci>0){ci--;setTimeout(tick,32);}else{del=false;pi=(pi+1)%phrases.length;setTimeout(tick,400);} }
  }
  tick();
})();

/* ── PARTICLES ───────────────────────────────────────────── */
(function(){
  const c=document.getElementById("heroParticles");
  const sym=["</>","{ }","=>","();","//","&&","[]","01","#!","SQL","git"];
  for(let i=0;i<16;i++){
    const p=document.createElement("span"); p.className="particle";
    p.textContent=sym[i%sym.length];
    p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*6}s;animation-duration:${6+Math.random()*8}s;font-size:${.55+Math.random()*.5}rem;opacity:${0.2 + Math.random() * 0.2};`;
    c.appendChild(p);
  }
})();

/* ── FIREFLY BUTTON ──────────────────────────────────────── */
const ffBtn=document.getElementById("fireflyBtn");
window.addEventListener("scroll",()=>ffBtn.classList.toggle("show",window.scrollY>300),{passive:true});
ffBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

/* ── ACTIVE NAV ──────────────────────────────────────────── */
(function(){
  const secs=document.querySelectorAll("section[id]");
  const links=document.querySelectorAll(".navbar-nav .nav-link");
  window.addEventListener("scroll",()=>{
    let cur="";
    secs.forEach(s=>{if(window.scrollY>=s.offsetTop-80)cur=s.id;});
    links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+cur));
  },{passive:true});
})();

/* ── CONTACT FORM ────────────────────────────────────────── */
document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  if(!this.checkValidity()){this.classList.add("was-validated");return;}
  const btn=this.querySelector("button[type=submit]"), fb=document.getElementById("formFeedback");
  btn.disabled=true; btn.innerHTML=`<span class="spinner-border spinner-border-sm me-2"></span>Sending…`;
  setTimeout(()=>{
    fb.className="mt-3 alert alert-success";
    fb.textContent="✓ Message sent! I'll get back to you soon.";
    this.reset(); this.classList.remove("was-validated");
    btn.disabled=false; btn.innerHTML=`<i class="bi bi-send me-2"></i>Send Message`;
  },1400);
});

