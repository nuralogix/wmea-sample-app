import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReact from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import valtio from 'eslint-plugin-valtio';

// shared rules
const sharedRules = {
  ...eslint.configs.recommended.rules,
  ...tseslint.configs.recommendedTypeChecked.rules,
  ...tseslint.configs.strictTypeChecked.rules,
  ...tseslint.configs.stylisticTypeChecked.rules,
  ...valtio.configs['flat/recommended'].rules,
  "no-console": "error",
  "semi": "error",
  '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
}

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
    ],
  },
  // linting client folder
  {
    files: ["client/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      "parserOptions": {
        project: "client/tsconfig.json",
        "ecmaFeatures": {
          "jsx": true
        }
      }, 
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node
      }      
    },
    plugins: {
      'react': eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': jsxA11yPlugin
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...sharedRules,
      ...eslintPluginReact.configs.recommended.rules,
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
  // linting server folder
  {
    files: ["server/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      "parserOptions": {
        project: "server/tsconfig.json",
      },
      globals: {
        ...globals.node
      }      
    },
    rules: {
      ...sharedRules,
    }    
  },  
];