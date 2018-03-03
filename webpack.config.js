const path = require("path");

module.exports = {
  entry: "./src/js/transcript.js",
  output: {
    filename: "transcript.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {cacheDirectory: true}
      }
    ]
  }
};

