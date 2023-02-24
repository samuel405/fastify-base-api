module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    'browser': true,
    'es2016': true,
    'node': true
  },
  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'max-len': ['error', { code: 89 }],
    'max-lines': ['error', { max: 300 }],
    'indent': ['error', 2]
  }
};
