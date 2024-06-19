import path from 'path';
import { fileURLToPath } from 'url';
import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
// import { fixupPluginRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import jest from 'eslint-plugin-jest';
import { fixupPluginRules } from "@eslint/compat";
// import react from 'eslint-plugin-react';
// import globals from 'globals';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
/**
 *
 * To avoid the error: "dirname is not defined in ES module scope"
 * We need to use the following code to get the __dirname and __filename
 * see: https://iamwebwiz.medium.com/how-to-fix-dirname-is-not-defined-in-es-module-scope-34d94a86694d
 */

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

export default tseslint.config(
  js.configs.recommended,
  comments.recommended,
  eslintPluginPrettierRecommended,
  /*
    TODO: airbnb-typescript does not support eslint v9 flat config as of 2024/06/12 yet
    see: https://github.com/iamturns/eslint-config-airbnb-typescript/issues/331
  */
  // ...compat.extends("airbnb-base"),
  // ...compat.extends("airbnb-typescript/base"),

  /**
   * another workaround is to use the following code
   * see: https://stackoverflow.com/questions/78253188/flat-config-file-with-configs-from-legacy-eslintrc-compat-error
   * but it is not working as expected
   */
  // ...compat.extends("airbnb-typescript/base").map(c => {
  //   if (c.plugins) {
  //     // @ts-expect-error
  //     c.plugins['@typescript-eslint'] = tseslint.plugin;
  //   }
  //   return c
  // })
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  reactRecommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2022,
      // parser: "@typescript-eslint/parser"
      parser: tseslint.parser,
      parserOptions: {
        sourceType: "module",
        project: true,
        tsconfigRootDir: __dirname,
      }
    },
    plugins: {
      "react-refresh": reactRefresh,
      // TODO: https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions/issues/33
      // "prefer-arrow-functions": "prefer-arrow-functions",
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      // '@typescript-eslint': tseslint.plugin,
    },
    // parserOptions: {
    //   tsconfigRootDir: __dirname,
    //   project: "./tsconfig.json",
    //   sourceType: "module"
    // },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'prettier/prettier': ['off', { singleQuote: true }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "import/no-extraneous-dependencies": "off",
      'import/extensions': "off",
      "no-await-in-loop": "off",
      "import/no-cycle": "off",
      "@typescript-eslint/no-throw-literal": "off",
      "import/extensions": "off",
      "no-plusplus": "off",
      "no-param-reassign": "off",
      "prefer-template": "off",
      '@typescript-eslint/no-explicit-any': 0,
      'no-console': 'off',
      'import/prefer-default-export': 'off',
      'global-require': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      "@eslint-community/eslint-comments/no-unused-disable": "warn",
      'max-len': 'off',
      "consistent-return": "off",
      "no-restricted-syntax" : "off",
      // -- see: https://github.com/prettier/eslint-plugin-prettier -- //
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      // ------------------------------------------------------------- //
      // 'prefer-arrow-functions/prefer-arrow-functions': [
      //   'warn',
      //   {
      //     'allowNamedFunctions': false,
      //     'classPropertiesAllowed': false,
      //     'disallowPrototype': false,
      //     'returnStyle': 'unchanged',
      //     'singleReturnOnly': false,
      //   },
      // ],
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  {
    settings: {
      "react": {
                                            // default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
        "version": "detect", // React version. "detect" automatically picks the version you have installed.
                              // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                              // It will default to "latest" and warn if missing, and to "detect" in the future
      },
    },
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    // plugins: {
    //   react,
    // },
    languageOptions: {
      ...reactRecommended.languageOptions,
      // globals: {
      //   ...globals.browser
      // },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      "react/no-unknown-property": ["error", { "ignore": ["css"] }],
      'react/function-component-definition': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      "react/no-array-index-key": "off",
     },
    // ... others are omitted for brevity
  },
  {
    ignores: [
      "node_modules/",
      ".prettierrc.cjs",
      "config.overrides.js",
      "dist/",
      "vite.config.ts",
      "eslint.config.js",
      "example/",
      "jest.config.js",
      "coverage/",
    ],
  },
  {
    files: ["__tests__/**/*"],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  }
);
