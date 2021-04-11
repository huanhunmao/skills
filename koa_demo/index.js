const Koa = require("koa");
const app = new Koa(); // 实例化 Koa
const Router = require("koa-router");
const router = new Router();
const koaBody = require("koa-body");
const cors = require("@koa/cors");
//使用 koa-json 美化代码
const koaJson = require("koa-json");

router.get("/", (ctx) => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = "hello test1";
});
router.get("/api", (ctx) => {
  //   console.log(ctx);
  //   console.log(ctx.request);
  // get params
  const params = ctx.request.query;
  console.log(params);
  // 有 "name" : "fhj", "age" : 25怎么拿
  console.log(params.name, params.age);
  ctx.body = {
    name: params.name,
    age: params.age,
  };
});

//演示 async
router.get("/async", async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world 2s later");
    }, 2000);
  });
  ctx.body = result;
});
// 给路由加一个前缀 不加前缀无法使用
router.prefix("/api");

router.post("/post", async (ctx) => {
  let { body } = ctx.request;
  console.log(body);
  console.log(ctx.request);
  ctx.body = {
    ...body,
  };
});
app.use(koaBody());
app.use(cors());
app.use(koaJson({ pretty: false, param: "pretty" }));
//这个就是use链式操作 先使用路由 然后使用路由允许的方法
app.use(router.routes()).use(router.allowedMethods);
// app.use(async (ctx) => {
//   //使用.use方法 处理 内容
//   ctx.body = "Hello World !!!";
//   // 打印 request
//   console.log(ctx);
//   console.log(ctx.request);
// });

app.listen(3000); // 监听端口
