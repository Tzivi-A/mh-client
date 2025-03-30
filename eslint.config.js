import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'build', 'eslint.config.js', '.react-router']
  },
  {
    files: ['**/*.ts', '**/*.tsx']
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  reactRefresh.configs.vite,
  prettierRecommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'react-hooks': reactHooks
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': ['error'],
      'react/self-closing-comp': 'error',
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
      'react/jsx-pascal-case': 2,
      'react/no-array-index-key': 2,
      'react/prop-types': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 0,
      'react/jsx-props-no-spreading': 0,
      'react/require-default-props': 0,
      'react/void-dom-elements-no-children': 2,
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/no-unstable-nested-components': 0,
      'react/no-children-prop': 0,

      'no-duplicate-imports': 2,
      'no-useless-assignment': 2,
      camelcase: 2,
      eqeqeq: 2,
      'no-console': 1,
      'no-else-return': 0,
      'no-nested-ternary': 2,
      'no-return-assign': 2,
      'no-unused-expressions': 2,
      'no-useless-return': 2,
      'prefer-const': 2,
      'react-refresh/only-export-components': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-floating-promises': 0
    }
  }
);
