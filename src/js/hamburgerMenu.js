import $ from "jquery";

$(function() {
  let $nav = $("#navArea");
  let $btn = $(".toggle_btn");
  let $mask = $("#mask");
  let open = "open";
  // menu open close
  $btn.on("click", function() {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function() {
    $nav.removeClass(open);
  });
});
