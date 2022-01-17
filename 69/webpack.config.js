const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    another: './src/another.js'
  },
  plugins: [
    new webpack.BannerPlugin(`copytight pcs ${new Date().getFullYear}`),
    new HtmlWebpackPlugin({
      title: 'PCS Webpack Demo',
      year: new Date().getFullYear(),
      template: './src/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      /*{
        test: /\.html$/i,
        loader: "html-loader",
      },*/
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset'/*,
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          }
        }*/
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        }
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      }
    ]
  }
};