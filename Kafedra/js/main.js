$(document).ready(function(){$(".drop-item__top").hover(function(){$(this).parent().toggleClass("drop-item_hover")}),$(".drop-item__top").on("click",function(){hidden=$(this).next();var par=$(this).parent();$(this).parent().find(".drop-item__arrow");"none"==hidden.css("display")?(hidden.slideDown(330),par.addClass("drop-item_act")):(hidden.slideUp(330),par.removeClass("drop-item_act"))}),$(".mnu-burger").on("click",function(){$(".overlay_menu").on("click",function(){$("html, body").removeClass("no-scroll"),$(".mnu-burger").removeClass("burger_active"),$(".overlay_menu").removeClass("overlay_menu_active"),$(".hidden-mnu").removeClass("hidden-mnu_active")}),$("html, body").toggleClass("no-scroll"),$(this).toggleClass("burger_active"),$(".overlay_menu").toggleClass("overlay_menu_active"),$(".hidden-mnu").toggleClass("hidden-mnu_active")}),$("#searchEmpl").keyup(function(){var value=$(this).val();""!=value?$(".empl-cards .empl-card__name").each(function(index,elem){-1===$(elem).text().toLowerCase().search(value.toLowerCase())?$(elem).parent().parent().fadeOut(150):$(elem).parent().parent().fadeIn(150)}):$(".empl-cards .empl-card__name").each(function(index,elem){$(elem).parent().parent().fadeIn(100)})}),$(".gallery-tizer").css("height",Math.floor(+$(".gallery-tizer").width()/1.7)+"px"),$(window).resize(function(){var width=$(".gallery-tizer").width(),height=Math.floor(+width/1.7)+"px";console.log(height),$(".gallery-tizer").css("height",height)});$(".dropText").each(function(i,el){if(1100<$(el).text().length){var text=$(this).html(),showPart=text.substring(0,1100),hidePart=text.substring(1100);$(this).html(showPart+"..."),$(".showMore").on("click",function(){$(this).hide(0),$(el).html(text.substring(0,1100)),$(el).append("<span>"+hidePart+"</span>"),$(el).find("span").hide(0,function(){$(this).fadeIn(200)})})}}),$(".gallery-item").magnificPopup({type:"image",closeOnContentClick:!0,removalDelay:350,mainClass:"mfp-zoom-in",gallery:{enabled:!0},callbacks:{beforeChange:function(){this.items[0].src=this.items[0].src+"?="+Math.random()},open:function(){$.magnificPopup.instance.next=function(){var self=this;self.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){$.magnificPopup.proto.next.call(self)},120)},$.magnificPopup.instance.prev=function(){var self=this;self.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){$.magnificPopup.proto.prev.call(self)},120)}},imageLoadComplete:function(){var self=this;setTimeout(function(){self.wrap.addClass("mfp-image-loaded")},16)}}}),$(".slick-slider").slick({infinite:!0,speed:400,dots:!0}),$("#emplModal").modal("hide")});