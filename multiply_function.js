let multiplyFunction = function(num1, num2) {
  return num1 * num2;
}

let getNumber = (prompt) => {  
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let num1 = getNumber('Enter the first number: ');
let num2 = getNumber('Enter the second number: ');

console.log(`${num1} * ${num2} = ${multiplyFunction(num1, num2)}`);