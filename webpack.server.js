const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const serverConfig = {
  mode: "development",
  //we have to tell the webpack taht we are building a bundle for Node.js , not for browser.
  target: "node",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
};

module.exports = merge(baseConfig, serverConfig);
