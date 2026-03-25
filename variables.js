//var, let, const

let age = 21;
age = 22;
console.log(age);

const ages = 34;
// ages = 35;  This will throw an error because ages is a constant
console.log(ages);

//Example 1:
const user = {name: "Rahi"};
user.name = "Rahi Padwal"; 
// This is allowed because, we are just changing the property of the object.
console.log(user);
//user = {}; 
// This will throw an error because we are trying to make user point to a different object, which is not allowed for constants.

//Example 2:
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
// This is allowed because, we are just modifying the contents of the array.
//numbers = [7,8]; 
// This will throw an error because we are trying to reassign the numbers variable which is a constant.

const score = 100;
console.log(score);
//const score; 
// This will throw an error because constant needs an initial value.

let score2;
score2 = 200;
console.log(score2); 




