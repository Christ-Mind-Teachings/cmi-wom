const path = require("path");
const Jarvis = require("webpack-jarvis");

module.exports = {
  devtool: "source-map",
  stats: {
    colors: true
  },
  entry: {
    transcript: ["./src/js/transcript.js"],
    page: ["./src/js/page.js"]
  },
  output: {
    path: path.join(__dirname, "public/js"),
    publicPath: "/public/js",
    filename: "[name].js"
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
  },
  plugins: [
    new Jarvis({
      port: 1337 // optional: set a port
    })
  ]
};

