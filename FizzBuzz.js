/*
  The purpose of this program is to print to console, numbers 1 to 100.
  For numbers divisible by 3, 'Fizz' will be printed instead.
  For numbers divisible by 5, 'Buzz' will be printed instead.
  For numbers divisible by 3 and 5, 'FizzBuzz' will be printed instead.
*/

console.log("fizzBuzz.js")

for(let i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  } else if (i % 3 == 0){
    console.log("Fizz");
  } else if (i % 5 == 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
