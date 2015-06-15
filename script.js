// Add your javascript here
$(function(){
  var num1, num2, num, op, calc, percent;
  var calculation = [];
  var nums = [];
  var numbers = [];
  var num1 = [];
  // var perc = [];
  $(".row").on("click", ".col-md-3", function(e){
    var val = $(this).html();

    console.log("$(val): ",val);
    if($(this).hasClass("operator")){
      calc = $($(this)[0]).text();
      calculation.push(calc);
    } else if ($(this).hasClass("num")){
      console.log("$(this).html(): ", $(this).html());
      val = parseInt(val);
      calculation.push(val);
    } else if($(this).has("#calculate")){
      val = '';
    } else if($(this).has("#decimal")){
      calculation.push($(this).html());
      $("#display").append(val);

  } else if($(this).has("#sign")){
    calculation.push($(this).html());
    $("#display").append(val);
  }

    $("#display").append(val);
  });

  $("#clear").click(function(){
    $("#display").html('');
  });

  $("#calculate").on("click",  { value: calc },function(event){
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
          case "%":
            perc();
            break;
          case "+/-":
            sign();
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

    total =  num1 / num2;
    $("#display").html(total);
  }

  function perc(){
    var op = calculation.indexOf("%");
    var num1 = calculation.slice(0,op);
    num1 = parseInt(num1.join(''));
    total = num1 * 0.01;
    $("#display").html(total);
  }
  function sign(){
    var op = calculation.indexOf("+/-");
    var num1 = calculation.slice(0,op);
    num1 = parseInt(num1.join(''));
    total = -num1;
    $("#display").html(total);
  }
});
