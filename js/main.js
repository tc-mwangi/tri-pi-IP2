function(showOutput){

var a = parseInt(document.getElementById("length a").value);
var b = parseInt(document.getElementById("length b").value);
var c = parseInt(document.getElementById("length c").value);

if (a + b > c || b + c > a || b + c > a) {
  else if (a === b && b === c && a === c) {
    document.getElementById("button").innerHTML = "Equilateral, guilty as charged!";
  }
  else if a !== b and b !== c and a !== c {
    document.getElementById("button").innerHTML = "Scalene, guilty as charged!";
  }
  else {
    document.getElementById("button").innerHTML = "Scalene, guilty as charged!";
  }
};
