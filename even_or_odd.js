function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, your number entry is invalid. Please use a whole number');
    return;
  } 
  
  if(number % 2) {
    console.log('odd');
  } else {
    console.log('even');
  }
}

evenOrOdd(10);

function capLongString(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capLongString("Hello Sir"));
console.log(capLongString("Hello Sir Launcelot"));
console.log(capLongString("Hello Green Knight"));

function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(capsLong("yo yo yo, ho ho ho"));
console.log(capsLong("hello"));