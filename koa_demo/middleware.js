const Koa = require("koa");
const app = new Koa(); // 实例化 Koa

const middleware = function async(ctx, next) {
  console.log("this is a middleware1 !!!");
  console.log(ctx.request.path);
  next();
};
// 再复制两个
const middleware1 = function async(ctx, next) {
  console.log("this is a middleware2 !!!");
  console.log(ctx.request.path);
  next();
  console.log("middleware2_next");
};
const middleware2 = function async(ctx, next) {
  console.log("this is a middleware3 !!!");
  console.log(ctx.request.path);
  next();
  console.log("middleware3_next");
};
app.use(middleware).use(middleware1).use(middleware2);

app.listen(3001);
