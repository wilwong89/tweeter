$(document).ready(function() {
  var maxLength = 140;
  var tweetTemplate = $("#tweet-template").html();

  function calcLength() {
    $(".counter").text(maxLength - $(".tweet-input").val().length);

    if ($(".tweet-input").val().length > maxLength) {
      $(".counter").css("color","red")
    } else {
      $(".counter").css("color","black")
    }
  }
  
  $(".tweet-input").on('input', calcLength)
  
  $(".switch").click(function (event) {
    $(".container").append(tweetTemplate);
    $(".tweet-input").val("");
  })
});