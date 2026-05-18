import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "**/dist/**",
      "**/build/**",
      "**/target/**",
      "node_modules/**",
      "eslint.config.js",
      "**/*.config.js",
      "docs-site/**",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),

  ...tseslint.configs.stylisticTypeChecked.map(config => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,

      "max-lines": ["error", {
        max: 400,
        skipBlankLines: true,
        skipComments: true
      }],

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      }],

      "no-duplicate-imports": "error",

      "sort-imports": ["error", {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      }],

      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",

      "no-console": ["warn", { allow: ["warn", "error"] }],
      eqeqeq: ["error", "always"],
      curly: "error",
      "no-debugger": "error",

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/self-closing-comp": "error",
    },
  },
];