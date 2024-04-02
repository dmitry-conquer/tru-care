import { isMobile } from '../functions.js';

const burgerButton = document.getElementById('burger-button');
const headerMenu = document.getElementById('header-nav');
const hasChildrenItems = document.querySelectorAll('.menu-item-has-children');
hasChildrenItems.forEach(item => {
  item &&
    item.addEventListener('click', () => {
      if (window.innerWidth < 1200 && isMobile.any()) {
        item.classList.toggle('is-open');
        const menu = item.querySelector('ul');
        menu.style.maxHeight = null;
        menu.style.maxHeight = item.classList.contains('is-open') ? `${menu.scrollHeight}px` : null;
      } else if (window.innerWidth >= 1200 && isMobile.any()) {
        hasChildrenItems.forEach(item => {
          item.classList.remove('is-open-pc');
        });
        item.classList.toggle('is-open-pc');
      }
    });
});
burgerButton &&
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-open');
    headerMenu.classList.toggle('is-open');
    document.body.style.overflow = headerMenu.classList.contains('is-open') ? 'hidden' : 'visible';
  });

document.body.addEventListener('click', e => {
  if (!e.target.closest('.menu-item-has-children')) {
    hasChildrenItems.forEach(item => {
      item.classList.remove('is-open-pc');
    });
  }
});
