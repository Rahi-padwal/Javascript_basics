//if
const x = 10;
if(x == 10){ //== checks for value only
    console.log("x is equal to 10");
}
if(x === 10){ //=== checks for both value and type
    console.log("x is strictly equal to 10"); //true because x is a number and 10 is also a number  
}
const y = '20';
if(y === 20){ //=== checks for both value and type
    console.log("y is strictly equal to 20"); //false because y is a string and 20 is a number
}

//ternary operator
const i = 10;
const color = i > 5 ? "red" : "blue";
console.log(color); //red

switch(color){
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Colour is neither red nor blue.")
}