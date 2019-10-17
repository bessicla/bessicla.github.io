$('.masonry').masonry({
    // options
    columnWidth: '.grid-sizer',
    itemSelector: '.cover',
    transitionDuration: 0,
    "percentPosition": true

});

$(window).on('load', function () {
    setTimeout(function () {
        $("#hideAll").fadeOut(1000)
    }, 1000);
     var w = window.outerWidth;
    $("#navbar").css("width", w );
    $("body").css("width", w ).css("overflow-x", "hidden" ).css("overflow-y", "auto" );
   
    
    
});


