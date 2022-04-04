let greet = langCode => {
  switch (langCode) {
    case 'en':
      console.log('hello');
      break;
    case 'fr': 
      console.log('bonjour');
      break;
    case 'es': 
      console.log('ola');
      break; 
    case 'de': 
      console.log('hallo');
      break;
    default: 
      console.log('achtung!');
      break;
  }
}

greet('fr');

// Code refactored to make it more concise 

let greet2 = langCode => {
  switch (langCode) {
    case 'en': return 'hi';
    case 'fr': return 'bonjour';
    case 'es': return 'ola';
    case 'de': return 'hallo';
  }
}

console.log(greet2('bob'));

/* If you use return statements in the case clause you don't need to 
use the break statements: return will immediately exit from the 
function anyway. */ 

let extractLanguage = locale => {
  console.log(locale.slice(0,2));
}

extractLanguage('en_US.UTF-8');  
extractLanguage('en_GB.UTF-8');  
extractLanguage('ko_KR.UTF-16');

// Refactor the code to make it more reliable, e.g. if country code is 3 letters

function extractLang2(locale) {
  return locale.split('_')[0];
}

console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));

// Refactor the code to use a different method 

let extractLang3 = locale => {
 return locale.substring(0,2);
}

console.log(extractLang3('en_US.UTF-8'));
console.log(extractLang3('en_GB.UTF-8'));
console.log(extractLang3('ko_KR.UTF-16'));

/* Function to extract the region code using the split method chained to 
another iteration of the split method. 

The first time round, the split method returns an array of two elements:  
the characters up to but not including the full stop and the characters following 
the full stop. There is also a reference to the index value of the element
we want to return (i.e. the first element).

The second time round, the split method returns an array of two elements: the 
characters up to but not including the underscore and the characters following the 
underscore. There is also a reference to the index value of the element we want 
to return (i.e. the second element).

*/

let extractRegion = locale => {
  return locale.split('.')[0]
               .split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));  

// Using the substring method 

let extractReg2 = locale => {
  return locale.substring(3,5);
}

console.log(extractReg2('ko_KR.UTF-16'));

// Using the slice method 

let extractReg3 = locale => {
  return locale.slice(3,5);
}

console.log(extractReg3('ko_KR.UTF-16'));

/* Creates a function which takes a locale as an input and returns a greeting. 
Here we are using the functions we have already created inside a new function. 

First, we create a variable within our function called 'language' and initialize 
it with the extractLanguage function we have already created, passing the 'locale'
to it as an argument. 

Next, we create a variable within our function called 'region' and initialize 
it with the extractRegion function we have already created, passing the 'locale' 
to it as an argument. 

Then we create a switch statement, which takes the variable region as its (argument?).
The switch statements goes through the various region options to find a match. If 
there's a match, it returns the statement written in the relevant case clause. 
If there is no match, the default clause is executed, which invokes the greet function, 
passing the variable language to it (i.e. the extracted language code) as an argument.

*/

let localGreet = locale => {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'hi';
    case 'EN': return 'good day';
    case 'AT': return "g'day mate";
    case 'DE': return 'ja hallo';
    default: return greet(language);
  }
}

localGreet('ko_KR.UTF-16');

/* This way of doing it is more nuanced. */

let englishGreet = region => {
  switch (region) {
    case 'US' : return 'Hey!'
    case 'GB' : return 'Hello!';
    case 'AU' : return "G'day!";
    case 'CA' : return 'Heyo!';
  }
}

let greetings = (langCode, region) => {
  switch (langCode) {
    case 'en' : return englishGreet(region);
    case 'fr' : return 'Salut!';
    case 'pt' : return 'Ola!';
    case 'de' : return 'Ja, hallo!';
  }
}

let localGreet2 = locale => {
  let langCode = extractLanguage(locale);
  let region = extractRegion(locale);

  return greetings(langCode, region);
}

console.log(localGreet2('en_US.UTF-8'));