let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  let contains = (city, arr) => {
   for (i = 0; i < arr.length; i++) {
     if (city === arr[i]) {
       return true;
      }
     }
     return false; 
    }

console.log(contains('London', destinations));

// Trying a different approach using the filter() method below.

let contains2 = (city, arr) => {
  let filteredArr = arr.filter(element => element === city);
  if (filteredArr[0] === city) {
    return true;
  } else {
    return false;
  }
}

console.log(contains2('Belgium', destinations));

/* This aproach uses the indexOf method. So the function body asks the program to return 
the return value of a statement. 

The indexOf method returns the first index at which a given element can be found in an array or -1 if 
it cannot be found. So here the city is passed as an argument to the indexOf method and the program 
is asked to evaluate whether the return value of that method call is greater than or equal to zero (i.e.
if 'city' is present in the array) which will be true, or if the return value is -1 (becuase city is not 
present), which will evaluate to false. 

*/

let contains3 = (city, arr) => {
  return arr.indexOf(city) >= 0;
}

console.log(contains3('Devizes', destinations));