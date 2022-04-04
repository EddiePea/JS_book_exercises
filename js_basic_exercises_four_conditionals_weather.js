let weather = 'foggy';

if (weather === 'sunny') {
  console.log("It's a beautiful day!");

} else if (weather === 'rainy') {
  console.log("Grab your umbrella");

} else {
  console.log("Let's stay inside.")
}

//Refactoring the above code to use a switch statement

switch (weather) {
  case 'sunny': 
    console.log("It's a beautiful day!");
    break; 
  case 'rainy':
    console.log("Grab your umbrella");
    break;
  case 'foggy': 
    console.log("Turn on your headlights if driving!");
    break; 
  case 'windy': 
    console.log("Wear pants today!");
    break;
  default: 
    console.log("Whatever the weather, have fun!");
    break;
}

/* The switch statement evaluates the expression passed to it. When 
it finds a case clause matching that expression, the code within 
that case clause is executed. If the value of the expressoin 
provided does not match any case clause, the default clause is
executed. */ 
