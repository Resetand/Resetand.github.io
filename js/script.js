$(document).ready(function($) {	
	$("#search-window").on('click', function(event) {
		event.preventDefault();
		$("#submit-search").addClass('active-window')
	});
	$("#search-window").on('focusout', function(event) {
		event.preventDefault();
		$("#submit-search").removeClass('active-window')
	});
    $('.owl-carousel').owlCarousel({
            loop:true, //Зацикливаем слайдер
            margin:50, //Отступ от элемента справа в 50px
            nav:false, //Отключение навигации
            autoplay:true, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:10000, //Время смены слайда
           	items: 1,
    });

    $("#navbar").ready(function(){
        event.preventDefault();
        var id = $(this).attr('href')
        top = $(id).offset().top;
         $('body,html').animate({scrollTop: top}, 1500);
    })
    $("#submit-search").on('click', function(event) {
        event.preventDefault();
        $(this).addClass('click-on-button');
    });

});