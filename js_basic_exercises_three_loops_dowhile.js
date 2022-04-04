let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

/* This is a while statement. Here, the iteration variable is assigned 
the starting value 0. The counter reduces in increments of 1 on each iteration 
of the loop. When this code is executed, nothing happens because the condition 
is already met, i.e. the counter starts at 0. 

*/

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

/* This is a do while statement. Although it appears to suffer from the same 
fault as the code above, it will actually log the string to the consol once 
becuase the code in the code body will always execute at least once before the
stopping condition is evaluated, even if it is already met. This returns the 
number that the counter gets to after the final iteration of the loop, so here -1 . */