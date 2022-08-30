export const env = {
  browser: true,
  es2021: true,
  jest: true,
  node: true,
};

export const extencao = [
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'eslint:recommended',
  'plugin:perttier/recommended',
];

export const global = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
}

export const parser = '@babel/eslint-parser';

export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
};

export const plugins = [
  'react', 'prettier', 'react-hooks'
];

export const rules = {};
