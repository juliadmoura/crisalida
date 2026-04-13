module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
  ],
  rules: {
    'react-native/no-inline-styles': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};