module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'no-useless-return': 'off',
  },
}
