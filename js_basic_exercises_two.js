let precedentTest = (sideName, num) => {
  console.log('Evaluating the ' + sideName + ' side');
  return num;
}

console.log(precedentTest('left', 6) / precedentTest('right', 2));

/* Here JS reads the program and logs the statement to the console because that 
is what the function does; it then logs the number to the console because (i) the function 
returns a number in each case and is called twice and (ii) the program (separately) logs the 
result of calling the function twice, with different arguments, and dividing the result.*/

console.log(precedentTest('left', 2) ** precedentTest('middle', 3) ** precedentTest('right', 2));

/* Here the unique exponentiation operator has right-associativity, which means that it starts 
on the right and works its way left. So you start with 3 to the power 2 (i.e. middle to the power 
right => 9) then go to 2 to the power 9 (i.e. left to the power of the result of middle to the 
power right => 2 to the power 9 => 512)*/ 