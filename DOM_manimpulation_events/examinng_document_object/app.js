let val

/* Document
   - gives us entire document (html) */
val = document
console.log(val)

/* ---- Not Valid Anymore (SEE NEXT EXAMPLE)
   - similiar to an array
   - gives a collection, starting at the top of the html document
   - can also access elements within the collection [0]
   - length = gives how many elements are in the file */
      val = document.all
      val = document.all[0]
      val = document.all.length
      console.log(val)

/* Used in place of document.all
   - gives collection
   - works with all properties from above */
val = document.getElementsByTagName('*')
   console.log(val)
val = document.getElementsByTagName('*')[0]
   console.log(val)
val = document.getElementsByTagName('*').length
   console.log(val)

// Can access just the <head>
val = document.head
console.log(val)

// Can access <body>
val = document.body
console.log(val)

// !DOCTYPE
val = document.doctype
console.log(val)

// Get domain
val = document.domain
console.log(val)

// URL
val = document.URL
console.log(val)

// Get Character Set (UTF-8)
val = document.characterSet
console.log(val)

// Get Content Type (text/html)
val = document.contentType
console.log(val)

// ---------------------------
// Select Elements Without Selectors ****NOT RECOMENDED****

// Forms
val = document.forms
val = document.forms[0] // --- index of [0] gives just the form
val = document.forms[0].id // --- gets the Id of the form
val = document.forms[0].method // --- gets the method (forms have two: Get or POST)
val = document.forms[0].action // --- gets the url of the action class
console.log(val)

// Links
val = document.links // --- gives collection of links
val = document.links[0] // --- gives first link in collection
val = document.links[0].id // --- gives Id of first link
val = document.links[0].className // --- gives class(es) of first link
val = document.links[0].classList // --- gives collection of class(es) of first link (DOMTokenList)
val = document.links[0].classList[0] // --- get specific class
console.log(val)

// Images
val = document.images
console.log(val)

// Scripts
val = document.scripts
console.log(val)

// Attribute
val = document.scripts[2].getAttribute('src') // --- gets the src of the file
console.log(val)

let scripts = document.scripts

let scriptsArray = Array.from(scripts)

scriptsArray.forEach(function(script) {
   console.log(script.getAttribute('src'))
})

