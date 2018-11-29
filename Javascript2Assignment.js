function calculate(x, y ) {
  var sum = x + y;
  var difference = x - y;
  var product = x * y;
  var quotient = x / y;
  var measures = [sum, difference, product, quotient];
  return measures;
}
var number1 = Math.floor((Math.random() * 10) + 1);

var number2 = Math.floor((Math.random() * 10) + 1);

var theSum = calculate (number1, number2)[0];

var theDifference = calculate (number1, number2)[1];

var theProduct = calculate (number1, number2)[2];

var theQuotient = calculate (number1, number2)[3];

var el1 = document.getElementById("first");

el1.textContent = theSum + " is the sum";

var el2 = document.getElementById("second");

el2.textContent = theDifference + " is the difference";

var el3 = document.getElementById("third");

el3.textContent = theProduct + " is the product";

var el4 = document.getElementById("fourth");

el4.textContent = theQuotient + " is the quotient";
