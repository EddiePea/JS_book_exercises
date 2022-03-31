let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let bigKeys = objKeys.map(key => key.toUpperCase());

console.log(objKeys);
console.log(bigKeys);

//Trying the forEach method for comparison 

let upperKeys = [];
objKeys.forEach(key => {
  upperKeys.push(key.toUpperCase());
});

console.log(upperKeys);