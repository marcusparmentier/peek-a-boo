$(document).ready(function() {
  $("h1").click(function() {
    $(".clickFadeIn").fadeToggle();
    $(".clickFadeOut").fadeToggle();
  });
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
    $("#hide-image").toggle();
    $("#show-image").toggle();
  });
});
