const username = {
    firstName: "Sayan",
    LastName: "Ghosh",
    "Name Space" : "Space"
}

username.middleName = "Kumar";

console.log(username)
console.log(username.firstName) //first way to access a value
console.log(username['middleName']); //when using a key inside an object always use the quotations 
console.log(username["Name Space"]) //second way to access a value, better as we can also acces the string type keys
console.log(typeof (username))

let date = new Date();
console.log(date.getDate());

//Type Conversion
//Implicit - not recommended - they fuck up the codebase

let isValue = true;
console.log(isValue);
console.log(isValue + 1);
console.log("1" + 1);
console.log(isValue + "1");

//explicit type conversion
let value = "1";
console.log(Number(value));

value = "1abc"
console.log(Number(value)); // it will print NaN - not a number 
