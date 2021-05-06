var execFunc = function () {
  console.log("executed");
};
setTimeout(execFunc, 0); //这是个宏任务定时器  后于常规任务
console.log("changed");
execFunc = function () {
  //下面这个函数就没有执行
  console.log("another executed");
};

//changed
//executed
