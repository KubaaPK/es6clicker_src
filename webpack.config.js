const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entryFile = path.resolve(__dirname, 'src/index.js');
const outputPath = path.resolve(__dirname, 'public');
const outputFile = 'bundle.js';

module.exports = {
  entry: entryFile,
  output: {
    path: outputPath,
    filename: outputFile
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'html?attrs=false'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin(
      [
        { from: 'src/robots.txt' },
        { from: 'src/stylesheets/', to: 'stylesheets/' }
      ],
      { ignore: ['.gitkeep'] }
    )
  ]
};
