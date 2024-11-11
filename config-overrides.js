/* eslint-disable prettier/prettier */
const webpack = require('webpack');
// const ReactWebConfig = require('react-web-config/lib/ReactWebConfig').ReactWebConfig;

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /@babel(?:\/|\\{1,2})runtime/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        ['module:@react-native/babel-preset'],
        [
          require.resolve('babel-preset-react-app/dependencies'),
          { helpers: true },
        ],
      ],
      plugins: [
        ['@babel/plugin-transform-flow-strip-types', { loose: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
  });

  config.plugins.push(new webpack.DefinePlugin({
    __DEV__: process.env,
  }));

  return config;
};
