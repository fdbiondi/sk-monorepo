module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:import/recommended',
    '../../.eslintrc.js',
  ],
  plugins: ['import', '@typescript-eslint'],
  ignorePatterns: ['!**/*', '.next/**/*'],
};
