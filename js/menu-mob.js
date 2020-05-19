$(document).ready(function () {
    $('.trigger').click(function () {
        $('#menumob').toggleClass('open');
    });
    $('.hyper').click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
        $('#menumob').toggleClass('open');
    });
});