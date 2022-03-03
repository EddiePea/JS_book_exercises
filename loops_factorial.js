function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *=counter;
  }
  return result;
}

console.log(factorial(3)); 

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(4));
console.log(factorial(5));