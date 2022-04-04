let compareByLength = (str1, str2) => {
  if (str1.length > str2.length) {
    return 1;
  } else if (str1.length === str2.length) {
    return 0;
  } else {
    return -1;
  }
}

console.log(compareByLength('hello', 'what a palavar'));
console.log(compareByLength('patience', 'perseverance')); 
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));  

/* This is known as THREE WAY COMPARISION. It is often used in sorting 
algorithms to determine the order of the values that are sorted. */ 