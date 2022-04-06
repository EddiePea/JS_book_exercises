let bmiCalculator = (weight, height) => {
  let answer = weight / (height / 100) ** 2; 
  console.log(answer.toFixed(2));
} 

bmiCalculator(57, 162);

// This version is a bit more compact

let bmiCalculator2 = (weight, height) => {
  console.log((weight / (height / 100) ** 2).toFixed(2));
}

bmiCalculator(42, 162);