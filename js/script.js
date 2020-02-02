// var
var userVictory = 1;

// code
$(document).ready(function() {
  
  console.log(userVictory);

  // toggle nav-mobile
  $(document).on('click touchend', '.hamburger', function() {
    $('body').toggleClass('overflow-hidden');
    $('.nav-mobile').toggleClass('display-flex');
  });

});
