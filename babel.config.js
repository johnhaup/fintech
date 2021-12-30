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
          '@navigation': './src/navigation',
          '@organisms': './src/components/organisms',
          '@screens': './src/components/screens',
          '@styles': './src/styles',
          '@svgs': './src/components/svgs',
        },
      },
    ],
    // Reanimated plugin must be listed last
    'react-native-reanimated/plugin',
  ],
};
