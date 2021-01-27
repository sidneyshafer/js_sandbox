// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope: ', a, b, c);

// FUNCTION SCOPE
function test() {
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('Function Scope: ', a, b, c);
}
// run function
test();

// BLOCK SCOPE
   /* let & const work like normal programming languages
       - var does not */
if(true) {
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('If Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c);

// For Loop
for(let a = 0; a < 10; a++) {
   console.log(`Loop: ${a}`);
}