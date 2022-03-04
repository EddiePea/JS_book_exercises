let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(number => {
  if(number % 2 === 0) { 
  console.log(number);
  }
}
)

for(let i = 0; i < myArray.length; i += 1) {
  let number = myArray[i];
  if (number % 2 === 0) {
    console.log(number);
  }
  }

