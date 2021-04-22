// 第一种方法 set 内元素不能重复
// function test(arr) {
//   return [...new Set(arr)];
// }

// // 第二种方法 双指针
// function test(arr) {
//   // 注意这个地方 初始化数组 需要 写一个空数组
//   var result = [];
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//     for (var j = i + 1; j < len; j++) {
//       if (arr[i] == arr[j]) {
//         j = ++i;
//       }
//     }
//     result.push(arr[i]);
//   }
//   return result;
// }

// // 第三种方法  indexOf 这个 最简单实用
// function test(arr) {
//   var result = [];
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//     // 小于 0 表示 未找到 相同的元素
//     if (result.indexOf(arr[i]) < 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

function test(arr) {
  var result = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] == arr[j]) {
        j = ++i;
      }
    }
    result.push(arr[i]);
  }
  return result;
}

var arr = [1, 1, 1, 4, 5, 5];
console.log(test(arr)); //[1,4,5]
