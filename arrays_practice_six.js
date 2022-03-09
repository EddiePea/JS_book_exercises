let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

let checksForThree = array => {
  return array.includes(3);
}

console.log(checksForThree(numbers1));
console.log(checksForThree(numbers2));
console.log(checksForThree(numbers3));