/*
  myRange(): A function that creates and array of integers ranging from the 
  given start and end numbers.
  mySum(): A function that returns the sum of all numbers in Array[Int].
*/

// Functions.

function myRange(start, end, step=1){
  let arr = [];
  if (start < end){
    for(let i = start; i <= end; i+= step){
      arr.push(i);
    }
  } else{
    for(let i = start; i >= end; i+= step){
      arr.push(i);
    }
  }
  return arr;
}

function mySum(arr){
  let total = 0;
  for(let num of arr){
    total += num;
  }
  return total;
}

// Tests.
console.log("myRange():");
console.log(myRange(1, 10));
console.log(myRange(1, 10, 2));
console.log(myRange(5, 2, -1));

console.log("mySum():");
console.log(mySum(myRange(1, 10)));
