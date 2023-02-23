(function ($) {
    'use strict';
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        };
    });
    $(window).on('load', function () {
        $('.preloader-area').fadeOut();
    });
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    AOS.init({
        disable: function () {
            var maxWidth = 900;
            return window.innerWidth < maxWidth;
        }
    });
    $(".others-option-for-responsive .dot-menu").on("click", function () {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
    });
    $('.hero-slider2').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        thumbs: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
    });
    $('.courses-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        thumbs: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        }
    });
    $('.campus-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        thumbs: false,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        }
    });
    $('.campus-slider2').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        thumbs: false,
        dots: false,
        center: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        }
    });
    $('.events-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        thumbs: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        }
    });
    $('.news-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        thumbs: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        }
    });
    $('.health-care-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        thumbs: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        }
    });
    $(document).ready(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 100,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });


    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 500);
    });

})(jQuery);