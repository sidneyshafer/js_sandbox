// LET, CONST, INITIALIZING

// Variables using let
// Can be reassigned or changed
let name; 
name = 'John Doe' 
console.log(name);

// Variables using const
// CANNOT be reassigned or changed
const color = 'blue';
console.log(color); 

// Initializing Variable
let FirstName;
FirstName = 'Sally';
console.log(FirstName);
// ----------------------------------------------


// PRIMITIVE DATA TYPES

// String
let firstName = 'Sidney';
// Number
let age = 16;
// Boolean
const hasPhone = true;
// Null (intentional empty value; will apear as 'object')
const doesWork = null;
// Undefined
let run;
// Symbols
const sym = Symbol();

console.log(firstName, age, hasPhone, doesWork);
// --------------------------------------------------------


// 'TYPEOF' OPERATOR - tells what type the variable is
const lastName = 'Shafer';
console.log(typeof lastName); // will output 'string'
// ------------------------------------------------------


// REFERENCE DATA TYPES
// Arrays
const sports = ['baseball', 'basketball', 'soccer', 'hockey', 'football'];
console.log(sports);

// Object Literals
let temp = {
   Mon: '32 deg',
   Tues: '20 deg',
   Wed: '84 deg',
   Thurs: '40 deg' 
}
console.log(temp);
// ----------------------------------

// STRING CONVERSIONS
/* Number To String
 console.log(.length) - only works for strings */
let val;
val = String(3);
console.log(val, typeof val);

val = String(5+10);
console.log(val, val.length);

// Boolean To String
val = String(false);
console.log(val, typeof val, val.length);

// Date To String
val = String(new Date());
console.log(val);

// Array To String
val = String([1,2,3,4,5,6]);
console.log(val);

// String To Number
let val1;
let val2;
let val3;
let val4;
let val5;
let val6;

val1 = Number('10'); 
val2 = Number(true);
val3 = Number(false);
val4 = Number(null);
val5 = Number('Hello')
val6 = Number([1,2,3,4,5,6]) /* NaN = Not A Number */
console.log(val1, val2, val3, val4, val5, val6);
// -------------------------------------------------


// CONSOLE LOG EXAMPLE (ONLY WITH NUMBERS)
// Can show decimal points
let num = 4.23456789;
console.log(num.toFixed(), num.toFixed(8));
// -------------------------------------------------


// BASIC + and -
let num1 = 10;
let num2 = 3;
const sum = num1 + num2;
const dif = num1 - num2;
console.log(sum, dif);

// TYPE CORROSION
const num3 = String(7);
const num4 = 10;
const add = num3 + num4;
console.log(add, typeof add);
// ---------------------------------------

// BASIC MATH
const number1 = 200;
const number2 = 23;
let output;

output = number1 + number2;
output = number1 - number2;
output = number1 * number2;
output = number1 / number2;
output = number1 % number2; /* % = remainder */
console.log(output);
// --------------------------------------------


// ROUNDING
output = Math.round(4.5); /* baic rounding */
console.log(output);

   // Rounding Up
output = Math.ceil(1.3);
console.log(output, typeof output);

   // Rounding Down
output = Math.floor(5.9);
console.log(output);
// ------------------------------------------------------


// MORE MATH CONCEPTS
   // Squaring A Number
const mathSqrt = Math.sqrt(81);
   // Absolue Number
const mathAbs = Math.abs(-12);
   // Power
const mathPow = Math.pow(5, 5) /* 5 raised to the 5th power */
   // The Minimum Value
const mathMin = Math.min(456,982,323,331,43,2556,345,87,54,56); /* outputs the smallest number */
   // Maximum Value
const mathMax = Math.max(-23,323,331,43,345,87,54,56) /* outputs largest number */
   // Random
   /* spits out randome numbers (including decimals) every time the page is loaded*/
const mathRandom = Math.random();
const mathRandom2 = Math.random() * 5; /* Will generate a random number + decimal between 0 + 5 */

/* + 1 = num between 1 and 100. Math.floor will round numbers */
const mathRandom_plus_floor = Math.floor(Math.random() * 100 + 1)

console.log(mathSqrt, mathAbs, mathPow, mathMin, mathMax);
console.log(mathRandom, mathRandom2, mathRandom_plus_floor);
// ----------------------------------------------------


/* STRING METHODS & CONCATENATION
-------------------------------------------------------- */
const first_name = 'Sidney';
const last_name = 'Shafer';

val = first_name + ' ' + last_name;
   // ^Can also be written as...
val = first_name.concat(' ', last_name);
console.log(val);

val = 'Hello, my name is ' + first_name + ' and I am ' + age;
console.log(val);
// ----------------------------------------------

// APPEND (ADD ON TO A VARIABLE)
val = 'Sidney ';
val += 'Shafer';
console.log(val);

// ESCAPING
val = 'That\'s awesome, I can\'t wait';
console.log(val);

// CHANNGE CASE
val = first_name.toUpperCase();
name = last_name.toLowerCase();
console.log(val, name);