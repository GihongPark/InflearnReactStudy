const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['last 2 chrome versions']},
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [
          "react-hot-loader/babel",
          '@babel/plugin-proposal-class-properties'
        ]
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  
};
