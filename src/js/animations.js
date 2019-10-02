import $ from "jquery";

$(function() {
  let $moveBox = $(".move-box");
  let $moveButton = $(".move-button");

  $moveButton.on("click", function() {
    $moveBox.toggleClass("active");
  });
});
