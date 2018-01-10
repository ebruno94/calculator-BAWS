var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiplication = function(number1, number2) {
  return number1*number2;
};

var division = function(number1, number2) {
  return number1/number2;
};

$(document).ready(function() {

  $(".calcDigit").click(function() {

    $(".formRow").hide();
    $(".displayRow").show();
    $(".displayRowContainer").append($(this).children("p")[0].innerText);
  });
});
