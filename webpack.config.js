const { appendFile } = require("fs");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './build',
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].[chunkhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        } ,
      },
      {
        test: /\.css$/i,
        use: [{loader: "style-loader", options: { injectType: "styleTag" }}, "css-loader"],
      },
    ]},
    plugins: [ 
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
     ]

  
}