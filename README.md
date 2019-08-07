# css-classnames
A simple helper to generate CSS class names string based on provided conditions

## Usage sample

```javascript
import * as cssClassnames from 'css-classnames';

const isFluid = true;
const items = [1, 2, 3];
const classNameString = cssClassnames({
    'container': true,
    'container--fluid': isFluid,
    'container--filled': items.length > 1,
    'container--empty': false
});

console.log(classNamesString);
// The output: 'container container--fluid container--filled'
```