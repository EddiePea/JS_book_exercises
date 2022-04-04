/* This code uses a concise body arrow function expression on a single line. 
Note that both the return keyword and the curley braces are left out here. */

let squaredNum = num => num * num;

console.log(squaredNum(4));

/* Refactored to use arrow function syntax on multiple lines. Note that you still 
don't have to use parentheses around the arguments where there is only one. */

let squaredNum2 = num => {
  return num * num;
}

console.log(squaredNum2(5));

// Refactored to use the function keyword rather than arrow syntax

function squaredNum3(num) {
  return num * num;
}

console.log(squaredNum3(10));

/* Refactored so that the function logs the result to the console when invoked. 
Note that the return value of the function is still undefined because the return 
keyword hasn't been used. */

let squaredNum4 = num => {
  console.log(num * num);
}

squaredNum4(8);

// Refactored so that the exponentiation operator is used. 

let squaredNum5 = num => {
  return num ** 2;
}

console.log(squaredNum5(9));