# caret-position2 [![Code Climate](https://codeclimate.com/github/kudago/Caret-position/badges/gpa.svg)](https://codeclimate.com/github/kudago/Caret-position) [![License](http://img.shields.io/:license-mit-blue.svg)](/LICENSE)

Get and set the user's text selection on an input or text area. Just refactored conventional _caret-position_.

`$ npm install caret-position2`

```js
var get = require('caret-position2/get');
var set = require('caret-position2/set');

// Set caret position after the first character
set(input, 1)
get(input) // -> { start:1, end:1, caret:1 }

// Set text selection to the second and third character
set(input, 1, 3)
get(input) // -> { start:1, end:3, caret:3 }
```

[![NPM](https://nodei.co/npm/caret-position2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/caret-position2/)