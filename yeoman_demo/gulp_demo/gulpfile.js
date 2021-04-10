const { src, dest, series, watch } = require("gulp");
const del = require("del");
// 下面这个插件的作用是 之后可以直接这样使用插件
// gulp-uglify => plugins.uglify = require('gulp-uglify')
const plugins = require("gulp-load-plugins")();

// 引入browserSync并初始化
const browserSync = require("browser-sync").create();

//使用 browserSync reload 部分
const reload = browserSync.reload;
// 压缩js uglifyjs
function js(cb) {
  src("js/*.js")
    .pipe(plugins.uglify())
    .pipe(dest("./dist/js"))
    //使用load 刷新
    .pipe(reload({ stream: true }));
  cb();
}
// 对css/scss进行编译压缩，输出为 css
function css(cb) {
  src("css/*.scss")
    .pipe(
      plugins.sass({
        outputStyle: "compressed", //压缩
      })
    )
    .pipe(
      plugins.autoprefixer({
        cascade: false, //压缩选择 false
        remove: false, //自动删除过时的prefixes
      })
    )
    // 输出管道
    .pipe(dest("./dist/css"))
    .pipe(reload({ stream: true }));
  cb();
}

//定义 server任务
function server(cb) {
  browserSync.init({
    server: {
      //指定当前目录下 因为use.html在当前目录
      baseDir: "./",
    },
  });
  cb();
}
// 监听文件的变化
function watcher(cb) {
  watch("js/*.js", js); //监听 js文件变化
  watch("css/*.scss", css); // 监听scss/css文件变化
  cb();
}
// 删除 dist目录下的内容
function clean(cb) {
  del("./dist");
  cb();
}
exports.scripts = js;
exports.styles = css;
exports.clean = clean;
exports.default = series([
  clean, //清除 dist
  js, // 清除 js
  css, // 清除 css
  server,
  watcher, // 监听
]);
