let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let vehicleKeys = Object.keys(vehicle);

console.log(vehicleKeys);

/* Alternatively you can use a for / in loop. The for/in loop iterates over each 
property in the vehicle object. On each iteration, the property is added to the array
initialized to the vehicleKeys2 variable. 

*/

let vehicleKeys2 = [];

for (let prop in vehicle) {
  vehicleKeys2.push(prop);
}

console.log(vehicleKeys2);

// Converting an object into nested arrays. 

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let personArr = Object.entries(person);
console.log(personArr);

/* You can use a for/in loop instead. Here, the for/in loop iterates
over the object. For each object key, the code body of the for loop
pushes it to an empty array and also pushes in square bracketed elements 
to create the nested array. Not actually sure how this works...To return to.

*/ 

let personArr2 = [];

for (let prop in person) {
  personArr2.push([prop, person[prop]]);
}

console.log(personArr2);

//Start with nested array and return object. 


let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let newObj = Object.fromEntries(nestedArray);
console.log(newObj);

/* Or use a for loop. Here, the for loop iterates over each element of nested
array. Within the loop's code body, a variable (pair) is declared, which is 
initalized with the value of the element of nestedArray being looked at by 
the foor loop (i.e. each nested array). 

Then it creates an object key/value pair, by invoking the object name, with 
the first element of each nested array as the property name and assiging it 
the value of the second element in the nested array.

*/

let newObj2 = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  newObj2[pair[0]] = pair[1];
}

console.log(newObj2);
