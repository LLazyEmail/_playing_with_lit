import js from '@eslint/js';

export default [
  {
    ignores: ['dist/', 'generated/', 'reference/', 'node_modules/'],
  },
  js.configs.recommended,
  {
    files: ['eslint.config.js'],
    languageOptions: {
      sourceType: 'module',
    },
  },
];
