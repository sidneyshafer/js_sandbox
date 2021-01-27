// IF STATEMENT & COMPARISON OPERATORS
const id1 = 10;
const id2 = 20;
const id3 = undefined;
const id4 = 110;
const num = 100;

// Equal to
if(id1 == 10){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

if(id2 == 10){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// NOT Equal To
if(id1 != 15){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// Equal to value and type (use and extra = sign. Use most/all the time)
if(id1 === 10){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// Not equal to value and type
// This is ex would be 'CORRECT' b/c 10 does not = 'String'
if(id1 !== 'String'){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// Test if undefined
// In this is ex, we are asking 'if the typeof id1 does not equal undefined, then...'
if(typeof id1 !== 'undefined'){
   console.log(`the number is ${id1}`);
} else {
   console.log(`NO ID`);
}

if(typeof id3 !== 'undefined'){
   console.log(`the number is ${id3}`);
} else {
   console.log(`NO ID`);
}
// ----------------------

/* GREATER OR LESS THAN
   > (greator than)
   >= (greator than or equal to)
   < (less than)
   <= (less than or equal to) */

// Greator than or equal to
if(id1 >= 100){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

if(id4 >= 100){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}
// ----------

// IF ELSE
const color = 'pink';

if(color === 'blue'){
   console.log('Color is blue');
} else if(color === 'green'){
   console.log('Color is green');
} else {
   console.log('Color is not blue or green');
}
// -----------

// LOGICAL OPERATORS
const name = 'Sidney';
const age = 16;

// && (AND)
if(age > 0 && age < 13){
   console.log(`${name} is a child`);
} else if(age >= 13 && age <=18){
   console.log(`${name} is a teenager`);
} else {
   console.log(`${name} is an adult`);
}

// || (OR)
if(age < 16 || age > 65){
   console.log(`${name} cannot run in the race`);
} else {
   console.log(`${name} can run in the race`);
}
// ------------------

// TERNARY OPERATOR - ? (if), : (else) ---shorthand if statment
console.log(num === 100 ? 'CORRECT' : 'INCORRECT');
// -----------------------------------------------


// SWITCHES
const word = 'unknown';

// Use switches when you have multiple cases
switch(word){
   case 'yes':
      console.log('Your word is \'yes\'');
      break;
   case 'no':
      console.log('Your word is \'yes\'');
      break;
   default:
      console.log('Your word is \'unknown\'');
}
// -------------

let day;

/* With dates
   ouputs todays date */
switch(new Date().getDay()){
   case 0:
      day = 'Sunday';
      break;
   case 1:
      day = 'Monday';
      break;
   case 2:
      day = 'Tuesday';
      break;
   case 3:
      day = 'Wednesday';
      break;
   case 4:
      day = 'Thursday';
      break;
   case 5:
      day = 'Friday';
      break;
   case 6:
      day = 'Saturday';
      break;
   default:
      console.log('Day does not exist');
      break;
}

console.log(`Today is ${day}`);
/* --------------------------------------------
-----------------------------------------------*/

// FUNCTION DECLERATIONS & EXPRESSIONS

// Function Delerations
function greet(firstName = 'Sidney', lastName = 'Shafer'){
   return 'Hello ' + firstName + ' ' + lastName; /* ' ' = space inbetween first & last name */
}
console.log(greet());
// -----------

// Function Expression
const square = function(x = 0){
   return x * x;
}

console.log(square());
console.log(square(5)); /* can pass a number through. Output: 25 (5x5) */
// -----------

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
/* declare and run at the same time
   functions must end in ()*/
(function(){
   console.log('Run function...');
})();

(function(name){
   console.log('Hello ' + name);
})('Allie');
// ---------------

// Property Methods
// When a function is put inside an object it is called a method
const todo = {
   add: function(){
      console.log('Add todo');
   },
   edit: function(id){
      console.log(`Edit todo ${id}`);
   }
} 

todo.delete = function(){
   console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();