$(document).ready(function () {

    // header color change
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 90) {
            $(".gototop").fadeIn(1000);
        }
        else {
            $(".gototop").fadeOut();
        }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 350) {
                $(".news_text").css("animation-play-state", "running");
                $(".news_box").css("animation-play-state", "running");
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 1250) {
                $(".about_skew_animation").css("animation-play-state", "running");
                $(".about_title").css("animation-play-state", "running");
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 2100) {
                $(".skew_animate").css("animation-play-state", "running");
                $(".service_pic .pic").css("animation-play-state", "running");
                $(".service_tilte").css("animation-play-state", "running");
                
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 3000) {
                $(".contect_animate").css("animation-play-state", "running");
                $(".container_title h1").css("animation-play-state", "running");
                $(".container_text").css("animation-play-state", "running");

            }
    });
    
    $('.gototop').click(function () {
        $('html,body').animate({
            scrollTop: $('html').offset().top
        });

    });


})
