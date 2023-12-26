const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/src/index.js', // Point d'entrée de votre application React
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Dossier de sortie
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Activation du rechargement à chaud (Hot Module Replacement)
  ],
};
