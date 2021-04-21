var twoSum = function (numbers, target) {
  // 边界 条件
  if (numbers == null) return null;
  // 简化
  var len = numbers.length;
  //   两个指针 一个从0开始 一个从最右边开始
  var i = 0,
    j = len - 1;
  // 左指针小于右指针执行
  while (i < j) {
    //   求和
    var sum = numbers[i] + numbers[j];
    if (sum == target) {
      return [i + 1, j + 1];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }

  return null;
};

// 第二种方法 二分查找法
var twoSum = function (numbers, target) {
  // 二分查找法  找到中间值 并和中间值进行对比
  var len = numbers.length;
  var left = 0;
  var right = len - 1;
  // 中间值初始化 为0
  var mid = 0;
  // 循环 只使用一个 指针
  for (var i = 0; i < len; i++) {
    left = i + 1;
    while (left <= right) {
      // 找到中间值
      mid = parseInt((right - left) / 2) + left;
      if (numbers[mid] == target - numbers[i]) {
        // 注意返回值 i+1 mid +1
        return [i + 1, mid + 1];
        // 目标值太大 往左移动
      } else if (numbers[mid] > target - numbers[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
};

console.log(twoSum([2, 3, 4, 7, 9], 5));
