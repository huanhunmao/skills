// 第一种写法
// var foo = {
//   value: 1,
// };

// function bar() {
//   console.log(this.value); //1
// }

// // 返回了一个函数
// var bindFoo = bar.bind(foo);

// bindFoo(); // 1

// 第二种写法
var foo = {
  value: 1,
};

function bar() {
  return this.value;
}

var bindFoo = bar.bind(foo);

console.log(bindFoo()); // 1
