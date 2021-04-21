// 第一版
var curry = function (fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};

function add(a, b) {
  return a + b;
}

// 正常 传入 2个 参数
var addCurry = curry(add, 1, 2);
console.log(addCurry()); // 3
//或者
// 先传入一个参数 然后 再传一个
var addCurry = curry(add, 1);
console.log(addCurry(2)); // 3
//或者
// 使用 curry 传递一个参数
var addCurry = curry(add);
console.log(addCurry(1, 2)); // 3
