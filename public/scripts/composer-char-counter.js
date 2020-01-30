$(document).ready(function() {
  var maxLength = 140;
  var tweetTemplate = $("#tweet-template").html();
  $(".counter").text(maxLength)

  function calcLength() {
    $(".counter").text(maxLength - $(".tweet-input").val().length);

    if ($(".tweet-input").val().length > maxLength) {
      $(".counter").css("color","red")
    } else {
      $(".counter").css("color","black")
    }
  }

  $(".nav-right").click(function(event){
    $(".input-container").slideToggle(400)
  })
  
  $(".tweet-input").on('input', calcLength)
});