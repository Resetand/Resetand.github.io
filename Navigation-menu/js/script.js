$(document).ready(function() {
    $(".hamburger-box").on("click", function () {
        $(".hamburger-inner").toggleClass('hamburger-click');
        $(this).toggleClass("btn-active");
        $(".hidden-nav").toggleClass("active-nav-menu")
    });
  })