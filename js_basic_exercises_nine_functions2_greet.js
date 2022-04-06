/* This function includes a default parameter, so that if no argument is 
passed to the function invocation, 'hello' is printed where the greeting
entered as an argument would otherwise go. 

Default parameters assign a default value to a parameter. This paramter
is used if the parameter is undefined. 

*/

let greet = (greeting = 'Hello') => {
  console.log(greeting + ', world!');
}

greet('Salutations');

greet();

/* If undefined is passed as an argument to the function invocation, then the 
default parameter is used.  

*/

greet(undefined); 

let greet2 = (greeting = 'Hello', person = 'world!') => {
  console.log(`${greeting}, ${person}`);
}

greet2();
greet2('Salutations');
greet2('Good morning', 'Launch School');

// Using callback functions 


let greeting = () => 'Good morning';
let recipient = () => 'Launch School';

let greet3 = () => {
  console.log(`${greeting()} ${recipient()}`);
}

greet3();