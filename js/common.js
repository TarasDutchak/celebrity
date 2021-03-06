$(document).ready(function () {

    // language
    $('.header__language span').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('rotatearr');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__language').length) {
            $('.header__language ul').slideUp();
            $('.header__language > span').removeClass('rotatearr');
        }
    });

    // Slider
    $('.visitslider').slick({
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        pauseOnHover: false,
        autoplay: true,
        cssEase: 'ease-out',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    // right
    $('.celebrity-luxury, .genslsect, .articlesect__header').css('padding-right', paddingContainer)
    // left
    $('.spaceleft-container, .genslsect-container, .ournews-slider, .articlesect__headercontain').css('padding-left', paddingContainer);


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        // right
        $('.celebrity-luxury, .genslsect, .articlesect__header').css('padding-right', paddingContainer)
        // left
        $('.spaceleft-container, .genslsect-container, .articlesect__headercontain').css('padding-left', paddingContainer);
    });




    // slider
    var $status = $('.genslider .pagingInfo');
    var $slickElement = $('.genslider .mainslider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i + ' | 0' + slick.slideCount);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + ' | ' + slick.slideCount);
        }

    });

    $slickElement.slick({
        dots: false,
        infinite: true,
        speed: 2500,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 1200
    });

    // mouse icon

    $(".mousescroll").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    // SLY slider
    var $frame = $('#basic');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap = $frame.parent();

    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbar'),
        // scrollBy: 1,
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
    });

    // SLIDER CENTER MODe
    $('.slider-centermode').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        speed: 500,
        centerPadding: '20%',
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '16%',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0',
                }
            }
        ]
    });

    //   Reviews
    // SLY slider
    var $frame = $('#basic1');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap = $frame.parent();

    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbar'),
        // scrollBy: 1,
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
    });


    //  slider news
    $('.ournews-slidersect').slick({
        slidesToShow: 3.5,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        speed: 500,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]

    });

    //   to top

    $(function () {
        $('.footer__up a').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });



    // sly fix padding
    var slLeftWidth = $('.akcii .col-lg-8').width();
    $('.akcii .col-lg-8, .reviews .col-lg-8').css('max-width', slLeftWidth + paddingContainer + 25);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        var slLeftWidth = $('.akcii .col-lg-8').width();
        $('.akcii .col-lg-8, .reviews .col-lg-8').css('max-width', slLeftWidth + paddingContainer + 25);



    });


    // BURGER MENU
    $('.burgerbtn').click(function () {
        $('.header__nav').addClass('show');
    });

    $('.mobclose').click(function () {
        $('.header__nav').removeClass('show');
    });


    // SHOW REVIEWS FORM
    $('.reviewwrite__topsect .custombtn').click(function () {
        $(this).hide();
        $('.reviewwrite__bottsect').slideDown();
    });




    // VIDEO

    if ($('*').is('#play_button')) {
        var playButton = document.getElementById("play_button");
        // Event listener for the play/pause button
        playButton.addEventListener("click", function () {
            if (video.paused == true) {
                // Play the video
                video.play();

                // Update the button text to 'Pause'
                // playButton.innerHTML = "Pause";
                $(playButton).addClass('pause');
            } else {
                // Pause the video
                video.pause();

                // Update the button text to 'Play'
                // playButton.innerHTML = "Play";
                $(playButton).removeClass('pause');
            }
        });
    }



    // certificates slider


    var $statuscert = $('.certificates-slidersect .pagingInfo');
    var $slickElementcert = $('.certificates-slider');

    $slickElementcert.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statuscert.text('0' + i + ' | 0' + slick.slideCount);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statuscert.text(i + ' | ' + slick.slideCount);
        }

    });

    $slickElementcert.slick({
        centerMode: true,
        slidesToShow: 3,
        dots: false,
        infinite: true,
        speed: 2500,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 1200,
        centerPadding: '100px',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '16%',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '26%',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0%',
                }
            }
        ]
    });

    // mask
    $('#telnum').inputmask({
        "mask": "+ 99 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });

    //  select styled
    $(function () {
        $('select').styler();
    });

    // isotope filter
    // external js: isotope.pkgd.js


    // Init Isotope
    if ($(".grid").length) {
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer'
            }
        });
    }

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $('.filter-button-group button').click(function () {
        $('.filter-button-group button').removeClass('active');
        $(this).addClass('active');
    });




    // input type file

    (function() {
  
        'use strict';
      
        $('.input-file').each(function() {
          var $input = $(this),
              $label = $input.next('.js-labelFile'),
              labelVal = $label.html();
          
         $input.on('change', function(element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.sss').html(fileName) : $label.removeClass('has-file').html(labelVal);
         });
        });
      
      })();
    //   scroll to top - hide/show
      $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.footer__up').fadeIn();
        } else {
            $('.footer__up').fadeOut();
        }
    });
    


    // Partners

    $('.partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        speed: 500,
        infinite: true,
        dots: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });










});