let myString = 'this is a fun game';
let arr = myString.split(' ');

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
}

console.log(arr.join(' '));

