// // 1、
// function foo() {
//   console.log(a);
//   a = 1;
// }

// foo(); // ???  报错 a is not defined

// // 2、
// function bar() {
//   a = 1;
//   console.log(a);
// }
// bar(); // ???  1

// 3、
console.log(foo); //[Function: foo]

function foo() {
  console.log("foo");
}

var foo = 1;
