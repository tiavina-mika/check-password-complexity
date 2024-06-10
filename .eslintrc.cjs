module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules/', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prefer-arrow-functions'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  "overrides": [
    {
      "files": ["/src/__tests__/**/*"],
      "plugins": ["jest"],
    }
  ],
  rules: {
    'prettier/prettier': ['off', { singleQuote: true }],
    "react/no-unknown-property": ["error", { "ignore": ["css"] }],
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
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'eslint-comments/no-unused-disable': 'warn',
    'max-len': 'off',
    "consistent-return": "off",
    "react/no-array-index-key": "off",
    "no-restricted-syntax" : "off",
    // -- see: https://github.com/prettier/eslint-plugin-prettier -- //
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    // ------------------------------------------------------------- //
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        'allowNamedFunctions': false,
        'classPropertiesAllowed': false,
        'disallowPrototype': false,
        'returnStyle': 'unchanged',
        'singleReturnOnly': false,
      },
    ],
  }
}
