$(document).ready(function () {

    (function($){
        $(window).on("load",function(){
            $(".b-global-container").mCustomScrollbar();
        });
    })(jQuery);

    var swiper = new Swiper('.b-first', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
        keyboardControl: true
    });
    var galleryThumbs = new Swiper('.b-trumb-list-container', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
    });

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    $(".fancybox").fancybox({
        openEffect: "elastic",
        closeEffect:"elastic",
        nextEffect:"elastic",
        prevEffect:"elastic",
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

