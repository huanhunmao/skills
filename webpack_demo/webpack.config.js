const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

// console.log(path);
// console.log(path.join(__dirname, "./dist"));

const config = {
  mode: "production",
  //   devServer: {
  //     hot: true, //开启热更新
  //   },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /.\js$/,
        loader: "babel-loader",
      },
    ],
  },
};

module.exports = config;
