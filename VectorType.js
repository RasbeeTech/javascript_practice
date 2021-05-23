/*
  A vector class that handles vector addition and subtraction.
*/

// Class.
class Vec {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  plus(otherVec){
    return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }
  minus(otherVec){
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }
  get length(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Testing.
console.log("class Vec:");
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
