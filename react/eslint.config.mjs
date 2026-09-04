import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReact from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import valtio from 'eslint-plugin-valtio';
import { fileURLToPath } from 'url';

const tsconfigRootDir = fileURLToPath(new URL('.', import.meta.url));

// Plugins that own the rules spread into `sharedRules`. Flat config resolves each rule
// prefix against the plugins declared in the same config object, so every block that uses
// `sharedRules` has to register these too.
const sharedPlugins = {
  '@typescript-eslint': tseslint.plugin,
  valtio,
};

const sharedRules = {
  ...eslint.configs.recommended.rules,
  ...tseslint.configs.recommendedTypeChecked.rules,
  ...tseslint.configs.strictTypeChecked.rules,
  ...tseslint.configs.stylisticTypeChecked.rules,
  ...valtio.configs['flat/recommended'].rules,
  // Base rules that misfire on TypeScript: they cannot see generic parameters, mapped-type
  // keys, `const` + `type` declaration merging, type-only imports or ambient globals such as
  // the `React` namespace. tsc and the @typescript-eslint equivalents cover all of them.
  'no-unused-vars': 'off',
  'no-redeclare': 'off',
  'no-undef': 'off',
  // The samples log on purpose - the console output is part of what they demonstrate.
  'no-console': 'off',
  semi: 'error',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
};

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      ...sharedPlugins,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...sharedRules,
      ...eslintPluginReact.configs.recommended.rules,
      // The build compiles JSX with the automatic runtime, so React need not be in scope.
      ...eslintPluginReact.configs.flat['jsx-runtime'].rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'react/jsx-no-target-blank': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'valtio/state-snapshot-rule': 'warn',
      'valtio/avoid-this-in-proxy': 'warn',
    },
  },
  {
    files: ['server/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./server/tsconfig.json'],
        tsconfigRootDir,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      ...sharedPlugins,
    },
    rules: {
      ...sharedRules,
    },
  },
];
