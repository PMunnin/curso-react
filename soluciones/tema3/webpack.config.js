var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'src'),
    outPath = path.join(__dirname, 'dist');

module.exports = {
  entry: [path.join(srcPath, 'app.js')],
  output: {
    path: outPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: srcPath,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  devServer: {
    contentBase: outPath
  }
}
