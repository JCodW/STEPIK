const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,


  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});
