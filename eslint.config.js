/** @type {import('eslint').Linter.Config} */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:prettier/recommended",
      "plugin:storybook/recommended"
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    parser: "@typescript-eslint/parser",
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      globals: globals.browser,
    },
    plugins: [
      "react",
      "jsx-a11y",
      "prettier",
      "@typescript-eslint",
      "import",
      {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
    ],
    settings: {
      react: {
        version: "detect",
      },
      "import/internal-regex": "^~/",
      "import/resolver": {
        node: {
          extensions: [".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...prettier.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  }
)
