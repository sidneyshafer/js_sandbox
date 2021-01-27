// var, let, conts

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// Cannot start with a number
// NOT ALLOWED: var 1name = 'John';
// Only really used with jQuery: var $name = 'John';

// Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;

// LET
let fullName;
fullName = 'Sally Doe';
console.log(fullName);
fullName = 'Katie Brown';
console.log(fullName);

// CONST = Cannot be changed or reassigned
const lastName = 'Smith';
console.log(lastName);
// cannot reassign
// lastName = 'Doe';
// Have to assign a value
// const greeting;

const person = {
   middleName: 'John',
   age: 30
}

person.middleName = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5,6,7];
numbers.push(8);
// numbers = [1,2,3,4,5,6,7,8]; // Cannot do this

console.log(numbers);

let age = 25;
console.log(age);