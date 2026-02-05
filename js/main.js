

(function () {
  'use strict';

  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      header.classList.toggle('nav-open', !isExpanded);
    });


    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
