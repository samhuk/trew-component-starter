import merge from 'webpack-merge'
import webpack from 'webpack'
import base from './component-base'

const ENTRY_FILE_PATH = './src/client/component/index.tsx'
// Note: This *must* be relative to the directory of ENTRY_FILE_PATH (see this config or base config)
const TS_LOADER_TS_CONFIG_FILE_PATH = '../../../tsconfig/component-webpack.json'

export const config: webpack.Configuration = merge(base, {
  entry: [ENTRY_FILE_PATH],
  devtool: false,
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] },
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
