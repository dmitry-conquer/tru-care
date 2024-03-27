const header = () => {
  const burgerButton = document.getElementById('burger-button');
  const headerMenu = document.getElementById('header-nav');
  const hasChildrenItems = document.querySelectorAll('.menu-item-has-children');
  hasChildrenItems.forEach(item => {
    item &&
      item.addEventListener('click', e => {
        if (window.innerWidth < 1200) {
          item.classList.toggle('is-open');
          const menu = item.querySelector('ul');
          menu.style.maxHeight = null;
          menu.style.maxHeight = item.classList.contains('is-open') ? `${menu.scrollHeight}px` : null;
          console.log(menu);
        }
      });
  });
  burgerButton &&
    burgerButton.addEventListener('click', () => {
      burgerButton.classList.toggle('is-open');
      headerMenu.classList.toggle('is-open');
      document.body.style.overflow = headerMenu.classList.contains('is-open') ? 'hidden' : 'visible';
    });
};

export default header;
