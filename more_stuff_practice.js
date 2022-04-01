/*let matchFunc = (arr, regex) => {
  return arr.map(element => {
    if(regex.test(element)) {
      return element;
    }
  }
)};

*/

let arr1 = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

/*
console.log(matchFunc(arr1, /lab/)); 

//This was my solution above. Trying others below */

/*let allMatches = (arr, pattern) => {
  let matches = [];
  for (let index = 0; index < arr.length; index +=1) {
    if (pattern.test(arr[index])) {
      matches.push(arr[index]);
    }
  }
  return matches;
}

console.log(allMatches(arr1, /lab/)); */

let allMatches = (arr, pattern) => {
  return arr.filter((word) => pattern.test(word));
}

console.log(allMatches(arr1, /lab/));

