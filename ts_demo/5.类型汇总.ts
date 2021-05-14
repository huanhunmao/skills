//本节展示ts 各种数据类型


let isDone: boolean = false; //布尔值
let decLiteral: number = 6;     // 数字
let name: string = "bob"; //字符串
let sentence: string = `Hello, my name is ${ name }`;
let list: number[] = [1, 2, 3]; //数组
let x: [string, number]; //元组   元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// 一个有用的类型 any 
//为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


// viod 
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
    console.log("This is my warning message");
}

//typeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
let u: undefined = undefined;
let n: null = null;

//never  无限执行下去 最常见的 while(true)
// never类型表示的是那些永不存在的值的类型。 
//例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// object类型   非object类型 就会报错 
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error


// 类型断言 告诉编译器 我知道自己在做什么  相信我 ！

// 第一种 “尖括号”语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 第二种 as语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


// 最后一条 
// 尽可能地使用let来代替var