AOS.init({ startEvent: 'load' });
$(function($) {
    "use strict";

    var loc = window.location.pathname;
    var dir = loc.substring(1, loc.lastIndexOf('/'));

    //product vape slider//
    $('#homeSlider').carousel({
        interval: 9000,
        pause: null
    });
    $('#product-slider .carousel, #parts').carousel({
        interval: 6000,
    });

    $('#testimonials .carousel, #power').carousel({
        interval: false
    });
  
    //swipe
    $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');

        },
        allowPageScroll: "vertical"

    });
    
    if ($(".counter")[0]) {
        //counter
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }
    //if desktop
    if ($('html').hasClass('no-touch')) {
        if ($("#testimonials .carousel")[0]) {
            //testimonial bg move on event//
            $('#testimonials .carousel').bind('slide.bs.carousel', function(e) {
                var $bg = $('#testimonials');
                var currentPos = $bg.css('background-position');

                if (e.direction == 'left' && currentPos != '50% 100%') {
                    $bg.animate({
                        backgroundPosition: 'center +=25%'
                    }, 0);
                }
                if (e.direction == 'right' && currentPos != '50% 0%') {
                    $bg.animate({
                        backgroundPosition: 'center -=25%'
                    }, 0);
                }

            })
        }
        //parallax
        if ($("#disengage")[0]) {
            var s = skrollr.init({
                smoothScrolling: true,
                forceHeight: false,
                easing: {
                    frames: function(p) {
                        return Math.round(Math.sin(p) * 35);
                    }
                }
            });
        } else {
            var s = skrollr.init({ forceHeight: false });

        }
    }

    $('#parts i.moon-icon-zoom-in').click(function() {
        $("#parts").clone().appendTo("#zoomed .container");
        $("#zoomed .container #parts").attr('id', 'partsZoom');
        $("#zoomed a[data-slide]").attr('href', '#partsZoom');
        $("#zoomed .carousel-indicators").remove();
        $("#zoomed").fadeIn();
    });
    $('#zoomed i.moon-icon-close').click(function() {
        $('#zoomed').fadeOut();
        $('#zoomed').find('.container').html('');
    });

    //download pdf
    $('ul.tab li').click(function() {
        if ($(this).data('prod') == 'l6') {
            var tab = $(this).data('tab-class');
            if (tab == '.l6-glass') {
                $('#parts').html($('#glassSlides').html());
                $('#feats').html($('#glassFeats').html());

            }
            if (tab == '.l6-reg') {
                $('#parts').html($('#regSlides').html());
                $('#feats').html($('#regFeats').html());

            }
            if (tab == '.l6-septum') {
                $('#parts').html($('#septumSlides').html());
                $('#feats').html($('#septumFeats').html());

            }
            $('ul.tab li').removeClass('active');
            $(this).addClass('active');


            $('#parts i.moon-icon-zoom-in').click(function() {
                $("#parts").clone().appendTo("#zoomed .container");
                $("#zoomed .container #parts").attr('id', 'partsZoom');
                $("#zoomed a[data-slide]").attr('href', '#partsZoom');
                $("#zoomed .carousel-indicators").remove();
                $("#zoomed").fadeIn();
            });
            $('#zoomed i.moon-icon-close').click(function() {
                $('#zoomed').fadeOut();
                $('#zoomed').find('.container').html('');
            });

        }else if ($(this).data('prod') == 'lx'){
            var tab = $(this).data('tab-class');
            if (tab == '.lx-glass') {
                $('#parts').html($('#glassSlides').html());
                $('#feats').html($('#glassFeats').html());

            }
            if (tab == '.lx-reg') {
                $('#parts').html($('#regSlides').html());
                $('#feats').html($('#regFeats').html());

            }
            $('ul.tab li').removeClass('active');
            $(this).addClass('active');


            $('#parts i.moon-icon-zoom-in').click(function() {
                $("#parts").clone().appendTo("#zoomed .container");
                $("#zoomed .container #parts").attr('id', 'partsZoom');
                $("#zoomed a[data-slide]").attr('href', '#partsZoom');
                $("#zoomed .carousel-indicators").remove();
                $("#zoomed").fadeIn();
            });
            $('#zoomed i.moon-icon-close').click(function() {
                $('#zoomed').fadeOut();
                $('#zoomed').find('.container').html('');
            });
        } else {
            var tab = $(this).data('tab-class');
            $('ul.tab li').removeClass('active');
            $('.prod-tab').hide();
            $(this).addClass('active');
            $(tab).show();
        }
    });
    $('ul.tab-pow li').click(function() {
        var powTab = $(this).data('tab-class');
        $('ul.tab-pow li').removeClass('active');
        $('.pow-tab').hide();
        $(this).addClass('active');
        $(powTab).show();
    });


});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("sticky-nav");
    } else {
        $(".navbar-fixed-top").removeClass("sticky-nav");
    }
});
//spinner
$(window).on('load', function() {
    $("#status").delay(800).fadeOut();
    $("#preloader").delay(800).fadeOut("slow");
});