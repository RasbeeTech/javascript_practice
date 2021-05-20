/*
  Functions for reversing arrays.
*/

function reverseArray(arr){
  let new_arr = [];
  for (let i = arr.length-1; i >= 0; i--){
    new_arr.push(arr[i]);
  }
  return new_arr;
}

console.log("reverseArray():");
console.log(reverseArray([1, 2, 3, 4, 5, 6]));
