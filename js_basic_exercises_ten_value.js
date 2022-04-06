let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

/*You can access a property value using dot notation or bracket notation 
You are encouraged to use dot notation where possible. */ 

console.log(student.courses);
console.log(student['courses']);

/* NB If you try to access an object property that does not exist, you get
a return of undefined. It does not raise an exception. */

console.log(student.gender);

//Retrieving values ex.2 

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country);
console.log(jane['location']['country']);
console.log(jane['location'].country);

//NB the value of the property location is another object. 