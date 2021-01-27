// Loop: instruction that repeats until a specific condition is reached
// --------------------------------

/* FOR LOOP
   - use a for loop when you know how many times its going to run
   - Set up like a function
   - takes in three perametors seperated by semicolons:
      1st: decleration of a variable --either var or let (cannot use const)
         -- i is very common, also x is used
      2nd: condition -- 'as long as i is less than 10'
      3rd: incriment (increment of i)
         -- i++ means i = i +1
         -- its just going to add 1 to whatever i is
   - i will continue to go up by 1 until the condition (i < 10) is no longer true */

for(let i = 0; i < 10; i++){
   if(i === 2){
      console.log('2 is my favorite number');
      continue; /* continue will continue the iteration without logging 'number 2' twice */
   }
   // break out of loop
   if(i === 5){
      console.log('Stop the loop')
      break; /* breaks out of loop, ending with 'number 4' */
   }
   console.log('Number ' + i);
}
// --------------------------

/* WHILE LOOP
   - Use a while loop when it is unclear how many times its going to run
   - Set up:
      1: set variable outside of loop
      2: set up condition (goes in () next to while) 
      3: do whatever you want (ex console.log) 
      4: put incrimint inside of while loop. at bottom (i++) */
      
let i = 0;

while(i < 10){
   console.log('Number ' + i);
   i++;
}
// ------------------------------

/* DO WHILE
   - Set up:
         do {}
      1: Variabl outside of loop
      2: Whatever you want (console.log)
      3: Incrimint (x++)
         while ()
         1: write condition (x < 10)  
   - do will always run, even if condition is not met */

let x = 100;

do {
   console.log('Number ' + x);
   x++;
}

while(x < 10);
// ---------------------------

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
cars[1];

for(let i = 0; i < cars.length; i++){
   console.log(cars[i]);
}
// ---

/* FOREACH() 
   - takes in a function
   - SAME AS THE LOOP THROUGH ARRAY
      - it outputs the same as the example above, only this way is cleaner
   - function can take in three things (but you really only need one)
      1st: iderator (car)
      2nd: index (gives a number, starting with 0)
      3rd: actual array */
cars.forEach(function(car, index, array){
   console.log(`${index} : ${car}`);
   console.log(array);
});
// -----------------

// MAP (METHOD)
// Array of objects of users
const users = [
   {id: 1, name: 'John'},
   {id: 2, name: 'Sara'},
   {id: 3, name: 'Karen'},
   {id: 4, name: 'Sidney'}
];

const ids = users.map(function(user){
   return user.id;
});

console.log(ids)
// -----------------

// FOR IN LOOP
const user = {
   firstName: 'Sidney',
   lastName: 'Shafer',
   age: 16
};

for(let x in user){
   // GET KEY
   console.log(x); /* x will output keys (aka: firstName, lastName, age) */
   // GET OBJECT:
   console.log(`${x} : ${user[x]}`);
}