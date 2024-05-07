import Swiper, { Pagination } from 'swiper';

const testimonialsNodes = document.querySelectorAll('.testimonials__slider');
testimonialsNodes.forEach(el => {
  if (el) {
    new Swiper(el, {
      modules: [Pagination],

      wrapperClass: 'testimonials__wrapper',
      slideClass: 'testimonials__slide',

    
      spaceBetween: 21,
      speed: 1200,
      loop: true,
      loopPreventsSlide: 4,

      pagination: {
        el: '.testimonials__pagination',
        clickable: true,
      },

      breakpoints: {
        0: {
          spaceBetween: 10,
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 1.7,
        },
        992: {
          spaceBetween: 21,
          slidesPerView: 2.2,
        },
        1170: {
          spaceBetween: 21,
          slidesPerView: 2.8,
        },
        1400: {
          spaceBetween: 21,
          slidesPerView: 3.2,
        },
      },
    });
  }
});
