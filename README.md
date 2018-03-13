# gulp-browserify-sass-es6-babel-starter
A starter containing nothing more than the simple basics of es6 JS and Sass so you can get on with the rest of your project and life

1. Installation
2. Tests
  - eslint
  - mocha


## Installation

download repo and enter the folder from the terminal / command line

``` command line
$ npm install
```

to run the compiler from gulp:

``` command line
$ gulp
```

the order of the run is sass firrst in order to generate the dist folder, this allows the babel compiler to render the index.js to the folder with ease


## Tests

### eslint

Depending on your text editor eslint will be providing information as you type,  however, to activate js tests using eslint run:

``` command line
$ npm run lint
```