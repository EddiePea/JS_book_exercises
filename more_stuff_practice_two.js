let findNegZero = num => {
  if (num !== 0) {
    return false;
  }
  else if (1/0 === 1/num) {
    return false; 
  }
  else {
    return true;
  }
}

console.log(findNegZero(6349));

/* There is a simpler way of doing this below */

let isNegZero = value => {
  return (value === 0) && (1 / value === -Infinity);
}

console.log(isNegZero(-0));

/* And another, even simpler way */

let isNegZeroSimple = value => {
  return (1 / value === -Infinity);
}

console.log(isNegZeroSimple(-0));