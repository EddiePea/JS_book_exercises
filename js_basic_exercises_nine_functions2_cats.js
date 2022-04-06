//This version uses conditional/ if statements 

/*let catAge = humanYears => {
 
  if (humanYears < 1) {
   console.log(0);

  } else if (humanYears < 2) {
    console.log(15);

  } else if (humanYears < 3) {
   console.log(24);
  
  } else {
   console.log(24 + (humanYears - 2) * 4);
  }
}

catAge(0); 
catAge(1); 
catAge(2); 
catAge(3); 
catAge(4); */

/* This version uses a switch statement. Note because we are explicitly returning
from each case statement, break isn't needed. */

let catAge2 = humanYears => {
  switch(humanYears) {
    case 0: 
      return 0; 
    case 1: 
      return 15; 
    case 2:
     return 24; 
    default: 
      return 24 + (humanYears - 2) * 4;
  }
}

console.log(catAge2(0)); 
console.log(catAge2(1)); 
console.log(catAge2(2)); 
console.log(catAge2(3)); 
console.log(catAge2(4)); 
