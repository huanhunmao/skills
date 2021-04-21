// 1、第一个例子
// let Person = function () {};
// let nicole = new Person();
// console.log(nicole instanceof person); // true

// 2、第二个例子
// let Person = function () {};
// let Programmer = function () {};
// //通过原型链 将两者连在一起了
// Programmer.prototype = new Person();
// let nicole = new Programmer();
// console.log(nicole instanceof Person); // true
// console.log(nicole instanceof Programmer); // true
