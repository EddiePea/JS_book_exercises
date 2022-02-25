let rlSync = require ('readline-sync');

let questionOne = rlSync.question("What is your first name, friend?");
let questionTwo = rlSync.question("What is your surname, friend?");

console.log(`Hello ${questionOne} ${questionTwo}, nice to meet you!`);
