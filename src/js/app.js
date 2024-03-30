import sliders from './modules/sliders.js';
import header from './modules/header.js';
import fslightbox from 'fslightbox';
// import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import AOS from 'aos';
// import MicroModal from 'micromodal';

function app() {
  AOS.init({
    once: true,
  });
}
document.addEventListener('DOMContentLoaded', app);
