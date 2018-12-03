//Types of triangles based on sides(length)
  //.Equilateral Triangles
  //.Isosceles Triangles
  //.Scalene triangles
  //.Not a triangle

//Behavior Driven Development BDD
//===================================
//Front-end/User Interface logic
//1. Give brief a description and illustrations of types of triangle.
//2. get user input (length a, length b, length c - pre-defined).
//3.
//4. display answer(with an image and name of the triangle.)

//Back-end/Business logic
//1. get input from user (length a, length b, length c - pre-defined).
//2. make input button active.
//2. evaluate properties of the 4 scenarios
//4. create/ make enter button active.
//3. create functions and arrays
//4. give answer/output.

//1. get input from user (length a, length b, length c - pre-defined).

var length a = parseInt(document.getElementById("lengtha"));
var length b = parseInt(document.getElementById("lengthb"));
var length c = parseInt(document.getElementById("lengthC"));

var outputOnEnter = document.getElementById("btn");



var button = document.getElementById("btn");

button.onclick = function(){
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "blue";
}
