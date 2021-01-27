// WINDOW PROPERTIES / OBJECT

let val;

// OUTTER HEIGHT
val = window.outerHeight;
console.log(val);

// OUTER WIDTH
val = window.outerWidth;
console.log(val);

// INNER HEIGHT
val = window.innerHeight;
console.log(val);

// INNER WIDTH
val = window.innerWidth;
console.log(val);

/* SCROLL POINTS
   - scrollY = vertical axis 
   - scrollX = horizontal axis (scroll)*/
val = window.scrollY;
console.log(val);
val = window.scrollX;
console.log(val);
// ---------------------------------------------


// LOCATION OBJECT
// Window Location
val = window.location;
console.log(val);

// Location Hostname
val = window.location.hostname;
console.log(val);

// Location Port Number
val = window.location.port;
console.log(val);

// Location href - gives everything (protocol, hostname, port)
val = window.location.href;
console.log(val);

/* Location Search Parometers
   - shows nothing by default
   - shows query string */
val = window.location.search;
console.log(val);

/* REDIRECT
   - can redirect page
   - set the href
   - this example has google show up everytime the page is loaded */
//----------- window.location.href = 'http://google.com';

/* RELOAD
   - constantly reloads page */
//--------- window.location.reload();
// ----------------------------------------------


// HISTORY OBJECT
/* history.go()
   - passing in a -1 will take you back one site */
window.history.go(-1);

/* History Length
   - tells how many sites you have searched */
val = window.history.length;
console.log(val);
// ----------------------------------------------


// NAVIGATOR OBJECT
val = window.navigator;
console.log(val);

// Get appName
val = window.navigator.appName;
console.log(val);

// Get appVerison
val = window.navigator.appVersion;
console.log(val);

// Get userAgent
val = window.navigator.userAgent;
console.log(val);

// Get operating system / platform
val = window.navigator.platform;
console.log(val);

// Look at vendor
val = window.navigator.vendor;
console.log(val);

// Get language of browser
val = window.navigator.language;
console.log(val);