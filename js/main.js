//1. Get user input from HTML
function user_Output() {
//2. Declare all variables
var a = parseInt(document.getElementById("length a").value);
var b = parseInt(document.getElementById("length b").value);
var c = parseInt(document.getElementById("length c").value);

var clickMe = document.getElementById("clickMe").value;

//2. Push inputs into an array

var manArray = [];
manArray.push(a, b, c);
act();
}
//3. Test properties
function act(a,b,c) {
if (a + b > c || b + c > a || b + c > a) {

  if (a === b && b === c && a === c) {
    clickMe.innerHTML = "<p>Equilateral, guilty as charged!</p>"
  }
  else if (a === b || b === c || c === a) {
    clickMe.innerHTML = "<p>Isosceles, guilty as charged!.</p>"
  }
  else {
    clickMe.innerHTML = "<p>Scalene, guilty as charged!.</p>"
  }
}
else {
    clickMe.innerHTML = "<p>This is not a triangle.</p>"
}
}
