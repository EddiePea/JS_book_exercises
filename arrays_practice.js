function equalsArray(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true; 
}

array1 = [1, 2, 3, 4];
array2 = [1, 2, 3, 4, 5];

console.log(equalsArray(array1, array2));