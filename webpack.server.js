const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");
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
  //these will tell webpack not to bundle any libraries while creating a build of the server.because in server we only require node_modules
  //in runtime not in build time.
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
