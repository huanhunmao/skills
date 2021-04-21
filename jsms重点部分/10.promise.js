new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 });
    resolve({ test: 2 });
    reject({ test: 2 });
  }, 1000);
})
  .then(
    (data) => {
      console.log("result1", data);
    },
    (data1) => {
      console.log("result2", data1);
    }
  )
  .then((data) => {
    console.log("result3", data);
  });
// result1 { test: 1 }
// result3 undefined

// 更改为这种更加容易理解的部分
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 });
  }, 1000);
}).then((data) => {
  console.log("result1", data);
  //dosomething
  console.log("result3");
});
//result1 { test: 1 }
//result3
