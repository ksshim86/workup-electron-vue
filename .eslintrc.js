module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  globals: {
    __static: true
  },
  plugins: ['vue'],
  rules: {
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    indent: ['error', 2],
    'no-underscore-dangle': 0,
    'linebreak-style': ['error', 'windows'],
    'no-return-assign': 0,
    'max-len': 0,
    'function-paren-newline': ['error', 'consistent'],
    'no-unused-vars': ['error', { args: 'none' }],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        ignores: []
      }
    ],
    'func-names': ["error", "never"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
