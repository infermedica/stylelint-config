# Infermedica Stylelint configuration

## Install

```bash
npm i @infermedica/stylelint-config --save-dev
```

## Usage

This config is designed to work with the `extends` feature of `.stylelintrc` files.

Add this to your `.stylelintrc` or `package.json` file:

```
{
  "extends": "@infermedica/stylelint-config"
}
```

You can override settings from this config by adding them directly into your
`.eslintrc` or `package.json` file.

#### Commands

Recommended set of commands to put in `package.json` scripts:

```
  "lint:css": "stylelint ./**/*.css ./**/*.scss ./**/*.vue",
  "lint-autofix:css": "stylelint ./**/*.css ./**/*.scss ./**/*.vue --fix",
```

## License

MIT Copyright (c) Infermedica
