/*
  A recursive function that determines if an integer is even.
*/

function isEven(num){
  if(num == 0){
    return true;
  } else if (num == 1){
    return false;
  } else {
    return isEven(num-2);
  }
}
