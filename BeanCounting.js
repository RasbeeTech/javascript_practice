/*
  A function to count the number of "B"s in a given string.
*/

function countBs(string) {
  count = 0;
  for(let i = 0; i <= string.length -1; i++){
    if(string[i] === 'B'){
      count++;
    }
  }
  return count;
}

/*
  A function that counts the occurences of a specified character in string.
*/
function countChar(string, char) {
  count = 0;
  for(let i = 0; i <= string.length -1; i++){
    if(string[i] === char){
      count++;
    }
  }
  return count;
}
