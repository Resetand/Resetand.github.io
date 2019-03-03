card = $(".station-details")
card.hide();
$(document).ready(function () { 
    var urlList = []
    local = location.href.split('/').slice(0,3).join('/')
    $('.station').parent().on("click", function(event){
      console.log($(this).attr('href'))
      event.preventDefault(); // предотвращаем штатное действие, то есть переход по ссылке
        $.get($(this).attr('href'), function(data) // отправляем GET запрос на href, указанный в ссылке
        {
            console.log('GET REQUEST ')
            $(".station-details").html(data) // выводим полученные данные в div.
            card.show(400);
        });
    });

      $('#login_form').submit(function() { // catch the form submit event
          $.ajax({ // create an AJAX call...
              data: $(this).serialize(), // get the form data
              type: $(this).attr('method'), // GET or POST
              url: $(this).attr('action'), // the file to call
              success: function(response) { // on success..
                  data = JSON.parse(response)
                  if (data['result'] === "Ok"){
                    $('.login-message').hide()
                    location.reload()
                  }
                  else{
                    $('.login-message').show(100).html('Неправильно введены логин или пароль')
                  }
              }
          });
          return false;
      });                                                                                                               

    $('.login').on("click", function(event){
      event.preventDefault();
    });
    $('.signin').on("click", function(event){
      event.preventDefault();
    });

    visitedList=$(".visit_station")
    $('#backlight').on("click", function (event) {
      event.preventDefault();

      $(this).toggleClass('backlightClick')
      visitedList.each(function(index){
        $(this).toggleClass('visit_station')
      })
    });


});  
  