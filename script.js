// Add your javascript here
$(function(){
  var num1, num2, num, op, calc;
  var calculation = [];
  var nums = [];
  var numbers = [];
  var num1 = [];
  $(".row").on("click", ".col-md-3", function(e){
    var val = $(this).html();

    console.log("$(val): ",val);
    if($(this).hasClass("operator")){
      // calc = $($(this)[0]).text();
      calc = $($(this)[0]).text();
      calculation.push(calc);
    } else if ($(this).hasClass("num")){
      console.log("$(this).html(): ", $(this).html());
      // nums.push(num);
      // console.log("nums: ", nums);
      //
      // numbers = nums.join('');

      val = parseInt(val);
      calculation.push(val);


    } else if($(this).has("#calculate")){
      val = '';
    }
    // calculation.push(numbers);
    $("#display").append(val);
  });

  $("#clear").click(function(){
    $("#display").html('');
  });

  $("#calculate").on("click",  { value: calc },function(event){
    console.log("event: ", event);
    console.log("calc: ", calc);
    doCalc(calc);

    function doCalc(calc){

      console.log("calculation: ", calculation);
      switch (calc) {
          case "+":
            sum(calc);
            break;
          case "-":
            subtract();
            break;
          case "*":
            product();
            break;
          case "/":
            divide();
            break;

          default:
            return;
       }
     }
  });

  function sum(){
    var plus = calculation.indexOf("+");
    var num1 = calculation.slice(0,plus);
    var num2 = calculation.splice(plus + 1);
    num1 = parseInt(num1.join(''));
    num2 = parseInt(num2.join(''));

    calculation.splice(plus,1);

    console.log("calculatio2: ", calculation);
    // var total =  calculation.reduce(function(acc, c){
    //   return acc + c;
    // });
    total =  num1 + num2;
    $("#display").html(total);
  }

  function subtract(){
    var minus = calculation.indexOf("-");
    var num1 = calculation.slice(0,minus);
    var num2 = calculation.splice(minus + 1);
    num1 = parseInt(num1.join(''));
    num2 = parseInt(num2.join(''));
    // calculation.splice(minus,1);
    // var total =  calculation.reduce(function(acc, c){
    //   return acc - c;
    total =  num1 - num2;
    // });
    $("#display").html(total);
  }

  function product(){
    var op = calculation.indexOf("*");
    var num1 = calculation.slice(0,op);
    var num2 = calculation.splice(op + 1);
    num1 = parseInt(num1.join(''));
    num2 = parseInt(num2.join(''));
    // calculation.splice(op,1);
    // var total =  calculation.reduce(function(acc, c){
    //   return acc * c;
    // });
    total =  num1 * num2;
    $("#display").html(total);
  }

  function divide(){
    var op = calculation.indexOf("/");
    var num1 = calculation.slice(0,op);
    var num2 = calculation.splice(op + 1);
    num1 = parseInt(num1.join(''));
    num2 = parseInt(num2.join(''));
    // calculation.splice(op,1);
    // var total =  calculation.reduce(function(acc, c){
    //   return acc / c;
    // });
    total =  num1 / num2;
    $("#display").html(total);
  }
});
