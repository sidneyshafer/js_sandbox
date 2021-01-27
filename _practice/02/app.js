const firstName = 'Sidney';
const lastName = 'Shafer';
const age = 16;
const str = 'Hi, my name is Sidney';
const wrds = 'hi,bye,see,you,later,in,a,while,you,will,see,be,patient'

let val1;
let val2;
let val3;
let val4;

// STRING METHODS
// Values start from 0

// indexOf()
val1 = firstName.indexOf('i');
val2 = lastName.lastIndexOf('a');
console.log(val1, val2);

// charAt()
val1 = firstName.charAt('3'); /* output: n */
console.log(val1);

// Get last charactor
val1 = firstName.charAt(firstName.length - 1);
console.log(val1);

// substring()
val1 = firstName.substring(1, 5); /* output: idne */
console.log(val1);

// slice()
val1 = firstName.slice(1, 5); /* output: idne */
console.log(val1);

// split()
// Outputs an array
val1 = str.split(' '); /* output: (5)["Hi,", "my", "name", "is", "Sidney"] */
val2 = wrds.split(',');
console.log(val1, val2);

// replace()
val1 = str.replace('Hi', 'Hello'); /* replaces 'hi' with 'hello' */
console.log(val1);

// includes()
val1 = str.includes('See Ya'); /* output: fase (string does not contain 'See Ya') */
console.log(val1);

val2 = str.includes('name'); /* output: true (string contains 'name') */
console.log(val2);
// --------------------------------------------


// TEMPLATE LITERALS
const animal = 'dog';
const game = 'Puzzle';
const city = 'Orlando';
const hobbie = 'Running';
const num = 25;
let html;

html = `
   <ul>
      <li>Animal: ${animal}</li>
      <li>Game: ${game}</li>
      <li>City: ${city}</li>
      <li>Hobbie: ${hobbie}</li>
      <li>Number: ${num > 20? 'Over 20' : 'Younger Than 20'}</li>
   </ul>
`;
// ---------------------------------------


// ARRAYS & ARRAY METHODS
const numbers1 = [23,65,45,72,89,10,13];
const numbers2 = [23,65,45,98,7,89,2,10,13];
const numbers3 = [100,10,23,65,34,4,5,-19,15];
const simpleNumbers = [1,2,3,4,5,6,7];
const mixedNumbers = [10,2,50,5,4];
const reverseNumbers = [9,8,7,6,5,4,3];
const newNumbers = new Array(23,4,3,87,6);
const fruit = ['banana', 'strawberry', 'kiwi', 'pineaple', 'blueberry', 'orange'];
const mixed = ['Hello', 17, {a:1, b:0}, true, null, false, new Date(), [1,2,3,4,5]];

console.log(mixed);
let val;

// Get Array Length
val = numbers1.length;
console.log(val, typeof val);

// Check if it is an array
val = Array.isArray(numbers1);
console.log(val);

// Get Single value
val = numbers1[0]; /* output: 23 */
console.log(val);

// insert number into array
numbers1[2] = 67; /* number 45 would be changed tp 67 */
console.log(numbers1);

// Find index of value (where it is)
val = numbers1.indexOf(13); /* output: 6 */
console.log(val);
// ------------

// MUTATNG ARRAYS
// Adding a value onto the end
numbers1.push(15);
console.log(numbers1);

// Adding a value to the frony
numbers1.unshift(20);
console.log(numbers1);

// Take off from end
numbers2.pop();
console.log(numbers2);

// Tak off from front
numbers2.shift()
console.log(numbers2);

// splice values
numbers3.splice(1, 4);
console.log(numbers3);

// reverse values
numbers1.reverse()
console.log(numbers1);
// ------------------

// CONCATENATE ARRAY
val = numbers1.concat(numbers1);
console.log(val);
// ---------------

// Sorting Arrays
val = fruit.sort();
console.log(val);
val = reverseNumbers.sort();
console.log(val);

// Use the "compare function"
// outputs array
val = simpleNumbers.sort(function(x, y) {
   return x - y;
});
console.log(val);

// Reverse sort (reverse array)
val = simpleNumbers.sort(function(x, y) {
   return y - x;
});
console.log(val);

// Find number
function under50(num){
   return num < 50;
};

val = mixed.find(under50);
console.log(val);

function over10(num){
   return num > 10;
};
val = simpleNumbers.find(over10);
console.log(val);

