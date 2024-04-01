import sliders from './modules/sliders.js';
import header from './modules/header.js';
import fslightbox from 'fslightbox';
import AOS from 'aos';
import MicroModal from 'micromodal';

function app() {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
  });
  AOS.init({
    once: true,
  });
}
document.addEventListener('DOMContentLoaded', app);
