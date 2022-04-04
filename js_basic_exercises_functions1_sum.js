//This way of writing the code actually RETURNS the sum. 

let sumFunc1 = (num1, num2) => {
 return num1 + num2;
}

console.log(sumFunc1(22, 10));

//Another way of writing this code: 

let sumFunc2 = (num1, num2) => {
  console.log(num1 + num2);
}

sumFunc2(10, 16);

//Another way of writing this code: 

function sumFunc3(num1, num2) {
  return num1 + num2;
}

console.log(sumFunc3(6, 8));

//Another way of writing this code: 

let sumFunc4 = (num1, num2) => console.log(num1 + num2);

sumFunc4(100, 200);

