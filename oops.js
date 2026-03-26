//CONSTRUCTOR: 
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){ //object method
        return this.dob.getFullYear();
    }
}

Person.prototype.getFullName = function(){ //prototype method
    return `${this.firstName} ${this.lastName}`;
}

//INSTANTIATE OBJECT
const person1 = new Person("John", "Doe", "4-3-1980");
//console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());


//ES6 CLASS
class Person2{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person2 = new Person2("Jane", "Smith", "5-15-1990");
console.log(person2.getBirthYear());
console.log(person2.getFullName());
