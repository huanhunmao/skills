
// 本节展示类型注释
// 没有 设置类型 展示情况  报错
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);