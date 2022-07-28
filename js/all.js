$(document).ready(function () {
    $(".nav-mobile-menu").click(function (e) {
        e.preventDefault();
        $(".wrap").toggleClass("open");
    });
    $(".close").click(function (e) {
        e.preventDefault();
        $(".wrap").removeClass("open");
    });

    $(".goTop").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: 0
            }, 1000
        );
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $(".goTop").fadeIn(700);
        } else {
            $(".goTop").fadeOut(700);
        }
    });

});

