module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
        alias: {
          '@atoms': './src/components/atoms',
          '@images': './assets/images',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};