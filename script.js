// Таймер

const weddingDate = new Date("2026-08-28T14:30:00");

function updateTimer() {
  const timer = document.getElementById("timer");
  if (!timer) return;

  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    timer.innerHTML = "Сьогодні наш день ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML =
    `${days} днів ${hours} год ${minutes} хв ${seconds} сек`;
}

setInterval(updateTimer, 1000);
updateTimer();


// Появление блоков при прокрутке

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card").forEach(card => {

  card.style.opacity = "0";

  card.style.transform = "translateY(40px)";

  card.style.transition = "1s";

  observer.observe(card);

});
