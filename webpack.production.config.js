"use strict";
var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/src/ts/index.ts",
  output: {
    filename: "atomic-package.utility.js",
    path: __dirname + "/dist/",
    library: "ap-utility",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
  ]
};
