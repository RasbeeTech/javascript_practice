/*
  The objective is to create a loop that makes seven calls to console.log
  to output a triagle shape.
*/

console.log("looping_triangle.js")

var building_block = '#';

for(let i = 0; i <= 7; i++){
  console.log(building_block);
  building_block += '#';
}
