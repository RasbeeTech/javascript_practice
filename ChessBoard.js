/*
  The chessboard program creates a chessboard like grid.
*/

console.log("ChessBoard.js")

// Define dimensions of grid.
var length = 8
var width = 8

// Use nested for-loop to create grid.
for(let i = 0; i < length; i++){
  // Declare empty string variable on each loop.
  var stringRow = '';
  for(let j = 0; j < width; j++){
    // Place white and black on even and odd spaces respectively.
    if(i % 2 == 0){
      if(j % 2 == 0){
        stringRow += ' ';
      } else {
        stringRow += '#';
      }
    } else {
      if(j % 2 != 0){
        stringRow += ' ';
      } else {
        stringRow += '#';
      }
    }
  }
  console.log(stringRow);
}
