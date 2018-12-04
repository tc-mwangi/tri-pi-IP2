//1. Get user input from HTML
function user_Output() {
//2. Declare all variables
var a = parseInt(document.getElementById("length a").value);
var b = parseInt(document.getElementById("length b").value);
var c = parseInt(document.getElementById("length c").value);

var clickMe = document.getElementById("btn").value;

//2. Push inputs into an array

var manArray = [];
manArray.push(a, b, c);

//3. Test properties

if (a + b > c || b + c > a || b + c > a) {
  else if (a === b && b === c && a === c) {
    document.getElementById("button").innerHTML = "Equilateral, guilty as charged!";
  }
  else if (a === b || b === c || c === a) {
    document.getElementById("button").innerHTML = "Isosceles, guilty as charged!";
  }
  else {
    document.getElementById("button").innerHTML = "Scalene, guilty as charged!";
  }
}
};
