/*let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

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
  } */

  /*let myArray2 = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

  for(let i = 0; i < myArray2.length; i += 1) {
    for(let j = 0; j < myArray2[i].length; j += 1) {
      let number = myArray2[i][j];
      if (number % 2 === 0) {
        console.log(number);
      }
    }
  }

  myArray2.forEach(arr => {
    arr.forEach(num => {
      if(num % 2 === 0) {
        console.log(num)
      }
    });
   })*/

  /* let myArray3 = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

   let newArray3 = myArray3.map(element => {
     if(element % 2 === 0) {
       return 'even';
     } else {
       return 'odd';
     }
   })

   console.log(newArray3);*/

   let myArray4 = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
   let newArray4 = [];

   for(let i = 0; i < myArray4.length; i += 1) {
    let number = myArray4[i]; 
    if(number % 2 === 0) {
       newArray4.push('even');
     } else {
       newArray4.push('odd');
     }
   }

   console.log(newArray4);