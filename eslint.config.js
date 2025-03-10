// eslint.config.js

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['dist', 'node_modules', '.react-router']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  //eslintPluginPrettier,
  reactPlugin.configs.flat.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  prettierPlugin,
  {
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser, // ✅ Allows window, document, etc.
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname // For TypeScript plugin to resolve imports
      }
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tseslint.plugin
    },
    settings: {
      react: {
        version: 'detect' // Auto-detect React version
      }
    },
    rules: {
      'no-console': 'warn',
      'react/button-has-type': 'error',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 0,
      'func-style': ['error', 'expression'], // ✅ Enforce arrow function expressions
      'no-empty-pattern': 0 // ✅ Allow empty object destructuring
    }
  }
]
