let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));
age = parseInt(age);

console.log(`You are ${age} years old.`);
for(let timePast = 10; timePast <=40; timePast += 10) {
  console.log(`In ${timePast} years, you will be ${age + timePast} years old.`);
}

