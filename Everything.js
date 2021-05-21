/*
  Function to implement the every() function:
*/

// Functions.
function every(arr, predicate){
  // Uses a loop.
  for(element of arr){
    if(!predicate(element)){
      return false;
    }
  }
  return true;
}

// Tests.
console.log("every():");

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
