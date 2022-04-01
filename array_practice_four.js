let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = (sourceObject, keys) => {
  let destinationObject = {};

  if (keys) {
    keys.forEach(key => {
      destinationObject[key] = sourceObject[key];
    });
    return destinationObject; 
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

console.log(copyObj(objToCopy));
console.log(copyObj(objToCopy, ['foo']));

//I found this really tricky. I had to look straight to the example. 