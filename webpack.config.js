const path = require('path');

module.exports = {
  entry: './public/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  watch: true,
  mode: 'development'
};