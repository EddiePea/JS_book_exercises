// Using the slice method 

let removeLastChar = str => {
  return str.slice(0, -1); 
}

console.log(removeLastChar('Hello there'));

// Using the substring method 

let removeLastChar2 = str => {
  return str.substring(0, str.length -1);
}

console.log(removeLastChar2('Oh wow'));

/* Using the pop() and join() functions and Array.from to turn the string characters into 
separate elements of an array. */ 

let removeLastChar3 = str => {
  let arr = Array.from(str); 
  arr.pop(); 
  console.log(arr.join(''));
}

removeLastChar3('Oh my days');