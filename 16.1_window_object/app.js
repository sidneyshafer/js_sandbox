// WINDOW METHODS / OBJECTS 

window.console.log(1,2,3);
console.log(1,2,3);

/* ALERT
   - Alert box that pops up 
   - most times you do not need 'window' before 'alert'*/
window.alert('Hello World');
alert('Hello World');
// ------------

/* PROMPT
   - similiar to alert, but takes in an input 
   - outputs an alert text box */
const input = prompt();
alert(input);
// ------------

/* CONFIRM
   - often used when you are deleting something
   - takes in perametor of the message  ---confirm()--goes inside */
if(confirm('Are you sure?')){
   console.log('YES');
} else {
   console.log('NO');
}
// -----------
