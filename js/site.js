$(document).ready(function(){
  $(".img").hide();
  let ansOne = 111;
  let ansTwo = 222;
  let ansThree = 333;
  let solOne = false;
  let solTwo = false;
  let solThree = false;
  $("button").click(function(){
    let valOne = $("#number1").val();
    let valTwo = $("#number2").val();
    let valThree = $("#number3").val();
    if (valOne.toString() === ansOne.toString()) {
      $("#number1").css("background-color", "#03fc0b");
      solOne = true;
    } else {
      $("#number1").css("background-color", "red");
      solOne = false;
    }
    if (valTwo.toString() === ansTwo.toString()) {
      $("#number2").css("background-color", "#03fc0b");
      solTwo = true;
    } else {
      $("#number2").css("background-color", "red");
      solTwo = false;
    }
    if (valThree.toString() === ansThree.toString()) {
      $("#number3").css("background-color", "#03fc0b");
      solThree = true;
    } else {
      $("#number3").css("background-color", "red");
      solThree = false;
    }
    if (solOne === true && solTwo === true && solThree === true) {
      $(".img").show();
    } else {
      $(".img").hide();
    }
  });
});
