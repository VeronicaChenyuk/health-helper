const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([{
      from: './src/fonts',
      to: './fonts'
    },
    {
      from: './src/favicon',
      to: './favicon'
    },
    {
      from: './src/img',
      to: './img'
    },
    {
      from: './src/uploads',
      to: './uploads'
    }
  ]),
  ],
};
