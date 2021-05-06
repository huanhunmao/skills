for (var i = 0; i < 5; i.j++) {
  (function (i) {
    setTimeout(function () {
      console.log(i.j); //  没看懂 没人会这样用吧 浏览器会崩溃
    }, 0);
  })(i);
}
