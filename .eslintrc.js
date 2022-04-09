module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react/forbid-elements': [
      'error',
      {
        forbid: [
          {
            element: 'Text',
            message: 'use <IText> instead',
          },
          {
            element: 'TextInput',
            message: 'use <ITextInput> instead',
          },
          {
            element: 'Modal',
            message: 'use <IModal> instead',
          },
        ],
      },
    ],
  },
};
