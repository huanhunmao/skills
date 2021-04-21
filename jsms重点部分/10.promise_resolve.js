function Promise(fn) {
  // ...
  this.resolve = function (value) {
    if (value && value instanceof Promise) {
      return value;
    } else if (
      value &&
      typeof value === "object" &&
      typeof value.then === "function"
    ) {
      let then = value.then;
      return new Promise((resolve) => {
        then(resolve);
      });
    } else if (value) {
      return new Promise((resolve) => resolve(value));
    } else {
      return new Promise((resolve) => resolve());
    }
  };
  // ...
}
