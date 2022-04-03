for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//Expected output: 0, 2, 4, 6, 8, 10 

/* The general syntactical structure of a for loop involves: 
- [INITIALIZATION] => starts the loop and can be used to initialize the 
  iterator variable)
- [STOPPING CONDITION] => (this is the condition against which the iterator 
  varaible will be measured. When the stopping condition evaluates to false, 
  the loop will cease to run); 
- [ITERATION STATEMENT] => This is used to update the iterator variable on each loop. */

for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
  if (i === 1) {
    console.log('Launch!');
  }
}

/* In the code snippet above, I have included an if statement, so that 
the for loop logs all numbers from 10 to 1 to the console and logs 'Launch'
(as well as the number 1) when 1 is reached.*/

for (let i = 10; i >= 0; i -= 1) {
  if (i === 0) {
    console.log('Launch Please'); 
  } else {
    console.log(i);
  }
}

/* In this version of the code, I have used a different stopping condition, so
that the for loop stops running when i is greater than or equal to zero, and when 
i evaluates to zero then Launch is logged to the console (instead of i). */
