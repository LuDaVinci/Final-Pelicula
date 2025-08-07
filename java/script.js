document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const iconHamburguesa = document.querySelector('.icon-hamburguesa');
  const iconCerrar = document.querySelector('.icon-cerrar');
  const menu = document.querySelector('nav ul.menu');
  const submenuItems = document.querySelectorAll('.has-submenu');

  // Mostrar/ocultar menú principal
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    const isOpen = menu.classList.contains('active');
    iconHamburguesa.style.display = isOpen ? 'none' : 'inline';
    iconCerrar.style.display = isOpen ? 'inline' : 'none';
  });

  // Funcionalidad submenús en móviles
  submenuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      if (window.innerWidth <= 360) {
        e.preventDefault();

        // Cerrar otros
        submenuItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('open');
            const submenu = i.querySelector('.submenu');
            if (submenu) submenu.style.display = 'none';
            const icon = i.querySelector('.arrow-icon svg');
            if (icon) {
              icon.innerHTML = `<path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>`;
              icon.setAttribute('fill', '#FFFFFF');
            }
          }
        });

        const isOpen = item.classList.toggle('open');
        const submenu = item.querySelector('.submenu');
        const icon = item.querySelector('.arrow-icon svg');

        if (submenu) submenu.style.display = isOpen ? 'block' : 'none';

        if (icon) {
          if (isOpen) {
            // Flecha arriba
            icon.innerHTML = `<path d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/>`;
            icon.setAttribute('fill', 'rgb(248, 211, 0)');
          } else {
            // Flecha abajo
            icon.innerHTML = `<path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>`;
            icon.setAttribute('fill', '#FFFFFF');
          }
        }
      }
    });
  });
});