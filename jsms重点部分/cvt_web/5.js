for (var i = { j: 0 }; i.j < 5; i.j++) {
  (function (i) {
    setTimeout(function () {
      console.log(i.j); // 0 1 2 3 4 取决于j的值
    }, 0);
  })(JSON.parse(JSON.stringify(i)));
}

// 需要注意一件事情
var obj = { j: 2 };
var test1 = JSON.stringify(obj);
var test2 = JSON.parse(test1);
console.log(test1); //{"j":2}
console.log(test2); //{ j: 2 }
