const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js', // Output filename
    clean: true, // Clean the build directory before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Apply loaders for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Apply loaders for image files
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML template file
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/background1.jpg', // Copy background1.jpg to the build folder
          to: './background1.jpg',
        },
        {
          from: './src/background2.jpeg', // Copy background2.jpeg to the build folder
          to: './background2.jpeg',
        },
        {
          from: './src/background3.png', // Copy background3.png to the build folder
          to: './background3.png',
        },
      ],
    }),
  ],
};
