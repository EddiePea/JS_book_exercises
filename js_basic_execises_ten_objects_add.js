let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 2;
fido['favourite food'] = 'rabbit';

console.log(fido);

/* NB note that when using a function as an object property, you give the 
property a key as per, then you use the function keyword plus any parameters.

A property value can be any valid expression, including a function expression.

When a value is a function and it's invoked with an explicit caller it's called 
a [METHOD INVOCATION].
*/

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(person) {
    console.log(`Hej, ${person}`);
  },
};

jane.greet('Bobby'); // Hej, Bobby!


/* The reason that 'it's true' never logs to the console here is that 
all property names are strings, while the body of our for/in loop is looking
for a boolean data type. 

*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

for (let prop in obj) {
  console.log(`${prop} (${typeof prop})`);
}


for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}