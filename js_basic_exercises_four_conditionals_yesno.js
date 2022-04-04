let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No');
}

/* There is a much simpler way of doing this, set out below.  It takes advantage
of the fact that 0 evaluates to false (i.e. it is falsy). That means that just 
putting the variable name in the if statement will suffice: the value assigned
to that variable when the program is run will either be 1 (truthy) or 0 (falsy).
If it is truthy, then the first part of the code body will be executed; otherwise. 
if it is falsy, then the else part of the code body will be executed. */

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No');
}

/* The code below rewrites the code above using the ternary operator. Remember
that the syntactical structure of the ternary operator is [CONDITION] ? [EXPRESSION 1] 
(evaluated if condition is truthy) : [EXPRESSION 2] (evaluated if condition is falsy). */

randomNumber ? console.log('Yes!') : console.log('No');

/* The code below rewrites the code above so that it becomes even cleaner, 
reducing the repetition of console.log. Since the code passed to the console.log 
function evaluates to a string, then it can be passed as an argument to it. */

console.log(randomNumber ? 'Yes!' : 'No');