$(function() {
  setTimeout(function() {
    const preloader = document.getElementById("preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 1000);

  setTimeout(function() {
    $("#preloader").fadeOut("slow", function() {});
  }, 1500);

  $("input[type=file], select").styler({
    locale: "en"
  });

  $(".product-slider__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".range__price-limit").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $(".reiteng-user").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $(".icon-th-list").on("click", function() {
    $(".addclass").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });

  $(".icon-th-large").on("click", function() {
    $(".addclass").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });

  $(".product-one__tab .tab").on("click", function(event) {
    var id = $(this).attr("data-id");
    $(".product-one__tab")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $(".product-one__tab .tabs")
      .find(".tab")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });

  $(".settings__wrapper .tab").on("click", function(event) {
    var id = $(this).attr("data-id");
    $(".settings__wrapper")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $(".settings__wrapper .tabs")
      .find(".tab")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });

  $(".profile-details__inner .tab").on("click", function(event) {
    var id = $(this).attr("data-id");
    $(".about__me-inner")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $(".profile-details__inner .tabs")
      .find(".tab")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });

  $(".menu__btn").on("click", function() {
    $(".menu__list").slideToggle();
  });

  $(".header__btn-menu").on("click", function() {
    $(".header__box").toggleClass("active");
  });

  $(".menu__btn").on("click", function() {
    $(".menu__btn").toggleClass("active");
  });
  $(".aside__btn").on("click", function() {
    $(".profile-details__aside, .aside__btn").toggleClass("active");
  });

  $("#menu, #menu2, #menu3, #menu4,#menu5").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("header,html").animate({ scrollTop: top }, 1000);
  });

  var mixer = mixitup(".propducts__inner-box");


});
// лепим header к верху страницы)))
// $(document).scroll(function() {
//   if ($(document).scrollTop() > $("header").height() +- 10)
//     $("header").addClass("fixed");
//   else
//     $("header").removeClass("fixed");
// });

// Прелепили header к верху страницы анемированый)))
var window_height = 200;
$(window).on("scroll load", function(event) {
  if ($(window).scrollTop() > window_height) {
    // $(".header").addClass("header-fixed");
  } else {
    // $(".header").removeClass("header-fixed");
    $(".header").removeClass("hide-menu");
  }
});
var lastScroll = 50;
$(window).on("scroll load", function(event) {
  var st = $(this).scrollTop();
  if (st > lastScroll) {
    $(".header").addClass("hide-menu");
    if ($(".nav-search").hasClass("hide") === false) {
      $(".nav-search").toggleClass("hide");
    }
  } else if (st < lastScroll) {
    $(".header").removeClass("hide-menu");
  }
  if ($(window).scrollTop() <= 100) {
    $(".header")
      // .removeClass(".header-fixed")
      .removeClass("hide-menu");
  } else if (
    $(window).scrollTop() < window_height &&
    $(window).scrollTop() > 0
  ) {
    $(".header").addClass("hide-menu");
  }
  lastScroll = st;
});
