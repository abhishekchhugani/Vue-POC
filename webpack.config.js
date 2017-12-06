const path = require('path');
const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};
module.exports = {
  entry: {
    app: PATHS.app + "/index.js"
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js'
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 4040,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["absolute/path/a", "absolute/path/b"]
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
    {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};