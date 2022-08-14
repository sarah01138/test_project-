$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scroll()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').addClass('black');
    }
})