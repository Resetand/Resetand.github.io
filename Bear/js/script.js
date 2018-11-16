jQuery(document).ready(function($) {
	$("#button1").on('click', function(event) {
		event.preventDefault();
		$("#about-hiden-text").slideToggle();
	});
	$("#bt-more-1").on('click', function(event) {
		event.preventDefault();
		$("#hiden-text-1").fadeIn(1000);
	});
	$("#bt-more-2").on('click', function(event) {
		event.preventDefault();
		$("#hiden-text-2").fadeIn(1000);
	});
	$("#bt-more-3").on('click', function(event) {
		event.preventDefault();
		$("#hiden-text-3").fadeIn(1000);
	});
	$("#show-btn").on("click", function(event) {
		event.preventDefault();
		$("#hidden-rows").slideToggle(1800);
		
	});
});