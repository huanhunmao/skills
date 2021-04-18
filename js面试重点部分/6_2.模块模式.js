var counter = (function () {
  var i = 0;
  return {
    get: function () {
      return i;
    },
    set: function (val) {
      i = val;
    },
    increment: function () {
      return ++i;
    },
  };
})();
counter.get(); //0
counter.set(3);
counter.increment(); //4
counter.increment(); //5

conuter.i; //undefined (`i` is not a property of the returned object)
i; //ReferenceError: i is not defined (it only exists inside the closure)
