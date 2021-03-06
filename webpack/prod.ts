import merge from 'webpack-merge'
import webpack from 'webpack'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import base from './base'

// Note: This *must* be relative to the directory of ENTRY_FILE_PATH (see this config or base config)
const TS_LOADER_TS_CONFIG_FILE_PATH = '../../tsconfig/clientProd.json'

export const config: webpack.Configuration = merge(base, {
  mode: 'production',
  devtool: false,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
    minimize: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true },
      },
    }),
    new CompressionWebpackPlugin({
      test: /\.(js|css|html|svg)$/,
      algorithm: 'gzip',
      threshold: 8192,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        options: { configFile: TS_LOADER_TS_CONFIG_FILE_PATH },
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
})

export default config
