const { src, dest, series, watch } = require("gulp");

// 下面这个插件的作用是 之后可以直接这样使用插件
// gulp-uglify => plugins.uglify = require('gulp-uglify')
const plugins = require("gulp-load-plugins")();
// 压缩js uglifyjs
function js(cb) {
  src("js/*.js").pipe(plugins.uglify()).pipe(dest("./dist/js"));
  cb();
}
// 对css/scss进行编译压缩，输出为 css
function css() {
  console.log("this is css");
}
// 监听文件的变化
function watcher() {}
// 删除 dist目录下的内容
function clean() {}
exports.scripts = js;
exports.styles = css;
exports.default = function () {
  console.log("hello gulp");
};
