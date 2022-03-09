let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = strings => {
  return strings.reduce((filteredArray, letters) => {
    let lengths = letters.length;
    if (lengths % 2 === 1) {
      filteredArray.push(lengths);
    }
    return filteredArray;
  }, []);
  }
  
console.log(oddLengths(arr));