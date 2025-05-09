import globals from 'globals';
import pluginJs from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html,
    },
    settings: {
      'html/indent': '+2',
    },
    languageOptions: {
      parser: htmlParser,
    },

    rules: {
      '@html-eslint/no-duplicate-attrs': 'error',
    }
  },

  {
    files: ['./src/**/*.{js,mjs,cjs,ts}'],
    // files: ['./src/**/*.{js,mjs,cjs,ts}', 'eslint.config.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    plugins: {
      '@typescript-eslint/eslint-plugin': tsEslint,
    },

    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['off'],
      // 'quotes': ['error', 'single'],
      // "arrow-parens": 0,
      // "consistent-return": "off",
      // "import/first": 0,
      // "import/named": 0,
      // "import/namespace": 2,
      // "import/default": 2,
      // "import/export": 2,
      // "import/no-unresolved": 2,
      // "import/extensions": [
      //   "error",
      //   "always",
      //   {
      //     "js": "never"
      //   }
      // ]
    }
  },
  {
    languageOptions: { globals: globals.browser }
  },
];
