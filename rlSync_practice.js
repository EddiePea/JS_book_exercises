let rlSync = require('readline-sync');

let name = rlSync.question('What is your name?\n');
let age = Number(rlSync.question('Enter your age\n'));
let city = rlSync.question('Where do you live?\n');
let currentYear = new Date().getFullYear();

console.log(`My name is ${name} and I am ${age} years old. 
I was born in around ${currentYear - age} (plus or minus a year) 
and I live in ${city}.`);

/*This doesn't quite work as you need the current month and the birth 
month to calculate birth year exactly*/
