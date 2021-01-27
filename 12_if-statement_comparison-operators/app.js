// if(something){
//    do something
//    else{
//       do something else
//    }
// }

const id = 100;

// EQUAL TO
if(id == 100){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 101){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE (extra equal sign. Use most of the time)
if(id === 100){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
if(id !== 100){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== 'undefined'){
   console.log(`The ID is ${id}`);
} else {
   console.log('No ID');
}

// GREATER OR LESS THAN
// > (greator than)
// >= (greator than or equal to)
// < (less than)
// <= (less than or equal to)
if(id >= 100){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
}

// IF ELSE
const color = 'yellow';

if(color === 'red'){
   console.log('Color ir red');
} else if(color === 'blue'){
   console.log('Color is blue');
} else {
   console.log('Color is not red or blue');
}

// LOGICAL OPERATORS
const name = 'Steve';
const age = 25;

// AND &&
if(age > 0 && age < 12){
   console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
   console.log(`${name} is a teenager`);
} else {
   console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
   console.log(`${name} can not run in race`);
} else {
   console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR ? (if) + : (else)(shorthand if statement)
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES {} (use braces)
if(id === 100)
   console.log('CORRECT');
else
   console.log('INCORRECT');