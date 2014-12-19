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