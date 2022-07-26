$(document).ready(function () {
    $(".nav-mobile-menu").click(function (e) { 
        e.preventDefault();
        $(".wrap").toggleClass("open");
    });
    $(".close").click(function (e) { 
        e.preventDefault();
        $(".wrap").removeClass("open");
    });
});

