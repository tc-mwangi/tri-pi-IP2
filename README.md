# Tri-PI

#### Triangle Type Detector Website, Monday, 3rd December 2018
#### By **Loise Mwangi**

## Description
tri-pi (Triangle Private Investigator) is a fun website with a user-friendly, interface that determines the type of triangle based on side lengths. It deviates from a typical calculator by engaging the user through a simulated game-like environment that makes it both fun and informative.

## Setup/Installation Requirements
* Web browser
* Adobe Flash Player

## Behavior Driven Development BDD
### Who is the target User?
* Mainly School kids exploring shapes and geometry and curious adults.

### Front-end/User Interface Logic Objectives

* Get user input (length a, length b, length c (with predictive placeholder input text box).
* Display answer(with an image and name of the triangle.)

### Back-end/Business logic Objectives
* get input from user (length a, length b, length c - pre-defined).
* make input button active.
* evaluate properties of the 4 scenarios
* create functions and arrays
* give answer/output.

| Behaviour                              | Input Example     | Output Example    |
| The program should handle:             | When it receives: | It should return  |
| :---                                   | :---:             |              ---: |
| The triangle is Equilateral.           | 3, 3, 3           | True              |
| The triangle is Isosceles.             | 3, 3, 4           | True              |
| The triangle is Scalene.               | 3, 4, 5           | True              |
| No input at all (empty fields).        | ""                | False             |      
| Input values that cant form a triangle | 1, 2, 5           | False             |
| Letters or symbols as inputs.          | ad. ? /           | False             |

### Test 01 (A triangle?)

a + b <= c
b + c <= a
c + a <= b

### Test 02 (An equilateral triangle?)
a === b or b === c or a === c

### Test 03 (An isosceles triangle?)
a === b || b === c || c === a

### Test 03 (A scalene triangle?)
a !== b and b !== c and a !== c

## Built in/with
Webpage created using HTML, CSS and JavaScript. Tools used include: Atom, Command Line, Illustrator and Photoshop.
## Support and contact details
To contribute or get support contact me at lsmwangi@gmail.com.
### License
Copyright (c) {2018} **Loise Mwangi**
