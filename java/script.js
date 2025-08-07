document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul.menu');
  const submenuItems = document.querySelectorAll('.has-submenu');
  const iconHamburger = document.querySelector('.icon-hamburger');
  const iconClose = document.querySelector('.icon-close');

  // Toggle menú principal
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    const isActive = menu.classList.contains('active');
    iconHamburger.style.display = isActive ? 'none' : 'inline';
    iconClose.style.display = isActive ? 'inline' : 'none';
  });

  // Toggle submenús en móvil
  submenuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      if (window.innerWidth <= 360) {
        e.preventDefault();

        submenuItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('open');
            const submenu = i.querySelector('.submenu');
            if (submenu) submenu.style.display = 'none';

            const arrowIcon = i.querySelector('.arrow-icon svg');
            if (arrowIcon) {
              arrowIcon.innerHTML = `<path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>`;
              arrowIcon.setAttribute('fill', '#FFFFFF');
            }
          }
        });

        item.classList.toggle('open');
        const submenu = item.querySelector('.submenu');
        const arrowIcon = item.querySelector('.arrow-icon svg');

        if (item.classList.contains('open')) {
          submenu.style.display = 'block';
          arrowIcon.innerHTML = `<path d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/>`;
          arrowIcon.setAttribute('fill', 'rgb(248, 211, 0)');
        } else {
          submenu.style.display = 'none';
          arrowIcon.innerHTML = `<path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>`;
          arrowIcon.setAttribute('fill', '#FFFFFF');
        }
      }
    });
  });
});