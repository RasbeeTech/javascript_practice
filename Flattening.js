/*
  A function to combine and array of arrays.
*/

function flatten(arr){
  return arrays.reduce((flat, current) => flat.concat(current));
}

console.log("flatten():");

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
