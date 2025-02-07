export default {
  '*.{js,ts,tsx}': ['prettier --write', 'eslint --fix'],
  './src/**/*.styles.ts': 'stylelint --fix',
  './src/**/styles.ts': 'stylelint --fix',
};
