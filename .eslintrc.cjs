module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  ignorePatterns: ['dist', 'node_modules', 'coverage'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    // Un parametro que empieza con "_" se declara a proposito y no se usa
    // (por ejemplo, el "_next" del manejador de errores de Express).
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
