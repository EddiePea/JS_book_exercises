
let equipment = ['tent', 'water bottles', 'tent pegs'];
let missingEquipment = [];
let index = 0;

while (index < equipment.length) {
  let capsEquipment = equipment[index].toUpperCase();
  missingEquipment.push(capsEquipment);
  index += 1;
}

console.log(missingEquipment);

let counter = 1;

do {
  console.log(counter);
  counter += 1
} while (counter < 10);

let countString = 'hello there';
let i = 0;

do {
  countString = countString + i;
  i++;
  console.log(i);
} while (i < 5);
