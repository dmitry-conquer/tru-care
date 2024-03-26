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

      // Breakpoints
      /*
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            576: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
         */
    });
  }
};

export default initSliders;
