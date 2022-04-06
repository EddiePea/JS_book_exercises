// This code uses the filter method, which takes a callback function as an argument

let scores = [96, 47, 113, 89, 100, 102];

let filterBigNums = scores.filter(num => {
  return num >= 100;
});

console.log(filterBigNums.length);

// This version uses a for loop

let newArr = [];

let filterBigNums2 = arr => {
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] >= 100) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterBigNums2(scores).length);

/* This is LS's version. It shows me that I have misunderstood the exercises: they didn't want a new array 
of the elements greater than or equal to one, but a count of the number. I will modify the above code
accordingly. 

They've created a for loop which iterates over each element in the scores array. If that element is >= 100
then it inceases the value of the count variable (initalized with value 0) by 1. 

*/


let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count); 