let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj.foo);

myObj.qux = 3;
console.log(myObj);

//Output here does not include the properties of the prototype

let objKeys = Object.keys(myObj);
objKeys.forEach(key => console.log(key));

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
  console.log(key);
}
}
