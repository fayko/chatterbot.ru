const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const MODE = process.env.NODE_ENV || 'development';

console.log('==> MODE:', MODE);

module.exports = {
  mode: MODE,
  devtool: MODE === 'production' ? 'cheap-source-map' : 'cheap-module-source-map',
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './public')
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [ 'index.html', 'bundle.*']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: path.resolve(__dirname, './public/index.html'),
      inject: 'body'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new CompressionPlugin({
      test: /bundle\.[A-Za-z0-9]*\.js/
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "./assets" },
      ],
    }),
  ],
  optimization: {
    minimize: MODE === 'production',
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@svg': path.resolve(__dirname, './src/svg'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@consts': path.resolve(__dirname, './src/consts'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};
