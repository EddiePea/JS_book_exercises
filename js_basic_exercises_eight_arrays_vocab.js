let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// This is a nested array (aka a 2D array)


for (let i = 0; i < vocabulary.length; i++) {
  let words = vocabulary[i];

  for (let j = 0; j < words.length; j++) {
    console.log(words[j]);
    }
  }

/* In the code above, there is a for loop nested inside the other for loop.
The outer for loop accesses each of the nested arrays.  

Within that outer for loop, a variable 'words' is declared to contain each of
the nested arrays. 

The inner for loop iterates through each of the elements in each of the nested 
arrays. It then logs each of the elements of each of the nested arrays. */

vocabulary.forEach(arr => arr.forEach(word => console.log(word)));

/* This version uses the forEach method. First, forEach is invoked on the vocab
array. It loops through each element of the array and for each of those elements 
it then calls forEach on that nested array.  The inner forEach function then logs
each of the individual words in each nested array. */ 