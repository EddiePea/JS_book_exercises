let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

let findChar = (string, char) => {
 let lowerCaseString = string.toLowerCase();
 if (lowerCaseString.includes(char)) {
   console.log(`It contains ${char}!`);
 } else {
   console.log(`It does not contain ${char}.`);
 }
}

findChar(byteSequence, 'x');

//The problem with the code below is that it is case sensitive 

console.log(/x/.test(byteSequence));

// A function which checks whether a string is empty. 

let isBlank = string => {
  if (string === '') {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(''));
console.log(isBlank(' '));
console.log(isBlank('hello'));

/* Another way of doing this is to check the length of the string. If a string
contains nothing (e.g. not even spaces), then it will have a length of zero. */

let isBlank2 = string => string.length === 0;

console.log(isBlank2(''));

// Another way is to make use of the fact that an empty string evaluates to false.

let isBlank3 = string => console.log(!string);

isBlank3('');
isBlank3(' ');
isBlank3('hello');

// Changing the function to return 'true' if string is empty or contains only white space.

let isBlank4 = string => {
  let newString = string.trim();
  if (newString.length === 0) {
    return true; 
  } else {
    return false; 
  }
}

console.log(isBlank4(' '));
console.log(isBlank4('yes'));
console.log(isBlank4(''));

// A neater way of doing this using method chaining and the fact that statements evaluate to booleans.

let isBlank5 = string => {
  return string.trim().length === 0;
}


/*Code to capitalize the first letters in a sentence. What I've done here is to create a function which takes
a single parameter (string). 

Within that function, I've declared a variable arr, which is initialized with the return value of invoking the 
split function on the string. The effect of that is to return an array of the individual parts of the string. 

Then I added a for loop, which loops through the array and reassigns each element in the array so that for each 
element of the array, the first letter is capitalized and the rest of the word is added back to it. 

Then the join function is applied to array, so that the new elements (transformed by the for loop) are then added
to a new string and separated by a space.  

*/

let str = 'launch school tech & talk';

let capitalFunction = string => {
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return arr.join(' ');
}

console.log(capitalFunction(str));

/* Here is another way of doing this. Here we declare a variable (words) which is 
initialized with the return value of calling the split method on the string. This produces
an array of the words in the string. 

We then declare a varaible (capitalizedWords) which is initialized with an empty array. 

Then we create a for loop. First, a new variable (word) is declared, and initialized with 
the value of the element at the index position given at each iteration for the 'words' variable 
(i.e. the new array).

Then to the empty array at capWords is added the word indicated by the word variable at each 
iteration, with its first character capitalized, plus the rest of the word if you start it from the 
second character. 

Then you turn the resulting array into a string. 

*/

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

console.log(capitalizedWords.join(' '));


