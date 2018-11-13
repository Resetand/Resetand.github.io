$("#button-menu").on("click", function () {
  $(this).toggleClass('menu-hide'); 
  $(".fixed-menu").toggleClass("menu-trans");
});