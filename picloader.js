

$(document).ready(function () {
    
    var index = 1;
    var folder = $("#folder").text();
    var tempImg = new Image();
    tempImg.onload = function () {
        appendImage();
    }
    var tryLoadImage = function (index) {
        tempImg.src = 'works/' + folder + '/' + index + '.png';
    }
    var appendImage = function () {

        $("<img />").attr('src', 'works/' + folder + '/' + index + '.png').attr('class', "cover").appendTo(".masonry");
        $('img').on('error', function(){
            $(this).remove().ready(function () {

                $('.masonry').masonry({
                    // options
                    columnWidth: '.cover',
                    itemSelector: '.cover',
                    transitionDuration: 0,
                    "percentPosition": true

                });
                setTimeout(function () {
        $("#hideAll").fadeOut(1000)
    }, 1000);
            });
        });
        tryLoadImage(index++)
    }

    tryLoadImage(index);
});


$(window).on('load', function () {
     var w = window.outerWidth;
    $("#navbar").css("width", w );
    $("body").css("width", w ).css("overflow-x", "hidden" ).css("overflow-y", "auto" );
   
    
    
});


