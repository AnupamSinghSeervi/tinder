const path = require('path');

module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
         test: /\.(png|svg)$/,
         use: [
           {
             loader: 'url-loader',
             options: {
               limit: 8192
             }
           }
         ]
       },
       {
          test: /\.(woff|woff2|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpeg|gif)$/,
           use: [
             'file-loader'
           ]
        },
      ],
    },
  }
}
