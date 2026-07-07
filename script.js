// Таймер до свадьбы

const weddingDate = new Date("2026-08-28T16:00:00");

function updateTimer(){

const now = new Date();

const diff = weddingDate - now;

if(diff <= 0){
document.getElementById("timer").innerHTML = "Сьогодні наш день ❤️";
return;
}

const days = Math.floor(diff / (1000*60*60*24));
const hours = Math.floor((diff/(1000*60*60))%24);
const minutes = Math.floor((diff/(1000*60))%60);
const seconds = Math.floor((diff/1000)%60);

document.getElementById("timer").innerHTML =
`${days} днів ${hours} год ${minutes} хв ${seconds} сек`;

}

setInterval(updateTimer,1000);

updateTimer();
