$(document).ready(function() {

    $(window).scroll(function() {
        // Make navbar fixed after scrolling down 280 px
        if ($(window).scrollTop() > 280) {
            $('.navbar').addClass('navbar-fixed');
            $('.content').addClass('below-fixed-navbar');
        }
        if ($(window).scrollTop() < 281) {
            $('.navbar').removeClass('navbar-fixed');
            $('.content').removeClass('below-fixed-navbar');
        }
    });
});