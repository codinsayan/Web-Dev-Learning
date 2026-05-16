console.log("Hello");
//console.log("Hi")

/*
Hey I was doing just fun before I met you 
you drink too much and that's an issue 
but I'm okay
*/

/*
datatypes:

String
Number
Boolean
Bigint

Undefined
null

Object

Symbol

*/
 

//How to decalre a variable

var score = 102; // old way to decalre a variable
let new_score = 102; //new way to decalre a variable
let name = "chaicode.com";
let isLoggedin = false;

/*
The primary difference between var and let is how they are scoped: var is function-scoped, while let is block-scoped. In modern JavaScript, let is generally preferred because it makes code more predictable and helps avoid bugs caused by variable "leaks"

Scoping Comparison:
If you declare a variable inside an if block or loop:

Using var: The variable "leaks" outside the block and can still be accessed later in the same function.

Using let: The variable exists only inside that block. Attempting to access it outside will cause a ReferenceError.

Which one should I use?
Experts at MDN Web Docs and W3Schools recommend using let (or const for values that don't change) for almost all situations in modern development. var is mostly seen in legacy codebases or when specifically supporting very old browsers.

*/

//object
let teaTypes = ["lemon", "orage", "oolong tea"];

let user = { firstname: "sayan", lastname: "Ghosh" };

let getScore = score;

console.log(getScore);


