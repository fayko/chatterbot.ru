// import path from 'path';
// import webpack from 'webpack';
// import CopyPlugin from 'copy-webpack-plugin';
// import TerserPlugin from 'terser-webpack-plugin';
// import nodeExternals from 'webpack-node-externals';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import CompressionPlugin from 'compression-webpack-plugin';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const MODE = process.env.NODE_ENV || 'development';

console.log('==> MODE:', MODE);
// const __dirname = path.dirname('.');

module.exports = {
// export default {
  mode: MODE,
  // devtool: MODE === 'production' ? 'cheap-source-map' : 'cheap-module-source-map',
  entry: './src/components/App/index.ts',
  output: {
    publicPath: '/',
    filename: 'ssr.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [ 'ssr.*']
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    // new CompressionPlugin({
    //   test: /ssr\.[A-Za-z0-9]*\.js/
    // })
  ],
  // target: 'node',
  // externals: [nodeExternals()],
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
