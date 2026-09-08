//Number

let balance = 120;
let anotherBalance = new Number(1232);

console.log(typeof balance);

console.log(anotherBalance);
console.log(anotherBalance.valueOf());

console.log(typeof anotherBalance);
//typeof() method to check the type of variable

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and undefined

let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

//string

let myString = "Hello";
let myStringOne = "Hola";
let userName = "Sayan";

let oldGreet = myString + " " + "Sayan" + "!";
let newGreet = `Hello ${userName}!`; //similar to python fstring - it is called string interpolation in javascript
let demoOne = `Result ${2 * 2}`;
console.log(oldGreet);
console.log(newGreet);
console.log(demoOne);

//Symbols - guaranteed unique value internally
let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2);
console.log(sm1);
let sm3 = Symbol("Sayan");
let sm4 = Symbol("Sayan");

console.log(sm3 == sm4);

/*
n JavaScript, a primitive is a fundamental data type that represents a single, raw value. Unlike objects, primitives are immutable (they cannot be changed after creation) and have no methods or properties of their own
*/
// Primitive data types in JavaScript
// 1. Number - used for integers and floating point values
//    Example: 120, 3.14, -10, 1e5
//    JavaScript uses double precision floating point internally.
//
// 2. String - used for text data, enclosed in single quotes, double quotes,
//    or template literals (`...`) for interpolation.
//
// 3. Boolean - represents logical values: true or false
//
// 4. Null - intentional absence of a value
//
// 5. Undefined - variable declared but not assigned a value
//
// 6. Symbol - unique and immutable primitive used for unique identifiers
//    and special internal values.
//
// 7. BigInt - used for numbers larger than Number.MAX_SAFE_INTEGER
//    Example: 9007199254740991n
//
// Important note:
// Primitives are the most basic built-in data types in JavaScript.
// They are immutable (cannot be changed directly), and they are stored
// by value, not by reference.
