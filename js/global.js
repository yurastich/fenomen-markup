$(document).ready(function () {

    var swiper = new Swiper('.b-first', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 3000,
        effect: "fade",
        loop: true,
        autoplay: 1
    });


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
