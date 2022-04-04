let greeting = 'Aloha!';

for (let i = 1; i <= 3; i += 1) {
  console.log(greeting);
}

// The above snippet uses a for loop 

let counter = 1;

while (counter < 4) {
  console.log(greeting);
  counter += 1;
}

/* The above snippet uses a while loop. Often, a while loop is used 
where we want to execute the loop an undefined number of times. Unlike 
a for loop the iteration variable is declared before the loop and so has
global scope. */ 