let brendanEichQuote = () => {
  console.log('Always bet on Javascript');
}

brendanEichQuote();

/* The return value of a function is, by default, undefined, unless you explicitly 
require it to return a particular value using the return keyword. */

// Another way of writing this code: 

function brenEQuote() {
  console.log('This is a different way of writing the code');
}

brenEQuote();

let cite = (person, quote) => {
  console.log(`${person} said "${quote}"`);
}

cite('Brendan Eich', 'Always bet on Javascript.');

// Another way of writing this code: 

function cite2(person, quote) {
  console.log(`${person} said "${quote}".`);
}

cite2('Malory Archer', "Like you'd recognise a vegetable that wasn't wrapped in a Monte Cristo sandwich.");

/* Another way of writing this code that uses string concatenation rather than 
a template literal. */

let cite3 = (person, quote) => {
  console.log(person + ' said: "' + quote + '".');
}

cite3('Sterling Archer', 'Read a book!');