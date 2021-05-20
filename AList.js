/*
  arrayToList(): Function to convert an array to a list.
  listToArray(): Function to convert a list to an array.
  prepend(): Function to add a value to the beginning of a list.
  nth(): Function that returns the value of the given position in a list.
  recursiveNth(): is the same as function nth() except it uses recursion.
*/

// Functions:
function arrayToList(arr){
  // Use Recursion to create list from an Array.
  if(arr[0] == null){
    return null;
  } else {
    return {value: arr[0], rest: arrayToList(arr.slice(1))};
  }
}

function listToArray(list){
  arr = [];
  while(list != null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(element, list){
  return {value: element, rest: list};
}

function nth(position, list){
  index = 0;
  while(index <= position && list != null) {
    if(index == position){
      return list.value;
    }
    list = list.rest;
    index += 1;
  }
  return undefined;
}

function recursiveNth(position, list){
  if(position == 0){
    return list.value;
  } else {
    return recursiveNth(position - 1, list.rest);
  }
}

// Testing:
aList = arrayToList([1,2,3,4,5]);
console.log("arrayToList():")
console.log(aList);

console.log("listToArray():");
console.log(listToArray(aList));

console.log("prepend():");
console.log(prepend(10, aList));

console.log("nth():");
console.log(nth(1, aList));

console.log("nth():");
console.log(recursiveNth(0, aList));
