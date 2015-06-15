// Add your javascript here
$(function(){
  var num1, num2, op, calc;
  var calculation = [];
  $(".row").on("click", ".col-md-3", function(e){
    var val = $(this).html();

    // $(val).append(val);
    console.log("$(val): ", $(val));
    if($(this).hasClass("operator")){
      calc = $($(this)[0]).text();
      console.log("$(this)[0]: ", $($(this)[0]).text());
      calculation.push(calc);
    } else {
      calculation.push(val);
    }
    $("#display").append(val);
  });


  $("#calculate").on("click",  { value: calc },function(event){
    console.log("event: ", event);
    console.log("calc: ", calc);
    doCalc(calc);

    function doCalc(calc){

      console.log("calculation: ", calculation);
      switch (calc) {
          case "+":
            return sum(calc);
            break;
          case "-":
            return subtract();
            break;
          case "*":
            return product();
            break;
          case "/":
          return divide();
            break;

          default:
            return;
       }
     }
  });

  function sum(){
    var plus = calculation.indexOf("+");
    // calculation.split(plus);

    calculation.splice(plus,1);
    console.log("calculation: ", calculation);
    var total =  calculation.reduce(function(acc, c){
      return acc + c;
    });
    $("#display").html(total);
  }

  function subtract(){

    var minus = calculation.indexOf("-");
    calculation.splice(calc,1);
    var total =  calculation.reduce(function(acc, c){
      return acc - c;
    });
    $("#display").html(total);
  }

  function product(){
    console.log("product called: ");
    var op = calculation.indexOf("*");
    calculation.splice(op,1);
    var total =  calculation.reduce(function(acc, c){
      return acc * c;
    });
    $("#display").html(total);
  }

  function divide(){
    console.log("div called: ");
    var op = calculation.indexOf("/");
    calculation.splice(op,1);
    var total =  calculation.reduce(function(acc, c){
      return acc / c;
    });
    $("#display").html(total);
  }
});
