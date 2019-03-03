jQuery(document).ready(function($) {
	$("#button1").on('click', function(event) {
		event.preventDefault();
		$("#about-hiden-text").toggleClass('active-text');
		$(".about-photo").toggleClass('active-text-photo');
	});
	$("#bt-more-1").on('click', function(event) {
		event.preventDefault();
		$("#hiden-text-1").toggleClass('active-text');
	});
	$("#bt-more-2").on('click', function(event) {
		event.preventDefault();
		$("#hiden-text-2").toggleClass('active-text');
	});
	$("#bt-more-3").on('click', function(event) {
		event.preventDefault();
		$("#hiden-text-3").toggleClass('active-text');
	});
	$("#show-btn").on("click", function(event) {
		event.preventDefault();
		var row1 = ".gallery-hidden-row-1";
		var row2 = ".gallery-hidden-row-2";
		$(row1).toggleClass("active-row");
		$(row2).toggleClass("active-row");
	});
});