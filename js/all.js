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
                $(".news_title").addClass("news_title_animation");
                $(".news_box").addClass("news_box_animation");
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 1000) {
                $(".skew_right").addClass("skew_right_animation");
                $(".about_title").addClass("about_title_animation");
                $(".skew_right_vido").addClass("skew_right_vido_ani");
                $(".about_title").addClass("about_title_animation");
                $(".about_text").addClass("about_text_animation");
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 2000) {
                $(".skew_left").addClass("skew_left_animation");
                $(".skew_left_pic").addClass("skew_left_pic_animation");
                $(".service_text").addClass("service_text_animation");

            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 3000) {
                $(".skew_right_contect").addClass("skew_right_contect_ani");
                $(".skew_right_map").addClass("skew_right_map_ani");
                $(".contect_text").addClass("contect_text_animation");

            }
    });
    
    $('.gototop').click(function () {
        $('html,body').animate({
            scrollTop: $('html').offset().top
        });

    });
    $('.content_icon').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 1000
        }, 1000);
    });


})
