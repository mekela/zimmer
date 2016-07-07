$(document).ready(function() {
	$( ".main-nav-trigger" ).click(function() {
	  $( ".main-nav ul" ).slideToggle("slow");
	  $( ".main-nav-trigger-icon" ).toggleClass("active");
	});
});