let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();
  console.log(checkedItem);
}

console.log(groceryList); 

// Another way of doing this using a for loop 

let groceryList2 = ['jelly', 'chicken', 'onion', 'bagels', 'carrots', 'broccoli', 'hummus'];

let checkOff = arr => {
  for (let i = 0; i < arr.length; ) {
    console.log(arr[i]);
    arr.shift(); 
  }
  return arr; 
}

console.log(checkOff(groceryList2));


