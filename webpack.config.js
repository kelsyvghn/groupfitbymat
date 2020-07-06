const path = require('path');

module.exports = {
  entry: {
    home: path.join(__dirname,'client/app/app.jsx'),
    about: path.join(__dirname,'client/pages/About/About.jsx'),
    recent: path.join(__dirname,'client/pages/RecentWorkouts/RecentWorkouts.jsx'),
    schedule: path.join(__dirname,'client/pages/Schedule/Schedule.jsx'),
    contact: path.join(__dirname,'client/pages/Contact/GetInTouch.jsx'),
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          loader: 'style-loader',
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
          {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/public/bundles'),
  },
};