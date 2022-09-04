const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.ts'),
  module: {
    rules: [
      {
        test: /\.m?(j|t)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  }
};
