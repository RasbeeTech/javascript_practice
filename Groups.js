/*
  A class that acts like the data structure Set.
*/

// Class.
class Group{
  constructor(){
    this.member = [];
  }
  add(value) {
    if(!this.member.includes(value)){
      this.member.push(value);
    }
  }
  delete(value){
    let index = this.member.indexOf(value);
    if(index > 0){
      this.member.splice(index);
    }
  }
  has(value){
    return this.member.includes(value);
  }
  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

// Testing.
console.log("class Group:")
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
