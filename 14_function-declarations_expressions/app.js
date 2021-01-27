// functions: declared & called at later time or called at the same time

//FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe'){
   // if(typeof firstName === 'undefined'){firstName = 'John'}
   // if(typeof lastName === 'undefined'){lastName = 'Doe'}
   //console.log('Hello');
   return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// FUNCTION EXPRESSION
const square = function(x = 3){
   return x*x;
};

console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
/* declare and run at the same time
   functions must end in ()*/
(function(){
   console.log('IIFE Ran..');
})();

(function(name){
   console.log('Hello ' + name);
})('Sidney');

// PROPERTY METHODS
// When a function is put inside an object its called a method
const todo = {
   add: function(){
      console.log('Add todo..');
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