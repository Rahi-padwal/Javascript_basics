/*Primitive: String, Number, Boolean, Null, Undefined, Symbol
Reference: Object, Array.*/

const name = "John"; // String
const age2 = 30; // Number
const isStudent = true; // Boolean
const address = null; // Null
const phoneNumber = undefined; // Undefined
let z; // This is undefined as well.

console.log(name);
console.log(age2);
console.log(isStudent);
console.log(address);
console.log(phoneNumber);
console.log(z);

//STRING:
const message = "Hello, World!";
const num = 123.5;

//methods:
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.substring(0, 5));
console.log(message.substring(0, 5).toUpperCase());

//concatenation
console.log("Hello, I am " + name + " and I'm " + age2);
console.log(`My name is ${name} and I'm ${age2}`); // Using template literals for concatenation

//ARRAYS:
const random = ["apple", "banana", "orange", 100, true];
console.log(random);
console.log(random.length);


