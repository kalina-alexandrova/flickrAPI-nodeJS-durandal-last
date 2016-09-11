jQuery(document).ready(function($) {
    $("img.lazy").lazyload({
        event: "sporty"
    });
});
$(window).bind("load", function() {
    var timeout = setTimeout(function() {
        $("img.lazy").trigger("sporty")
    }, 5000);

})
