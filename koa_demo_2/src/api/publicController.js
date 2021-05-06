// 常规业务逻辑代码写在这里

import svgCaptcha from "svg-captcha";

class publicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4, // 数字数量
      ignoreChars: "0olil", // 比较混淆的显示要不要
      color: true, // 要不要颜色
      noise: Math.floor(Math.random() * 5), // 这样可以产生随机线条最多4条
      width: 150, // 宽高
      height: 50,
    }); // 这里面可以写多个参数
    console.log(newCaptcha);
    ctx.body = {
      msg: newCaptcha.data,
    };
  }
}

export default new publicController();
