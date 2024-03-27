import initSliders from './modules/sliders.js';
import header from './modules/header.js';
// import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import AOS from 'aos';
// import fslightbox from 'fslightbox';
// import MicroModal from 'micromodal';

function app() {
  initSliders();
  header();
  AOS.init({
    once: true,
  });
}
document.addEventListener('DOMContentLoaded', app);
