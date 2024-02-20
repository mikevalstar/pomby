module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/alphabetize': [
          'error',
          { fields: ['ObjectTypeDefinition'], values: ['EnumTypeDefinition'], selections: ['OperationDefinition'] },
        ],
        '@graphql-eslint/match-document-filename': ['error', { query: 'PascalCase', fileExtension: '.graphql' }],
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
