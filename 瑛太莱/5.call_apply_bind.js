// 本节展示 call bind apply 区别和 bind手写方法
Function.prototype.bind1 = function () {
  // 1、将参数解析为数组
  const args = Array.prototype.slice.call(arguments);
  // 2、获取 this 数组第一项
  const t = args.shift();
  //  3、 this就是 fn1.bind()的 fn1
  const self = this;
  // 4、返回一个函数 并使用self.apply(t, args)
  return function () {
    return self.apply(t, args);
  };
};

// 测试
function fn1(a, b, c) {
  console.log("this", this); //this { x: 100 }
  console.log(a, b, c); //10 20 30
  return "this is fn1"; // this is fn1
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
const res = fn2();
console.log(res);
