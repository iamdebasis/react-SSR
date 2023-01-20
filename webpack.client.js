const path = require("path");

module.exports = {
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
