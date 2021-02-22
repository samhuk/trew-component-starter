import webpack from 'webpack'
import path from 'path'
import CompressionWebpackPlugin from 'compression-webpack-plugin'

const OUTPUT_DIR = './lib/bundle'

export const config: webpack.Configuration = {
  mode: 'production',
  output: { path: path.resolve(OUTPUT_DIR) },
  optimization: { minimize: true },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionWebpackPlugin({
      test: /\.(js|css|html|svg)$/,
      algorithm: 'gzip',
      threshold: 8192,
      minRatio: 0.8,
    }),
  ],
}

export default config
