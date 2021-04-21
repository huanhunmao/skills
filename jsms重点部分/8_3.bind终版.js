Function.prototype.bind2 = function (context) {
  // 判断不是函数就报错
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  //拿到this
  var self = this;
  //   拿到第一个方法
  var args = Array.prototype.slice.call(arguments, 1);

  //需要一个中间函数
  var fNOP = function () {};

  // 判断后连起来
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  //返回结果
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

// 练习写一遍
Function.prototype.bin2 = function (context) {
  if (typeof this !== "Function") {
    return new Error("this is not a function");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};
  var fBound = function () {
    var bondArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bondArgs)
    );
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
