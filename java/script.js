document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul.menu');
  const submenuItems = document.querySelectorAll('.has-submenu');
  const iconHamb = toggle.querySelector('.icon-hamburguesa');
  const iconClose = toggle.querySelector('.icon-cerrar');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    const isActive = menu.classList.contains('active');
    iconHamb.style.display = isActive ? 'none' : 'inline-block';
    iconClose.style.display = isActive ? 'inline-block' : 'none';
  });

  submenuItems.forEach(item => {
    const arrow = item.querySelector('.arrow-icon');

    arrow.addEventListener('click', (e) => {
      if (window.innerWidth <= 360) {
        e.preventDefault();
        e.stopPropagation(); // Para evitar navegar por el <a>

        const isOpen = item.classList.contains('open');

        submenuItems.forEach(i => {
          i.classList.remove('open');
          i.querySelector('.submenu').style.display = 'none';
          i.querySelector('.arrow-icon svg').innerHTML = `
            <path fill="#FFFFFF" d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>`;
        });

        if (!isOpen) {
          item.classList.add('open');
          const submenu = item.querySelector('.submenu');
          submenu.style.display = 'block';

          const icon = item.querySelector('.arrow-icon svg');
          icon.innerHTML = `
            <path fill="#f8d300" d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/>`;
        }
      }
    });
  });
});





  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".cards-carousel");
    const next = document.getElementById("nextCard");
    const prev = document.getElementById("prevCard");

    next.addEventListener("click", () => {
      carousel.scrollBy({ left: carousel.offsetWidth * 0.9, behavior: 'smooth' });
    });

    prev.addEventListener("click", () => {
      carousel.scrollBy({ left: -carousel.offsetWidth * 0.9, behavior: 'smooth' });
    });
  });