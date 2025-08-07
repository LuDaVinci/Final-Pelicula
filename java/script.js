document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul.menu');
  const submenuItems = document.querySelectorAll('.has-submenu');
  const iconHamb = toggle.querySelector('.icon-hamburguesa');
  const iconClose = toggle.querySelector('.icon-cerrar');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    iconHamb.style.display = menu.classList.contains('active') ? 'none' : 'inline-block';
    iconClose.style.display = menu.classList.contains('active') ? 'inline-block' : 'none';
  });

  submenuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      if (window.innerWidth <= 360) {
        e.preventDefault();

        const isOpen = item.classList.contains('open');

        submenuItems.forEach(i => {
          i.classList.remove('open');
          i.querySelector('.submenu').style.display = 'none';
          i.querySelector('.arrow-icon svg').innerHTML = `
            <path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>`;
        });

        if (!isOpen) {
          item.classList.add('open');
          const submenu = item.querySelector('.submenu');
          submenu.style.display = 'block';

          const icon = item.querySelector('.arrow-icon svg');
          icon.innerHTML = `
            <path d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/>`;
        }
      }
    });
  });
});