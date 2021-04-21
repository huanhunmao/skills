function Promise(fn) {
  let state = "pending";
  let value = null;
  const callbacks = [];

  this.then = function (onFulfilled) {
    return new Promise((resolve, reject) => {
      handle({
        //桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
        onFulfilled,
        resolve,
      });
    });
  };

  function handle(callback) {
    if (state === "pending") {
      callbacks.push(callback);
      return;
    }

    if (state === "fulfilled") {
      if (!callback.onFulfilled) {
        callback.resolve(value);
        return;
      }
      const ret = callback.onFulfilled(value); //处理回调
      callback.resolve(ret); //处理下一个 promise 的resolve
    }
  }
  function resolve(newValue) {
    const fn = () => {
      if (state !== "pending") return;

      state = "fulfilled";
      value = newValue;
      handelCb();
    };

    setTimeout(fn, 0); //基于 PromiseA+ 规范
  }

  function handelCb() {
    while (callbacks.length) {
      const fulfiledFn = callbacks.shift();
      handle(fulfiledFn);
    }
  }

  fn(resolve);
}
