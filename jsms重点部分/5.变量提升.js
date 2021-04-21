// 1、打印全局对象 window
// console.log(this); //{} 打印全局window 对象

// //2、全局对象是由 Object 构造函数实例化的一个对象
// console.log(this instanceof Object); //true

// //3、浏览器环境 均可打印 出随机数  但是使用 node 执行 不行  为什么 ？ 暂不知
// console.log(Math.random());
// console.log(this.Math.random());

//4、全局对象宿主 node也打印不出来
// var a = 1;
// console.log(this.a); //1

//5、客户端 JavaScript 中，全局对象有 window 属性指向自身
var a = 1;
console.log(window.a);

this.window.b = 2;
console.log(this.b);
