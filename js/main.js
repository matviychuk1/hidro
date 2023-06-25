$(function(){
    $('.banner-section-slider').slick({
        dots: true,
        nextArrow: '<button class="banner-section-slider-btn banner-section-slider-btnprev"> <img src="img/arrow-right.svg" alt="">       </button>',
        prevArrow: '<button class="banner-section-slider-btn banner-section-slider-btnnext"> <img src="img/arrow-left.svg" alt="">       </button>',
            responsive: [
            {
                breakpoint: 961,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition')
    });

    $('.product-item-favourite').on('click', function(){
        $('.this').toggleClass('.product-item-favourite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider-slider-btn product-slider-slider-btnnext"> <img src="img/arrow-black-right.svg" alt="">       </button>',
        nextArrow: '<button class="product-slider-slider-btn product-slider-slider-btnprev"> <img src="img/arrow-black-left.svg" alt="">       </button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
                {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
                {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
                {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    $('.filter-style').styler()

    $('.filter-item-drop, .filter-extra').on('click', function() {
        $(this).toggleClass('filter-item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000
    });

    $('.catalog-filter-btngrid').on('click', function(){
        $(this).addClass('catalog-filter-button--active');
        $('catalog-filter-btnline').removeClass('catalog-filter-button--active');
        $('.product-item-wrapper').removeClass('product-item-wrapper--list');

    });

    $('.catalog-filter-btnline').on('click', function(){
        $(this).addClass('catalog-filter-button--active');
        $('catalog-filter-btngrid').removeClass('catalog-filter-button--active');
        $('.product-item-wrapper').addClass('product-item-wrapper--list');
    })

    $(".rate-yo").rateYo({
        multiColor: {
            "startColor": "#ff0000",
            "endColor": "#00ff00"
        },
            spacing: "7px",
            normalFill: "#c4c4c4"
    });

    $('.menu-btn').on('click', function(){
        $('.menu-mobile-list').toggleClass('menu-mobile-list--active')
    });

    $('.footer-topdrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer-topdrop-active');
    })

    $('.aside-btn').on('click', function(){
        $(this).next().slideToggle();
    })

});