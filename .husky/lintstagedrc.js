module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{md,json}': ['prettier --write'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix'],
  '*.{scss,less,styl,html}': ['stylelint --fix --allow-empty-input'],
}
