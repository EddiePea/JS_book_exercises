let str1 = 'Hello, my name is Eddie';
let str2 = 'and I am enjoying Launch School!';

/*This is the simplest and optimal way of concatenating strings*/

console.log(str1 + ' ' + str2);

/*The concat function concatenates the string arguments to the calling string 
and returns a new string. Arguments not of the string type are converted to string
values before concatenation.

MDN strongly recommends that assignment operators are used instead of the concat() 
method*/

console.log(str1.concat(' ', str2));

