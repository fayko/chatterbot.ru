/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: 'airbnb-typescript-prettier',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'webpack.config.js')
      }
    }
  },
  rules: {
    'no-shadow': 0,
    'no-console': 1,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/require-default-props': 0,
    'consistent-this': [2, '_this', 'that'],
    '@typescript-eslint/no-use-before-define': 2,
    'no-underscore-dangle': [2, { allow: ['_this'] }],
    '@typescript-eslint/no-this-alias': [2, { allowDestructuring: true, allowedNames: ['_this'] }],

    'import/named': 1,
    'import/default': 1,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-bind': 0,
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        groups: [['builtin', 'external'], 'internal'],
        pathGroups: [
          {
            pattern: '@*',
            group: 'internal'
          }
        ]
      }
    ]
  },
  ignorePatterns: ['webpack.*.js', 'node_modules', 'dist', 'tsconfig.json']
};
