var a = [1, 2];
var b = { a: 1 };
console.log(a instanceof Array); //true
console.log(b instanceof Object); //true

// 当然 数组也属于对象
console.log(a instanceof Object); //true
