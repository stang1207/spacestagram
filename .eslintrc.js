module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-danger': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unused-state': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'react/jsx-no-constructed-context-values': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx'],
        map: [['@', './src']],
      },
    },
  },
};
