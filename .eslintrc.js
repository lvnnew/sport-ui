module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true,
  },
  extends: [
    // 'canonical',
    // 'canonical/react',
    // 'canonical/mocha',
    // 'canonical/jest',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['node_modules/', '**/generated/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',

    // '@typescript-eslint',
    // 'sort-keys-fix',
    'jest',
  ],
  rules: {
    'import/no-extraneous-dependencies': [0],

    // '@typescript-eslint/no-unused-vars': [1],
// 'no-unused-vars': [1],
'@typescript-eslint/no-use-before-define': [0],

    

'linebreak-style': 0,
    
    'class-methods-use-this': [0],

    
    'no-unused-vars': 'off',

    
complexity: [0],

    // "@typescript-eslint/no-unused-vars": "error",
'max-len': [
      'error',
      110,
      {
        ignorePattern: '^import|^export',
      },
    ],

    'consistent-return': [0],

    







'filenames/match-exported': [0],
    // 'import/imports-first': [
//   'warn',
//   {
//     'absolute-first': 'true',
//   },
// ],
// 'sort-keys-fix/sort-keys-fix': [0],
// Enable this rules later
'unicorn/no-reduce': [0],
    'filenames/match-regex': [0],
    'fp/no-delete': [0],
    'func-call-spacing': [0],
    'func-style': [0],
    'function-paren-newline': [0],
    'id-length': [0],
    'id-match': [0],
    'import/exports-last': [0],
    'import/max-dependencies': [0],
    'import/no-unassigned-import': [0],
    'import/no-unresolved': [0],
    'import/order': [0],
    'import/unambiguous': [0],
    'line-comment-position': [0],
    'max-nested-callbacks': [0],
    'no-extra-parens': [0],
    'no-inline-comments': [0],
    'no-nested-ternary': [0],
    'no-process-env': [0],
    'no-process-exit': [0],
    'no-shadow': [0],
    'no-spaced-func': [0],
    'no-useless-constructor': [0],
    'no-warning-comments': [0],
    'object-property-newline': [0],
    'promise/always-return': [0],
    'promise/catch-or-return': [0],
    'promise/prefer-await-to-then': [0],
    'react/forbid-component-props': [0],
    'react/jsx-boolean-value': [0],
    'react/jsx-no-bind': [0],
    'jest/no-disabled-tests': [0],
    'react/no-array-index-key': [0],
    'jest/no-truthy-falsy': [0],
    'react-hooks/rules-of-hooks': [0],
    'mocha/no-hooks-for-single-case': [0],
    'react/no-multi-comp': [0],

    //
    '@typescript-eslint/ban-ts-ignore': [0],
        
    'require-await': [0],

    'unicorn/consistent-function-scoping': [0],

    '@typescript-eslint/explicit-function-return-type': [0],

    '@typescript-eslint/interface-name-prefix': [0],

    'unicorn/prevent-abbreviations': [0],
    '@typescript-eslint/no-empty-interface': [0],
    'mocha/no-setup-in-describe': [0],
    '@typescript-eslint/no-explicit-any': [0],
    'arrow-body-style': [0],
    'mocha/no-top-level-hooks': [0],
    'arrow-parens': [0],
    'fp/no-class': [0],
    'fp/no-this': [0],
    'implicit-arrow-linebreak': [0],
    'import/no-namespace': [0],
    'react/display-name': [0],
    'react/prop-types': [0],
    'space-before-function-paren': [0],
  },
  settings: {
    react: {
      version: '16.11.0',
    },
  },
};
