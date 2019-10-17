/*jslint browser: true*/
/*global $*/


    var images = [
                "logogif/logo1.gif",
                "logogif/logo2.gif",
                "logogif/logo3.gif",
                "logogif/logo4.gif"
            ];

    function randImg() {
        var size = images.length
        var x = Math.floor(size * Math.random())
        document.getElementById('testa').src = images[x];
    };
$(document).ready(function () {
    randImg();
});


$(window).on('load', function () {
    setTimeout(function () {
        $("#hideAll").fadeOut(1000)
    }, 1000);   
    
});
