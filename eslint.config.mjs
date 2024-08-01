import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['**/*.log*', '.cache/**'],
    rules: {
      'no-console': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'no-console': 'error',
    },
  },
)
