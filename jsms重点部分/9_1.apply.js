// 写法
// Function.apply(obj,[argArray])

func.apply(obj, [1, 2, 3]);
// func 接收到的参数实际上是 1,2,3

func.apply(obj, {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
});
// func 接收到的参数实际上是 1,2,3
