/**
 * @module  caret-position
 */

module.exports = caret;

function caret(a,b,c){
	if (b !== undefined) return caret.get(a);
	return caret.set(a,b,c);
};

caret.get = require('./get');
caret.set = require('./set');