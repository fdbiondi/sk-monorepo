module.exports = {
  extends: ['next/core-web-vitals', 'plugin:import/recommended'],
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'max-len': ['error', { code: 120, ignoreStrings: true }],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['external', 'internal', 'parent', 'index', 'sibling'],
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'export'],
        next: ['const', 'let', 'export'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try', 'default', 'interface'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try', 'interface'],
        next: '*',
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'never',
        prev: ['case'],
        next: ['case'],
      },
      {
        blankLine: 'always',
        prev: ['block-like'],
        next: ['case'],
      },
      {
        blankLine: 'always',
        prev: ['block-like', 'expression'],
        next: ['break'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
