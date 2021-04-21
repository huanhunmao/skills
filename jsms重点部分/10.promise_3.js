new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 });
  }, 1000);
})
  .then((data) => {
    console.log("result1", data);
    //dosomething
    return test();
  })
  .then((data) => {
    console.log("result2", data);
  });

function test(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ test: 2 });
    }, 2000);
  });
}
//result1 { test: 1 }
//result2 { test: 2 }

Promise.resolve({ name: "winty" });
Promise.reject({ name: "winty" });
// 等价于
new Promise((resolve) => resolve({ name: "winty" }));
new Promise((resolve, reject) => reject({ name: "winty" }));
