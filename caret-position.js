!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.caretPosition=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @module  caret-position/get
 *
 * Adoption from code at
 * http://blogs.nitobi.com/alexei/wp-content/uploads/2008/01/getcaretselection3.js
 *
 * @return the caret position in a text field
 */
module.exports = function (input) {
	var docObj = input.ownerDocument,
		result = { start:0, end:0, caret:0 };

	if (navigator.appVersion.indexOf("MSIE")!=-1) {
		if (input.tagName == "TEXTAREA") {
			if (input.value.charCodeAt(input.value.length-1) < 14) {
				input.value = input.value.replace(/34/g,'') + String.fromCharCode(28);
			}
			var range = docObj.selection.createRange(),
				rangeCopy = range.duplicate();

			rangeCopy.moveToElementText(input);
			rangeCopy.setEndPoint('StartToEnd', range);
			result.end = input.value.length - rangeCopy.text.length;

			rangeCopy.setEndPoint('StartToStart', range);
			result.start = input.value.length-rangeCopy.text.length;
			result.caret = result.end;

			if (input.value.substr(input.value.length-1) == String.fromCharCode(28)) {
				input.value = input.value.substr(0, input.value.length-1);
			}
		} else {
			var range = docObj.selection.createRange(),
				rangeCopy = range.duplicate();

			result.start = 0 - rangeCopy.moveStart('character', -100000);
			result.end = result.start + range.text.length;
			result.caret = result.end;
		}
	} else {
		result.start = input.selectionStart;
		result.end = input.selectionEnd;
		result.caret = result.end;
	}
	if (result.start < 0) {
		 result = { start:0, end:0, caret:0 };
	}
	return result;
};
},{}],2:[function(require,module,exports){
/**
 * @module  caret-position
 */

module.exports = caret;

function caret(a,b,c){
	if (b !== undefined) return get(a);
	return set(a,b,c);
};

caret.get = require('./get');
caret.set = require('./set');
},{"./get":1,"./set":3}],3:[function(require,module,exports){
/**
 * @module  caret-position/set
 *
 * Adoption from code at http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
 *
 * @param {string} input Select in that input
 * @param {int} start from character number
 * @param {int} end to character number
 */
module.exports = function(input, start, end) {
	if (end === undefined) { end = start; }

	if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(start, end);
	} else {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', start);
		range.moveStart('character', end);
		range.select();
	}
};
},{}]},{},[2])(2)
});