let mixedArray = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let findIntegers = array => {
  return array.filter(number => {
    return Number.isInteger(number); 
});
}

console.log(findIntegers(mixedArray));


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = strings => {
  let lengths = strings.map(letter => letter.length); 
  let oddLengths = lengths.filter(number => number % 2 === 1);
  return oddLengths;
}

console.log(oddLengths(arr));

