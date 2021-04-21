// Otaku 御宅族，简称宅
function Otaku(name, age) {
  this.name = name;
  this.age = age;

  this.habit = "Games";
}

// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log("I am " + this.name);
};

var person = new Otaku("Kevin", "18");

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // 60

person.sayYourName(); // I am Kevin
