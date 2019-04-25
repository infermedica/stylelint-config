module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-declaration-strict-value'
  ],
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-max-id': 0,
    'property-no-vendor-prefix': true,
    'scale-unlimited/declaration-strict-value': [
      [
        '/color/',
        'fill',
        'stroke',
        'font-size'
      ],
      {
        'ignoreKeywords': {
          '/color/': [
            'currentColor',
            'transparent',
            'inherit'
          ],
          'fill': [
            'currentColor',
            'inherit'
          ],
          'stroke': [
            'currentColor',
            'inherit'
          ],
          'font-size': [
            'inherit',
            0
          ]
        }
      }
    ]
  }
};
