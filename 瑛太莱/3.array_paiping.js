// 以下演示数组拍平的方式
// 方法一 递归法
// function fn(arr) {
//   let arr1 = []; // 结果数组定义

//   arr.forEach((val) => {
//     if (val instanceof Array) {
//       arr1 = arr1.concat(fn(val));
//     } else {
//       arr1.push(val);
//     }
//   });

//   return arr1; //返回结果数组
// }

// 方法二 递归 + reduce
// function fn(arr) {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(Array.isArray(cur) ? fn(cur) : cur);
//   }, []);
// }

// 方法三
let arr1 = arr
  .toString()
  .split(",")
  .map((val) => {
    return parseInt(val);
  });
console.log(arr1);

var arr = [1, 2, [3, 5, [7, 9]]];
console.log(fn(arr)); // [ 1, 2, 3, 5, 7, 9 ]
