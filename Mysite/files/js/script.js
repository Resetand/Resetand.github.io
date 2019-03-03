
$(function() {	
	// Появление hidemenu
	$(".burger-box").on("click", function(){
		$('.burger').toggleClass("burger-js");
		$('.hiddenMenu').toggleClass("hiddenMenu-js");
	});
	
	// При наведении на карточку
	$('.work-card').hover(function(){
		$(this).find(".inCard").addClass('card-show');
	}, function(){
		$(this).find(".inCard").removeClass('card-show');
		$(this).find(".inCard").addClass('card-none');
	}
	);
	
	// Скрываем меню по клику на якорь
	$('.hiddenMenu-link').on('click', function(e){
		$('.hiddenMenu').removeClass('hiddenMenu-js');
		$('.burger').removeClass("burger-js");
	});
	
	// Popap окна
	$('#bear').on("click", function(Event){
		Event.preventDefault();
		$(".wrap-popup-1").addClass('popup-show');
	});
	$('#rabbit').on("click", function(Event){
		Event.preventDefault();
		$(".wrap-popup-2").addClass('popup-show');
	});



	$(".exit-popup").click(function (e) { 
		e.preventDefault();
		$(".wrap-popup").removeClass('popup-show');
	});
});



