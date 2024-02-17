module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-property-sort-order-smacss',
  ],
  rules: {
    'shorthand-property-no-redundant-values': null,
    'media-feature-range-notation': null,
    'media-query-no-invalid': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  ignoreFiles: ['**/node_modules/**/*', 'apps/timetracker/**/*', 'apps/pto/**/*', 'apps/planner/**/*'],
};
