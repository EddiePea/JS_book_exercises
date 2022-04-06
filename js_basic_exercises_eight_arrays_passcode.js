let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join('-'));

/* This method uses a for loop.  First, a variable is created (stringPasscode) which is initalized
with an empty string. 

Then a for loop iterate through each element of the passcode array. If the element is at an index 
of 1 or above, then a dash is added to the empty array.

In addition, on each iteration, each element of the passcode array is added to the empty array. 

*/

let stringPasscode = '';

for (let i = 0; i < passcode.length; i++) {
  if (i > 0) {
    stringPasscode += '-';
  }
  stringPasscode += passcode[i];
}

console.log(stringPasscode);