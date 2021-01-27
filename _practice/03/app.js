// OBJECT LITERALS {}
const person = {
   firstName: 'Sidney',
   middleName: 'Lane',
   lastName: 'Shafer',
   age: 16,
   email: 'sidney@mnshafers.com',
   hobbies: ['programming', 'reading', 'sports', 'cooking', 'baking'],
   address: {
      city: 'Victoria',
      state: 'Minnesota',
      country: 'USA'
   },
   getBirthYear: function(){
      return 2020 - this.age;
   }
};

let val;

val = person;
console.log(val);

// Get Specific Value From Object
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.address['city'];
val = person.address.state;
val = person.hobbies[0];
val = person.getBirthYear();
console.log(val);

const people = [
   {name: 'Sidney', age: 16},
   {name: 'John', age: 42},
   {name: 'Sally', age: 23}
];

for(let i = 0; i < people.length; i++){
   console.log(people[i].name);
   console.log(people[i].age);
};
// ------------------------------------


// DATES AND TIMES
const today = new Date();
let birthday;

// All new Date() below are the same
birthday = new Date('3-30-2004 2:45:00');
birthday = new Date('March 30 2004');
birthday = new Date('3/30/2004');
console.log(birthday);

val = birthday;
val = today.toString(); /* output: todays date */
val = today.getDate(); /* output: date number (ex Dec. 2 = 2) */
val = today.getMonth(); /* output: month number (ex Dec. = 11) 
   ---- starts with january = 0.*/
val = today.getDay(); /* output: day number (ex Wed. = 3) */
val = today.getFullYear(); /* output: the year (ex 2020) */
val = today.getHours(); /* output: the hour it is (ex 11:00am = 11) */
val = today.getMinutes(); /* output: minutes of time (ex 11:41 = 41) */
val = today.getSeconds(); /* output: seconds of time */
val = today.getMilliseconds(); /* output: milliseconds of time */
val = today.getTime();
console.log(val);

// MANIPULATE DATES
birthday.setMonth(3); /* sets month to the 3rd month of the year */
birthday.setDate(25); /* sets day to the 25th */
birthday.setFullYear(2001); /* sets the year to 2000 */
birthday.setHours(11); /* sets the hour to 11 */
birthday.setMinutes(05); /* sets the minute to 5 */
birthday.setSeconds(59); /* sets the seconds to 59 */
console.log(birthday);