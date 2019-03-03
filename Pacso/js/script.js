$(document).ready(function () {
    // alert("Привет, я учусь верстке. Ты попал на абсолютно статичный сайт. Здесь ничего не работет, зато красиво и в теории, можно масштабировать сайт, прописав back-end на php")
    $(".white-btn").on("click", function() {
    $(".white-btn").removeClass('white-btn-active');
    $(this).addClass('white-btn-active');
    });

    $(".post-duts-menu").on("click", function(){
        $(this).find(".duts-menu-hidden").slideToggle(200);

    });
    $(".duts-option").on("click", function(){
        alert("Даже не надейся - это просто же статичная верстка ;)")
    });
    $(".post-video").before().on("click", function(){
        alert("Даже не надейся - это просто же статичная верстка ;)")
    });
}); 