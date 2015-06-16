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
    console.log('$(this):', $(this));
    if($(this).hasClass("operator")){
      calc = $($(this)[0]).text();
      calculation.push(calc);
    } else if ($(this).hasClass("num")){
      console.log("$(this).html(): ", $(this).html());
      val = parseInt(val);
      calculation.push(val);
    } else if($(this).attr('id') === "calculate"){
      val = '';
    } else if($(this).attr('id') === "decimal"){
      calculation.push('.');
      console.log('VAL:',val);
    } else if($(this).has("#sign")){
      calculation.push($(this).html());
    }

    $("#display").append(val);
  });

  $("#clear").click(function(){
    $("#display").html('');
  });

  var op;
  $("body").on("keypress", { value: op }, function(e) {

    e.preventDefault();

    var keycode = (e.keyCode ? e.keyCode : e.which);
    var character = String.fromCharCode( e.keyCode || e.which );
    getOp();
    if (keycode !== 13) {
      calculation.push(character);
    }
    function getOp(){
      op = character.match(/[i%+-\/*]/);
      if(op){
        op = op[0];
        if(op === 'i'){
          op = "+/-";
        }
      }
      return op;
    }

    console.log("op1: ", op);
    if (keycode === 13) {
      console.log("op: ", op);
      doCalc(op);
    }

    $("#display").html(calculation);
  });

  $("#calculate").on("click",  { value: calc },function(event){

    doCalc(calc);
  });

  function doCalc(calc){
    console.log("do calc called: ");
    switch (calc) {
        case "+":
        console.log("sum called: ");
          sum();
          break;
        case "-":
        console.log("sub called: ");
          subtract();
          break;
        case "*":
        console.log("prod called: ");
          product();
          break;
        case "/":
        console.log("div called: ");
          divide();
          break;
        case "%":
        console.log("perc called: ");
          perc();
          break;
        case "+/-":
        console.log("sign called: ");
          sign();
          break;
        default:
          return;
     }
   }

  function sum(){
    var plus = calculation.indexOf("+");
    var num1 = calculation.slice(0,plus);
    var num2 = calculation.splice(plus + 1);
    num1 = parseInt(num1.join(''));
    num2 = parseInt(num2.join(''));

    calculation.splice(plus,1);


    // var total =  calculation.reduce(function(acc, c){
    //   return acc + c;
    // });
    total =  num1 + num2;
    $("#display").html(total);
  }

  function subtract(){
    console.log("calculatio sub: ", calculation);
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
