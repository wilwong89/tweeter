$(document).ready(function() {
  let maxLength = 140;
  $(".counter").text(maxLength);

  // Dom manipulation to controll counter css
  $(".tweet-input").on("input", function() {
    $(".counter").text(maxLength - $(".tweet-input").val().length);

    if ($(".tweet-input").val().length > maxLength) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
});
