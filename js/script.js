// var
var userVictory = 1;

// code
$(document).ready(function () {

	console.log(userVictory);

	// toggle nav-mobile
	$(document).on('click', '.hamburger', function () {
		$('body').toggleClass('overflow-y-hidden');
		$('.nav-mobile').toggleClass('display-flex');
	});

});