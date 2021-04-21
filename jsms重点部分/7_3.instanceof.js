function Foo() {}
var foo = new Foo();
Object instanceof Object; // true
Function instanceof Function; // true
Function instanceof Object; // true
console.log(Foo instanceof Foo); // false
console.log(foo instanceof Foo); // true
console.log(foo instanceof foo); // 报错！！！
Foo instanceof Object; // true
Foo instanceof Function; // true
