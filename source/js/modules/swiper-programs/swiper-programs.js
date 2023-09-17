function initProgramsSwiper() {
  // eslint-disable-next-line no-undef
  let programsSwiper = new Swiper('.programs__swiper', {
    // Буллеты пагинации (кликабельные)
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.programs__navigation-button--next',
      prevEl: '.programs__navigation-button--prev',
    },
    watchSlidesProgress: true,
    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    allowTouchMove: true,
    breakpoints: {
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });

  return programsSwiper;
}

export {initProgramsSwiper};
