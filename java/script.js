const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const submenuItems = document.querySelectorAll('.has-submenu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

submenuItems.forEach(item => {
  const arrow = item.querySelector('.arrow-icon');

  arrow.addEventListener('click', function (e) {
    if (window.innerWidth <= 360) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains('open');

      submenuItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.submenu').style.display = 'none';
        i.querySelector('.arrow-icon svg').innerHTML =
          '<path fill="#FFFFFF" d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/>';
      });

      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.submenu').style.display = 'block';
        item.querySelector('.arrow-icon svg').innerHTML =
          '<path fill="#f8d300" d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/>';
      }
    }
  });
});