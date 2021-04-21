var person = [{ name: "kevin" }, { name: "daisy" }];
var name = person.map(function (item) {
  return item.name;
});
console.log(name); //[ 'kevin', 'daisy' ]

// 柯里化写法 缺 carry函数
var prop = curry(function (key, obj) {
  return obj[key];
});

var name = person.map(prop("name"));
console.log(name);
