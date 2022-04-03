/*let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed) - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
} */

// Always make sure that operators are within brackets when using if statements.

/* let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
} */ 

/* The error here is caused because of the use of parentheses: length is a string property 
not a string method (i.e. function), so length is called without parentheses. A Type ERror
is raised by the code because (i) the .length property returns a number so the program
expects a number and (ii) when we type .length() we are calling a function.  So the program 
expects a number, but gets a function call instead. */ 

let tweet = 'Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla Woohoo! :-) bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla ';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}



