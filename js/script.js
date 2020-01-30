// var
var userVictory = 1;

// code
$(document).ready(function() {
  console.log(userVictory);

  $(document).on('click touchend', '.hamburger', function() {
    $('.nav-mobile').toggleClass('display-flex');
  });

});
