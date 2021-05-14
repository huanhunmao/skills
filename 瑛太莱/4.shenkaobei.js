function deepClone(obj) {
  if (typeof obj != "object" || obj == null) {
    return obj;
  }

  let result;
  if (result instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    if (obj.hasOwnProperty) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}

var obj = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 4,
    },
  },
};

var obj1 = deepClone(obj);
obj.b.d.e = 666;
console.log(obj1.b.d.e);
