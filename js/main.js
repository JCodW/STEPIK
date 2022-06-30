$(document).ready(function () {
  /* Плавная прокрутка меню */
  $('nav a[href^="#"]').click(function () {
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
    $('nav a[href^="#"]').parent().removeClass("active");
    $(this).parent().addClass("active");
    $(".menu-mobile .menu").toggle(500);
    $(".menu-burger").toggleClass("close");
    return false;
  });
  /* Мобильное меню */
  $(".menu-burger").click(function () {
    $(".menu-mobile .menu").toggle(500);
    $(this).toggleClass("close");
  });
});
