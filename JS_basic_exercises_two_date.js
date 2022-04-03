let start = Date.now();

console.log('starting timer...');

setTimeout(() => {
  let millis = Date.now() - start; 
  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`)
}, 2000);

/*The setTimeout function is a native JS function which sets a timer - a countdown
set in milliseconds - for the execution of a callback function, calling the
function on completion of the timer. It seems to take two arguments: the callback function 
and the timer amount.*/

