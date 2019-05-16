wow = new WOW(
	{
	boxClass:     'wow',      // default
	animateClass: 'animated', // default
	offset:       70,          // default
	mobile:       false,       // default
	live:         true        // default
  }
  )

new WOW().init();
$(document).ready(function() {
	
	$('.burger').on('click', function () {
		$(this).toggleClass('bg-active');
		$('.hidden-mnu').toggleClass('hidden-mnu-active');
		$("html,body").toggleClass('act-over-hid');
	});
	var scroll = anime({
		targets: '.scroll-icon .fa',
		translateY: 20,
		loop: true
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300)  {                  
			 $(".scroll").fadeOut();
	   }  
	   else{
		$(".scroll").fadeIn();
	   }
	});		
	
});