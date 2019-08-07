# css-classnames
A simple helper to generate CSS class names string based on provided conditions

## Usage sample

First of all you need to install the package in your project by running:

`npm install @sunpietro/css-classnames`

or 

`yarn install @sunpietro/css-classnames`

or by downloading files from this repository and including the file `css-classnames.min.js` in your HTML code using `script` tag:

`<script async src="./js/css-classnames.min.js"></script>`

Then if you installed it using either NPM or Yarn, you can start using it the following way:

```javascript
import * as classnames from '@sunpietro/css-classnames';

const isFluid = true;
const items = [1, 2, 3];
const classNameString = classnames({
    'container': true,
    'container--fluid': isFluid,
    'container--filled': items.length > 1,
    'container--empty': false
});

console.log(classNamesString);
// The output: 'container container--fluid container--filled'
```

Otherwise, the script above will slightly change to:

```javascript
const isFluid = true;
const items = [1, 2, 3];
const classNameString = window.classnames({
    'container': true,
    'container--fluid': isFluid,
    'container--filled': items.length > 1,
    'container--empty': false
});

console.log(classNamesString);
// The output: 'container container--fluid container--filled'
```

## Feedback and issues

If you have any feedback, please create an issue in this repository