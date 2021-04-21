// 写法
// Function.call(obj,[param1[,param2[,…[,paramN]]]])
var obj = {};
function func(a, b, c) {}

func.call(obj, 1, 2, 3);
// func 接收到的参数实际上是 1,2,3

func.call(obj, [1, 2, 3]);
// func 接收到的参数实际上是 [1,2,3],undefined,undefined
