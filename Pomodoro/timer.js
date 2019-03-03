
// Объявим переменные
var time = 1500000,
    data = new Date().getTime();
    timeNow = time,
    start = false,
    stop = false,
    timeRest = 300000,
    counter = 0;

// Конвентирует значение в мс для пользователя
function convertForUser(ms){
    var min = Math.floor((ms/1000)/60);
    var sec = Math.floor(ms/1000)%60;
    if (sec < 10){
        return (min + ":" + '0' + sec);
    }
    else{
        return (min + ":" + sec);
    }
}
$('#time').html(convertForUser(time)); // выводим дефолтное значениея



// Переводим в мс и одновременно проверяем правильность введенных данных
function convertToMS(minute,second){
    if (isNaN(minute) === false && isNaN(second) === false && minute >= 0 && second >= 0){
        inMin = +minute*60000;
        inSec = +second*1000;
        return (inMin + inSec);
    }
    else{
        alert('Try again, please'); // Действия при неправильнно введенных данных
        return 0;
    }
}
function  pause(){
    $('#time').html(convertForUser(timeNow));  
}
function timer(){
    var dataBefore = new Date().getTime();
    if (timeNow > 0 && start === true){
        timeNow-=100;
        $('#time').html(convertForUser(timeNow));
        var dataAfter = new Date().getTime();
        var diff = (dataAfter - dataBefore);
        console.log(diff)
        if (timeNow <= 0){
            counter+=1;
            if (counter % 2 === 1){
                timeNow = timeRest;
                $("#site-ico").attr("href", "/green.ico")
                $('.logo').html('<img src="/logo_rest.png" alt="logo"></img>');
            }
            else{
                timeNow = time;
                $("#site-ico").attr("href", "/red.ico")
                $('.logo').html('<img src="/logo_work.png" alt="logo"></img>');
            }
           
        }
    }
   
    else{
        return;
    }
    setTimeout(timer,(100-(diff*10)));
}  
    
function timerStop(){
    start = false;
    timeNow = time;
    $('#time').html(convertForUser(timeNow));
    $("#start").removeClass('spawn-word');
    $('.logo').html('<img src="/263863-200.png" alt="logo"></img>');
    $("#site-ico").attr("href", "/white.ico")
}









$(".icon").click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("icon-active")
    $('.form').toggleClass('mnu-active');
});
    
// Пользователь меняет значение
$("#btn-time").on('click', function(){
    sec = $('#choice_sec').val();
    min = $('#choice_min').val();
    time = convertToMS(min,sec);
    
    timeNow = time;
    $('#time').html(convertForUser(time)); 
    timerStop(); 
   
});
$("#btn-time_rest").on('click', function(){
    secRest = $('#choice_sec_rest').val();
    minRest = $('#choice_min_rest').val();
    timeRest = convertToMS(minRest,secRest);
});

$('#start').on('click', function(event){
    event.preventDefault();
    $('.logo').html('<img src="/logo_work.png" alt="logo"></img>');
    $("#site-ico").attr("href", "/red.ico")
    $(this).toggleClass('spawn-word');
    start = !start;
    console.log(start);
    timer();
});

$('#stop').on('click', function(event){
    event.preventDefault();
    pause = !pause;
    timerStop();
});










