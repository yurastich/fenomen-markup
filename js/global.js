$(document).ready(function () {

  $(window).on("load", function () {
    $(".b-global-container").mCustomScrollbar({
      keyboard: {
        enable: true
      }
    });
    $(".b-scroll").mCustomScrollbar();
  });

  var swiper = new Swiper('.b-first', {
    parallax: true,
    speed: 3000,
    effect: "fade",
    loop: true,
    autoplay: 1
  });

  var galleryTop = new Swiper('.b-photo-list-container', {
    nextButton: '.js-arrow-right',
    prevButton: '.js-arrow-left',
    effect: "fade",
    spaceBetween: 10,
    keyboardControl: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
  });

  $(".fancybox").fancybox({
    openEffect: "elastic",
    closeEffect: "elastic",
    nextEffect: "elastic",
    prevEffect: "elastic",
  });

  var num = 0;

  var detailNum = function () {
    var men = $(".js-men-num"),
        stock = $(".js-stock-num"),
        stockText = (stock.text()) * 1;

    function Random() {
      num = Math.floor((Math.random() * (stockText + 20)) + 1);

      return num
    }

    function Scl() {
      Random();
      if (num > stockText) {
        men.text(num);
      } else {
        Scl();
      }
    }

    Scl();
    
  };

  $('.e-zoom-img').magnify({
    speed: 200,
  });


  detailNum();

  $(window).resize(function () {


  });

  $(window).load(function () {

  });

  $(window).scroll(function () {
    var scr = $(window).scrollTop(),
      screenHeight = $(window).height(),
      screenWidth = $(window).width();
    // scroll();

  });




});

