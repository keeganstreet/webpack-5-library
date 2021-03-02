const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    library: "A",
  },
  optimization: {
    runtimeChunk: "single"
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
};
