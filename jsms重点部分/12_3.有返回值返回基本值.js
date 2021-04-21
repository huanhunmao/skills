function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return "handsome boy";
}

var person = new Otaku("Kevin", "18");

console.log(person.name); // undefined
console.log(person.habit); // undefined
console.log(person.strength); // 60
console.log(person.age); // 18
