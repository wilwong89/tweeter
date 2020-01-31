$(document).ready(function() {
  var maxLength = 140;
  $(".counter").text(maxLength)

  // Dom manipulation to toggle view of tweet input
  $(".nav-right").click(function(event){
    $(".new-tweet").slideToggle(400)
    $(".error-container").slideUp(400)
    $(".actual-input").focus()
  })
  
  // Dom manipulation to controll counter css 
  $(".tweet-input").on('input', function calcLength() {
    $(".counter").text(maxLength - $(".tweet-input").val().length);

    if ($(".tweet-input").val().length > maxLength) {
      $(".counter").css("color","red")
    } else {
      $(".counter").css("color","black")
    }
  })
});