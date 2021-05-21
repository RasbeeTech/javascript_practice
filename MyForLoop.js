/*
  A function that acts like a For-loop.
*/


function loop(value, test, update, body){
  while (test(value)){
    body(value);
    value = update(value);
  }
}

console.log("loop():");
loop(3, n => n > 0, n => n - 1, console.log);
