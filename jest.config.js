const path = require('path');

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': [
      'babel-jest',
      { configFile: path.resolve(__dirname, 'babel.config.js') },
    ],
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$':
      path.resolve(__dirname, 'node_modules/react-native/jest/assetFileTransformer.js'),
  },
  modulePathIgnorePatterns: ['<rootDir>/example/*', '<rootDir>/lib/'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|expo-asset|expo-constants|@unimodules|react-native-unimodules|expo-font|react-native-svg|@expo/vector-icons|react-native-vector-icons|@react-native-aria/checkbox|@react-native-aria/interactions|@react-native-aria/button|@react-native-aria/switch|@react-native-aria/toggle|@react-native-aria/utils|@react-native-aria/*))',
  ],
  setupFiles: ['<rootDir>/src/jest/mock.ts'],
};
