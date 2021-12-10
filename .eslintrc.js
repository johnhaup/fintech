module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],
  env: {
    jest: true,
  },
  rules: {
    'react-native/no-inline-styles': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        alias: {
          '@atoms': './src/components/atoms',
          '@images': './assets/images',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@styles': './src/styles',
        },
      },
    },
  },
};
