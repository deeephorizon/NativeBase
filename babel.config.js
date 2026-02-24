module.exports = {
  presets: [
    ['@babel/preset-flow', { all: true, experimental_useHermesParser: true }],
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : []),
    ['@babel/plugin-transform-private-methods', { loose: true }],
  ],
};
