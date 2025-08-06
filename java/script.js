

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");

  toggle.addEventListener("click", () => {
    if (menu.style.display === "flex" || menu.style.display === "") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
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