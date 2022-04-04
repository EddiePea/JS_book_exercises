let myArray = ['Eddie', 'Emma', 'Edward', 'Bob'];

let firstElement = arr => {
 return arr[0]; 
}

console.log(firstElement(myArray));

//This would return undefined if the input array were empty. 

let lastElement = arr => {
  return arr[arr.length-1];
}

console.log(lastElement(myArray));

// Removing and adding elements of an array 

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
console.log(energy);

console.log(energy.concat('geothermal'));
energy.push('gas');
console.log(energy);

// Splitting a string into an array of characters

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(alphabet.split(''));
console.log(Array.from(alphabet)); 