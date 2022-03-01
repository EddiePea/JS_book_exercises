
let getFirstName = (text) => {
  let input = prompt(text);
  return input;
}

let getSecondName = (text) => {
  let input = prompt(text);
  return input; 
}

let firstName = getFirstName("Enter your first name");
let secondName = getSecondName("Enter your second name");

console.log(`Good Morning, ${firstName} ${secondName}.`);
console.log(`Good Afternoon, ${firstName} ${secondName}.`);
console.log(`Good Evening, ${firstName} ${secondName}.`);
