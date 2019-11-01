## Frontend scaffold

### Description

Scaffold repository that provides basic frontend setup for when
you want to have something similar to create-react-app but without
the related opacity in terms of config files and behavior.

Included:

- npm
- React
  - prop-types
  - Simple error boundary already put on the top level of the app
- webpack
  - webpack-dev-server with hot reloading
  - cleaning dist/ directory before every build
  - bundle caching
- babel
- postcss
- prettier & eslint (with mostly airbnb config) as pre-commit hooks using lint-staged
- testing (with jest)

Some thoughts on extending the functionality:

- global state config setup
- i18n/l10n setup
- webpack/routing: lazy loading of selected routes
- RWD - grid/flexbox base styles
- storybook for component library
- Ability to switch the codebase to TypeScript

### Available scripts

`npm start` - starts the app on localhost:8080

`npm run build` - builds the app and outputs it to dist/ directory

`npm run test` - test

### Code style

- automatic linting (eslint) & prettifying (prettier) on pre-commit hook
- default prettier configuration
- default airbnb eslint configuration with some rules added at `.eslintrc.json`
