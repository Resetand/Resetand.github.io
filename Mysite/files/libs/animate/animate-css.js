//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {	
				if (dir === "down") {
					ths.toggleClass(inEffect).css("opacity", "1");
					
				};
				if (dir === "up") {
					ths.removeClass(inEffect).css("opacity", "0");
				};
			}, {
				offset: "100%"
			});

		});
	};

})(jQuery);