import merge from 'webpack-merge'
import webpack from 'webpack'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import base from './component-base'

const isProduction = process.env.NODE_ENV === 'production'

// -- Paths
const ENTRY_FILE_PATH = './src/client/assets/scss/component/component.scss'

const fileLoaderFileNameTemplate = () => (isProduction
  ? 'content/[name].[hash].[ext]'
  : 'content/[name].[ext]')

export const config: webpack.Configuration = merge(base, {
  entry: [ENTRY_FILE_PATH],
  resolve: { extensions: ['.scss'] },
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true },
      },
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: { name: fileLoaderFileNameTemplate(), mimetype: 'image/svg+xml' },
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: { name: fileLoaderFileNameTemplate(), mimetype: 'application/font-woff' },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: { name: fileLoaderFileNameTemplate(), mimeType: 'application/octet-stream' },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: { name: fileLoaderFileNameTemplate() },
      },
    ],
  },
})

export default config
