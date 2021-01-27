const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Sidney';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + 'and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l')
val = firstName.lastIndexOf('l')

// charAt()
val = firstName.charAt('4')

//Get last charactor
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Sidney', 'Brad');

// includes()
val = str.includes('Hello');
val = str.includes('Goodbye');


console.log(val);