caret-position [![Code Climate](https://codeclimate.com/github/marcuswestin/Caret-position/badges/gpa.svg)](https://codeclimate.com/github/marcuswestin/Caret-position) [![License](http://img.shields.io/:license-mit-blue.svg)](/LICENSE)
==============

Get and set the user's text selection on an input or text area.

See test.html for example usage.

API
---

```js
// Set caret position after the first character
caretPosition.set(input, 1)
caretPosition.get(input) // -> { start:1, end:1, caret:1 }

// Set text selection to the second and third character
caretPosition.set(input, 1, 3)
caretPosition.get(input) // -> { start:1, end:3, caret:3 }
```

[![NPM](https://nodei.co/npm/caret-position.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/caret-position/)