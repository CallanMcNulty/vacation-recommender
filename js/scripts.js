$(document).ready(function() {
  var question_number = 1;
  $("#1").show();
  $("form").submit(function(event) {
    event.preventDefault();
    question_number ++;
    $(".question").hide();
    $("#"+question_number.toString()).show();
  });
});
