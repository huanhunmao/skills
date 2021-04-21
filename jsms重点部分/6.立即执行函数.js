function makeCounter() {
  var i = 0;
  return function () {
    console.log(++i);
  };
}

//记住：`counter`和`counter2`都有他们自己的变量 `i`

var counter = makeCounter();
counter(); //1
counter(); //2

var counter2 = makeCounter();
counter2(); //1
counter2(); //2

// i; //ReferenceError: i is not defined(它只存在于makeCounter里)
