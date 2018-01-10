var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1*number2;
};

var divide = function(number1, number2) {
  return number1/number2;
};

var operation;

var switchAdd = function() {
  operation = add;
}
$(document).ready(function() {

  var number1;
  var number2;

  $(".calcDigit").click(function() {
    $(".formRow").hide();
    $(".displayRow").show();
    $(".displayRowContainer").append($(this).children("p")[0].innerText);
  });
  $(".calcOp").click(function(){

    if ($(this.classList)[2]==="add") {
      operation = add;
    } else if ($(this.classList)[2]==="subtract") {
      operation = subtract;
    } else if ($(this.classList)[2]==="multiply") {
      operation = multiply;
    } else if ($(this.classList)[2]==="divide") {
      operation = divide;
    }

    if(Number.isInteger(parseInt($(".displayRowContainer")[0].innerHTML))){
      number1 = parseInt($(".displayRowContainer")[0].innerHTML);
      $(".displayRowContainer")[0].innerHTML = "";

      $(".calcEqual").click(function() {
        number2 = parseInt($(".displayRowContainer")[0].innerHTML);
        $(".displayRowContainer")[0].innerHTML = operation(number1, number2);
      });

    } else {

      alert("Invalid Number");
      $(".formRow").show();
      $(".displayRow").hide();
      $(".displayRowContainer")[0].innerHTML = "";

    };
  });
});
