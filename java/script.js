

const toggleBtn = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul.menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const totalCards = carousel.children.length;
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = totalCards - 1;
  if (currentIndex >= totalCards) currentIndex = 0;

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}