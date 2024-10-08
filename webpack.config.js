const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        SITE_RECAPTCHA_KEY: JSON.stringify(process.env.SITE_RECAPTCHA_KEY),
      },
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
          },
        },
      },
    ],
  },
};
