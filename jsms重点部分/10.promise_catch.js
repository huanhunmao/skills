new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 });
  }, 1000);
})
  .then((data) => {
    console.log("result1", data); //result1 { test: 1 }
    //dosomething
    return test();
  })
  .catch((ex) => {
    //如果上面是reject或者发生了错误 error { test: 1 }
    console.log("error", ex);
  });
