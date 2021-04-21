// 1、对象的继承
// function superClass() {
//   this.a = 1;
//   this.print = function () {
//     console.log(this.a);
//   };
// }

// function subClass() {
//   superClass.call(this);
//   this.print();
// }

// subClass();
// 1

// 2、借用方法
let domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
console.log(domNodes);
