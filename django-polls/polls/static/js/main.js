$(document).ready(function () {
   let res = $('.result-block'); //Массив 
   let sum = 0;       
   $(res).each(function (index, element) {
        element = $(this).html();
        sum += +element      
   });
   $(res).each(function (index, element) {
        element = $(this).html();
        procent = element / sum  * 100;
        $(this).css('width', (procent+5) + "%")  
    });
});
