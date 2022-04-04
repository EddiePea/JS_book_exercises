let str = 'Captain Ruby';

console.log(str.replace('Ruby', 'Javascript'));

// This is definitely the very long way round... 

let newStr = (str1, str2) => {
  let arr = str1.split(' ');
  let newArr = arr.filter(element => element === 'Captain');
  newArr[newArr.length] = str2; 
  console.log(newArr.join(' ')); 
}

newStr('Captain Ruby', 'Javascript');

// Code refactored to use a different method 

console.log(str.substring(0, 8) + 'Javascript');

