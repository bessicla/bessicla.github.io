(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);

 $(document).ready(function() {
       $(".item").shuffle();
 });

$(window).ready(function () {
    $( "body" ).animate({
    opacity: 1,
  }, 400);
});

$(function() {  

      // To keep track of how many images have loaded
    var loaded = 0;

      // Let's retrieve how many images there are
    var numImages = $("img").length;

      // Let's bind a function to the loading of EACH image
    $("img").load(function() {

          // One more image has loaded
        ++loaded;

          // Only if ALL the images have loaded
        if (loaded === numImages) {

              $( "#grid" ).animate({
    opacity: 1,
  }, 400);
         
        }
    });
});

