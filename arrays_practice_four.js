/*let array = [3, 5, 7];

let sumOfSquares = array.reduce((accumulator, currentValue) => {
  return accumulator + (currentValue * currentValue);
}, 0);

console.log(sumOfSquares); 

I can see that this doesn't work because it's not a function: it only works by reference to a specific array*/

let myArray = [3, 5, 7]

let sumOfSquares = array => {
  return array.reduce((accumulator, number) => {
  return accumulator + number * number;
});
}

console.log(sumOfSquares(myArray));

