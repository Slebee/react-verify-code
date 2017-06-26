var path = require('path');
process.env.NODE_ENV = 'development';
module.exports = {
  entry: path.join(__dirname,'/example/src/', 'index.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0', 'react']
      },
      include: [
        path.join(__dirname, '/')
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, '/example')
  }
}