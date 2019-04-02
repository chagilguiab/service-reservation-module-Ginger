module.exports = {
  entry: __dirname + '/client/src',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};

// "devDependencies": {
//   "babel-core": "^6.25.0",
//   "babel-loader": "^6.4.1",
//   "babel-preset-es2015": "^6.24.1",
//   "babel-preset-react": "^6.24.1",
//   "eslint-config-hackreactor": "git://github.com/reactorcore/eslint-config-hackreactor",
//   "webpack": "^2.2.1"
// }


// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// };


