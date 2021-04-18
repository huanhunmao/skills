// 1、使用构造函数创建对象
// function Person() {}
// var person = new Person();
// person.name = "Kevin";
// console.log(person.name); // Kevin

// 2、prototype
// function Person() {}
// // 虽然写在注释里，但是你要注意：
// // prototype是函数才会有的属性
// Person.prototype.name = "Kevin";
// var person1 = new Person();
// var person2 = new Person();
// console.log(person1.name); // Kevin
// console.log(person2.name); // Kevin

// 3、__proto__
// function Person() {}
// var person = new Person();
// console.log(person.__proto__ === Person.prototype); // true

// 4、constuctor
// function Person() {}
// console.log(Person === Person.prototype.constructor); // true

// function Person() {}

// var person = new Person();

// console.log(person.__proto__ == Person.prototype); // true
// console.log(Person.prototype.constructor == Person); // true
// // 顺便学习一个ES5的方法,可以获得对象的原型
// console.log(Object.getPrototypeOf(person) === Person.prototype); // true

// 5、实例和原型
function Person() {}

Person.prototype.name = "Kevin";

var person = new Person();

person.name = "Daisy";
console.log(person.name); // Daisy

delete person.name;
console.log(person.name); // Kevin
