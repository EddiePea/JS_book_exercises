let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

let bar = (arg1, arg2) => {
  arg1.a = 'hi there';
  arg2 = 'bye';
}

bar(foo, qux);

console.log(foo.a);
console.log(foo);
console.log(qux);