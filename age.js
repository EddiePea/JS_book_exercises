let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age?\n'));
let timePast = 10;

console.log(`In ${timePast} years, you will be ${age + timePast} years old.`);
console.log(`In ${timePast * 2} years, you will be ${age + (timePast * 2)} years old.`);
console.log(`In ${timePast * 3} years, you will be ${age + (timePast * 3)} years old.`);
console.log(`In ${timePast * 4} years, you will be ${age + (timePast * 4)} years old.`);
