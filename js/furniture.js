$(document).ready(function () {

    (function ($) {
        "use strict";

        /*------------------------------    
        NiceScroll
        ------------------------------*/
        $("html,.cartTable").niceScroll({
            cursorcolor: "#293133",
            cursorborderradius: "0",
            cursorborder: "0 solid #fff",
            cursorwidth: "10px",
            zindex: "999999",
            scrollspeed: 60
        });
        $('#mainNav').niceScroll({
            cursorcolor: "#293133",
            cursorborderradius: "0",
            cursorborder: "0 solid #fff",
            cursorwidth: "10px",
            zindex: "999999",
            scrollspeed: 60
        });

        /*------------------------------    
        Go Top
        ------------------------------*/
        $('a[href="#top"]').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false
        });

        /*------------------------------    
        Shortcodes
        ------------------------------*/
        $('span[data-toggle="tooltip"]').tooltip();
        $('span[data-toggle="tooltip"][data-placement="top"]').tooltip('show');

        /*------------------------------    
        Search Filter
        ------------------------------*/
        $('.searchFilters .dropdown-menu').find('a').click(function (e) {
            e.preventDefault();
            var param = $(this).attr("href").replace("#", "");
            var concept = $(this).text();
            $('.searchFilters span#searchFilterValue').text(concept);
            $('.input-group #search_param').val(param)
        });

        /*------------------------------    
        Partner And Testimonial
        ------------------------------*/
        $('.ptTabNavs').on('click', '.prevTab', function () {
            $('.ptTab_nav > .active').prev('li').find('a').trigger('click')
        });

        $('.ptTabNavs').on('click', '.nextTab', function () {
            $('.ptTab_nav > .active').next('li').find('a').trigger('click')
        });

        /*------------------------------    
        Gallery Slider
        ------------------------------*/
        $('.featureCats').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true
                }
            }
        });

        /*----------------------------------------------------*/
        /*  Count Up
        /*----------------------------------------------------*/
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });

        /*----------------------------------------------------*/
        /*  Spinner
        /*----------------------------------------------------*/
        $('.spinner .btn:first-of-type').on('click', function () {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
        });
        $('.spinner .btn:last-of-type').on('click', function () {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
        });

        /*----------------------------------------------------*/
        /*  Shipping Address
        /*----------------------------------------------------*/
        $('#shippingAddressEscape').on('click', function () {
            var isChecked = $('#shippingAddressEscape').is(':checked');
            if (isChecked)
                $("#shippingAddress").find(':input').attr('disabled', 'disabled');
            else
                $("#shippingAddress").find(':input').removeAttr('disabled', 'disabled')
        });

        /*------------------------------    
        Team Member Slider
        ------------------------------*/
        $('.ourTeamSlide').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true
                }
            }
        })

    })(jQuery)
});

$(window).load(function () {

    /*------------------------------    
    Sinlge Prodcut Slider
    ------------------------------*/
    $('#productImageSliderNav').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        directionNav: true,
        slideshow: false,
        itemWidth: 130,
        itemMargin: 10,
        asNavFor: '#productImageSlider',
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
    });

    $('#productImageSlider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        directionNav: false,
        slideshow: false,
        sync: "#productImageSliderNav"
    });

    /*------------------------------    
    Main Slider
    ------------------------------*/
    $('.sliderCont').flexslider({
        animation: "fade",
        // Primary Controls
        controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: '<i class="fa fa-angle-left"></i>', //String: Set the text for the "previous" directionNav item
        nextText: '<i class="fa fa-angle-right"></i>', //String: Set the text for the "next" directionNav item
    });
    $('.sliderCont2').flexslider({
        animation: "fade",
        // Primary Controls
        controlNav: "thumbnails", //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: '<i class="fa fa-angle-left"></i>', //String: Set the text for the "previous" directionNav item
        nextText: '<i class="fa fa-angle-right"></i>', //String: Set the text for the "next" directionNav item
    })
});


// Accordion js
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});