const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js'
  },
  output: {
    path: path.resolve(__dirname, 'app/static'),
  },
};