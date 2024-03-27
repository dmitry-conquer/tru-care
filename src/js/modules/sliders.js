import Swiper, { Pagination } from 'swiper';

const initSliders = () => {
  const testimonials = document.querySelector('.testimonials__slider');
  if (testimonials) {
    new Swiper(testimonials, {
      modules: [Pagination],

      wrapperClass: 'testimonials__wrapper',
      slideClass: 'testimonials__slide',

      slidesPerView: 'auto',
      spaceBetween: 21,
      speed: 1200,

      pagination: {
        el: '.testimonials__pagination',
        clickable: true,
      },

      breakpoints: {
        320: {
          spaceBetween: 10,
          centeredSlides: true,
          centeredSlidesBounds: true,
        },
        992: {
          spaceBetween: 21,
        },
      },
    });
  }
};

export default initSliders;
