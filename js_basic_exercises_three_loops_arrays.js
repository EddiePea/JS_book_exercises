let arr = [1,2,3,4];
let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i += 1;
}

/* The snippet above creates a while loop which loops over an array and logs each 
element of the array to the console provided that the stopping condition is met, 
namely that the index counted by the loop is less than the length of the array. */

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 
'Vienna', null, 'London', 
'Beijing', null];

for (i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i].length);
} 

/* The snippet above creates a for loop which loops over an array and logs the length
of each element of the array, whilst skipping over those elements which are equal to
null using the 'continue' keyword. */

for (i = 0; i < cities.length; i += 1) {
  if (cities[i] !== null) {
  console.log(cities[i].length);
  } 
}

/* This is another way of achieving the same thing. However, using the continue 
keyword is generally preferable becuase it may result in fewer nested if clauses. */

/* for (let i = 0; ; i += 1) {
  console.log("and on");
}

The code above does not contain a stopping condition, so JS treats the condition as 
evaluating to true. This means that there is an infinite loop (i.e. the program will 
continue to log 'and on' to the console) until the program is stopped by the user. */

for (let i = 1; i <= 1; i += 1) {
  console.log("and on");
}

for (let i = 1; ;i += 1) {
  console.log("and on");
  break; 
}

//Using the 'break' keyword gets to the same place. 

for (let i = 1; i <= 0 ;i += 1) {
  console.log("and on");
  break; 
}