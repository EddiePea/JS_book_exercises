let names = ['Eddie', 'Jamie', 'Emily', 'Constance'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
  index += 1;
}

console.log(upperNames);
