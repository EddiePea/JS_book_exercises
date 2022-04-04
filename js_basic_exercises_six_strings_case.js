let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

let compareStrings = (str1, str2) => {
  if (str1.toUpperCase() === str2.toUpperCase()) { 
    console.log('Match!')
  } else {
    console.log('These are not the same');
  }
//I've used toUpperCase because there can be issues converting certain characters into lowercase. 
}

compareStrings(string1, string2);
compareStrings(string2, string3);



