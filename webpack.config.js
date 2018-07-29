const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[chunkhash].js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "tools"),
          path.resolve(__dirname, "src/tests")
        ],
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[chunkhash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html"
    })
  ]
};
