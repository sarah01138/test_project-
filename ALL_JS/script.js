$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})
$(function(){
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function(){
      var i, stop;
      i = 1;
      stop = 4; //num elements
      setInterval(function(){
        if (i > stop){
          return;
        }
        $('#len'+(i++)).toggleClass('bounce');
      }, 500)
    });
  });




//   this is the testing
let closeForm = function() {
  let form = document.getElementById('contactForm');
  let open = true;
  
  form.style.display = "block";
  
  if(open == true){
  form.style.display = "none";
  open = false;
  } 
  }
// this is for testing
$(".mail-btn").on("click touchstart", function () {
  $(this).addClass("fly");
  that = this
  setTimeout(function() {
      $(that).removeClass("fly");
  }, 5400)
});