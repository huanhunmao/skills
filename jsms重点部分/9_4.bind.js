// 写法
// Function.bind(thisArg,[ arg1[, arg2[, ...]]])
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

console.log(add.bind(sub, 5, 3)); // 这时，并不会返回 8  没调用 [Function: bound add]
console.log(add.bind(sub, 5, 3)()); // 调用后，返回 8    后加小括号调用
