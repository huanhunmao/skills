// 第一种情况
// var 里面闭包出不来   出来时候 i = 3
// 改成 let 或者 立即执行函数 问题解决 打印 0 1 2
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

console.log(data[0]()); //3
console.log(data[1]()); //3
console.log(data[2]()); //3

// 第二种情况 立即执行函数
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
    return function () {
      console.log(i);
    };
  })(i);
}

console.log(data[0]()); //0
console.log(data[1]()); //1
console.log(data[2]()); //2
