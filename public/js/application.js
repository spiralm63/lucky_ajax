$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  $("form").on("submit", function(event){
    //now we need to prevent the default action for that event from happening
    event.preventDefault();
    
    var random_di_roll = Math.floor(6*Math.random() +1);
    //perform an asynchronous HTTP (AJAX) request
    //jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
    $.post('/rolls', random_di_roll, function(response){
      console.log(response);

      $("div#di").html(response);

    });
  });

});


//# 1 we're intercepting the form submission using jQery



//check # 3


