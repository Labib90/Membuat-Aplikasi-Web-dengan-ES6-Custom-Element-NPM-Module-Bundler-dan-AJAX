const path = require('path');

module.exports = {
  entry: './src/main.js', // Update with your entry point file
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
