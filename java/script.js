
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul.menu');
  const submenuItems = document.querySelectorAll('.has-submenu');

  // Evento para mostrar/ocultar el menú principal en móviles
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Evento para desplegar/cerrar submenús y cambiar flechas
  submenuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      // Solo activa esta lógica en móviles (360px o menos)
      if (window.innerWidth <= 360) {
        e.preventDefault(); // Evita seguir el enlace
        
        // Opcional: cerrar otros submenús
        submenuItems.forEach(i => {
          if (i !== item) i.classList.remove('open');
        });

        item.classList.toggle('open');

        const submenu = item.querySelector('.submenu');
        submenu.style.display = item.classList.contains('open') ? 'block' : 'none';

        const icon = item.querySelector('.arrow-icon svg');

        if (item.classList.contains('open')) {
          // Flecha hacia arriba (amarilla)
          icon.innerHTML = `<path d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/>`;
          icon.setAttribute('fill', 'rgb(248, 211, 0)');
        } else {
          // Flecha hacia abajo (blanca)
          icon.innerHTML = `<path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>`;
          icon.setAttribute('fill', '#FFFFFF');
        }
      }
    });
  });
});

