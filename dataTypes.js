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
console.log(random[2]);
random.push("grape"); //addition at the end of the array
console.log(random);
random.pop();          //removal of the last element of the array
console.log(random);
random.unshift("grape"); //addition at the beginning of the array
console.log(random);
random.shift();          //removal of the first element of the array
console.log(random);
console.log(random.indexOf("banana")); //index of the element in the array
console.log(random.includes("orange")); //check if the element is present in the array

//OBJECT LITERALS:
//object liter
const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    hobbies: ["reading", "traveling", "cooking"],
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA"   
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]); 
console.log(person.address.city);
person.email = "alice.smith@example.com";
console.log(person.email);

//ARRAYS OF OBJECTS:
const todo = [
    {id: 1,
    task: "Buy groceries",
    completed: false
    },
    {id: 2,
    task: "Walk the dog",
    completed: true
    },
    {id: 3,
    task: "Finish homework",
    completed: false
    }
]

console.log(todo);
console.log(todo[1].task);

const todoJson = JSON.stringify(todo);
console.log(todoJson);