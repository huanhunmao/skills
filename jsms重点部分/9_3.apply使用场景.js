// 1、Math.max 求数组最大值
// let max = Math.max.apply(null, [1, 7, 100]);
// let max = Math.max[(1, 7, 100)]; // undefined
// console.log(max); //100

// 2、实现两个数组合并
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1); // [1, 2, 3, 4, 5, 6]

// 第二种方法
var arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
