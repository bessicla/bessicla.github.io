/*jslint browser: true*/
/*global $*/

$(document).ready(function () {

    var images = [
                "logogif/logo1.gif",
                "logogif/logo2.gif",
                "logogif/logo3.gif",
                "logogif/logo4.gif"
            ];

    function randImg() {
        var size = images.length
        var x = Math.floor(size * Math.random())
        document.getElementById('image').src = images[x];
    }

    randImg();
});


$(document).ready(function () {

    $('.checkbox-switch input').change(function () {
        if ($(this).prop('checked')) {
            $(".checkbox-switch input").prop('checked', false);
            $(this).prop('checked', true);
        }
    });




    $('#filterOptions li a').click(function () {
        // fetch the class of the clicked item
        var ourClass = $(this).attr('class');

        // reset the active class on all the buttons
        $('#filterOptions li').removeClass('active');
        // update the active state on our clicked button
        $(this).parent().addClass('active');

        if (ourClass == 'all') {
            // show all our items
            $('#filtered').children('div.item').show();
        } else {
            // hide all elements that don't share ourClass
            $('#filtered').children('div:not(.' + ourClass + ')').hide();
            // show all elements that do share ourClass
            $('#filtered').children('div.' + ourClass).show();
        }
        return false;
    });
});