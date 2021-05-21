
// 本节展示变量声明+解构 主要说说 为啥用 let const 取代 var 


//第一部分 变量声明 
// 1、问题一 var 会产生 意外结果
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// 解决方法一 使用立即执行函数包裹
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// 解决方法二 使用 let 块作用域
for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}


// 2、var 问题二 会产生全局变量污染   var声明会导致  变量在命名空间或全局作用域内部任何位置被访问
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'





// let 是 块作用域 
//当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的

// 第一个简单的例子  未声明就使用会报错 
a++; // illegal to use 'a' before it's declared;
let a;


// 第二个例子
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}


// 注意这个地方的 catch(e) 也具备 块作用域规则

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e);



// 另外一个重要的区别  重定义及屏蔽

//使用var声明时，它不在乎你声明多少次；你只会得到1个
function f(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}

// 不能在1个作用域里多次声明`x`
let x = 10;
let x = 20; // 错误，不能在1个作用域里多次声明`x`



// const 表示 基本不会更改值时用 比let 还有严格 








// 第二部分   解构


// 解构数组
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

//函数参数解构
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input);


// 剩余变量

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

//  甚至这样都可以 
let [, second, , fourth] = [1, 2, 3, 4];


// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

// 就像数组解构，你可以用没有声明的赋值：
({ a, b } = { a: "baz", b: 101 });


// 属性重命名
let {a, b}: {a: string, b: number} = o;


//默认值 
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}


//函数声明
type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}


// 展开
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];