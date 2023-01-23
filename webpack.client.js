const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
clientConfig = {
  mode: "development",
  entry: {
    //this will be the entry point of out client side codebasie
    bundle: "./src/client/clientApp.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    clean: true,
  },
};
module.exports = merge(baseConfig, clientConfig);
