Object.prototype.toString.call(1); // "[object Number]"

Object.prototype.toString.call("hi"); // "[object String]"

Object.prototype.toString.call({ a: "hi" }); // "[object Object]"

Object.prototype.toString.call([1, "a"]); // "[object Array]"

Object.prototype.toString.call(true); // "[object Boolean]"

Object.prototype.toString.call(() => {}); // "[object Function]"

Object.prototype.toString.call(null); // "[object Null]"

Object.prototype.toString.call(undefined); // "[object Undefined]"

Object.prototype.toString.call(Symbol(1)); // "[object Symbol]"
