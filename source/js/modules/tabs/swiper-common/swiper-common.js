function initCommonSwiper() {
  // eslint-disable-next-line no-undef
  let programsSwiper = new Swiper('.common__swiper', {
    // Буллеты пагинации (кликабельные)
    navigation: {
      nextEl: '.common__navigation-button--next',
      prevEl: '.common__navigation-button--prev',
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

export {initCommonSwiper};
