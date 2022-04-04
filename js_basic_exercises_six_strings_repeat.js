/* This method creates a function (repeat) which has two parameters (count and string). 
In the function body, a new variable is declared, initialized with an empty string. 

Then a while loop is created. The conditional statement for the while loop (during which it 
  will continue to run) is that the count is greater than zero. 
  
  In the code body of the while loop, it states that each time the loop runs, the variable 
  repeatedString (the empty string) should have the string (passed to the function as an argument) 
  added to it. 

  Also, each time the loop runs, the count is reduced by one. That means that the while loop
  should go through the number of iterations passed as an argument to the function and then stop. 
*/

let repeat = (count, str) => {
  let repeatedString = '';

  while (count > 0) {
    repeatedString += str;
    count --;
  }
  return repeatedString;
}

console.log(repeat(3,'abc'));

/* This method is more complex and uses conditional statements and recursion. 
First, as above, we declare a function which takes two arguments. The in the function 
body we include an if / else statement.  

The first if statement ensures that if the number passed as an argument to the function 
for 'count' is less than or equal to 0, then an empty string will be returned.

The second if statement ensures that if the number passed as an argument to the function 
for 'count' is 1, then the string passed as the second arg to the function for 'string' 
will be repeated once. 

The else statement requires that (i) the string passed as an arg to the function is returned
plus (ii) the return value of the repeat two function, with the count passed to the function 
as an arg initially minus 1 and the same string passed as an arg originally. 

*/

let repeat2 = (count, str) => {
  if (count <= 0) {
    return "";
  } 
  if (count === 1) {
    return str;
  } else {
    return str + repeat2(count -1, str);
  }
}

console.log(repeat2(3, 'bob'));

// You can also use a for loop 

let repeat3 = (count, str) => {
  let repeatedString = "";
  for (let i = 1; i <= count; i += 1) {
    repeatedString += str;
  }
  return repeatedString;
}

console.log(repeat3(5,'hi'));