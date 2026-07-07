// ======================
// Таймер
// ======================

const weddingDate = new Date("2026-08-28T14:30:00");

function updateTimer(){

const now = new Date();

const diff = weddingDate - now;

if(diff<=0){

days.textContent=0;
hours.textContent=0;
minutes.textContent=0;
seconds.textContent=0;

return;

}

days.textContent=Math.floor(diff/1000/60/60/24);

hours.textContent=Math.floor(diff/1000/60/60)%24;

minutes.textContent=Math.floor(diff/1000/60)%60;

seconds.textContent=Math.floor(diff/1000)%60;

}

setInterval(updateTimer,1000);

updateTimer();



// ======================
// Появление карточек
// ======================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card").forEach(card=>observer.observe(card));



// ======================
// Блестки в конце страницы
// ======================

let started=false;

window.addEventListener("scroll",()=>{

const percent=(window.scrollY+window.innerHeight)/document.body.scrollHeight;

if(percent>0.88 && !started){

started=true;

setInterval(createSparkle,220);

}

});

function createSparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*window.innerWidth+"px";

s.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},6000);

}
