import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

import {initIntroSwiper} from './modules/swiper-intro/swiper-intro';
import {initProgramsSwiper} from './modules/swiper-programs/swiper-programs';
import {initTabs} from './modules/tabs/init-tabs';
import {initCommonSwiper} from './modules/tabs/swiper-common/swiper-common';
import {initAccordions} from './modules/accordion/init-accordion';
import {initReviewsSwiper} from './modules/swiper-reviews/swiper-reviews';
import {initLeaflet} from './modules/leaflet/init-leaflet';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  initIntroSwiper();


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initProgramsSwiper();
    initTabs();
    initCommonSwiper();
    initAccordions();
    initReviewsSwiper();
    initLeaflet();

    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
