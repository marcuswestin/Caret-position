;(function(win){
	var caretPosition = {
		get: getPosition,
		set: setPosition
	}
	
	if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = caretPosition }
	else if (typeof define === 'function' && define.amd) { define(caretPosition) }
	else { win.caretPosition = caretPosition }

	// Adoption from code at http://blogs.nitobi.com/alexei/wp-content/uploads/2008/01/getcaretselection3.js
	// This function will return the caret position in a text field
	function getPosition(input) {
		var docObj = input.ownerDocument,
			result = { start:0, end:0, caret:0 }
		
		if (navigator.appVersion.indexOf("MSIE")!=-1) {
			if (input.tagName == "TEXTAREA") {
				if (input.value.charCodeAt(input.value.length-1) < 14) {
					input.value = input.value.replace(/34/g,'') + String.fromCharCode(28)
				}
				var range = docObj.selection.createRange(),
					rangeCopy = range.duplicate()
				
				rangeCopy.moveToElementText(input)
				rangeCopy.setEndPoint('StartToEnd', range)
				result.end = input.value.length - rangeCopy.text.length
				
				rangeCopy.setEndPoint('StartToStart', range)
				result.start = input.value.length-rangeCopy.text.length
				result.caret = result.end
				
				if (input.value.substr(input.value.length-1) == String.fromCharCode(28)) {
					input.value = input.value.substr(0, input.value.length-1)
				}			
			} else {
				var range = docObj.selection.createRange(),
					rangeCopy = range.duplicate()
				
				result.start = 0 - rangeCopy.moveStart('character', -100000)
				result.end = result.start + range.text.length
				result.caret = result.end
			}
		} else {
			result.start = input.selectionStart
	    	result.end = input.selectionEnd
			result.caret = result.end
		}
		if (result.start < 0) {
			 result = { start:0, end:0, caret:0 }
		}
		return result
	}

	// Adoption from code at http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
	function setPosition(input, start, end) {
		if (typeof end == 'undefined') { end = start }
		if (input.setSelectionRange) {
			input.focus()
			input.setSelectionRange(start, end)
		} else {
			var range = input.createTextRange()
			range.collapse(true)
			range.moveEnd('character', start)
			range.moveStart('character', end)
			range.select()
		}
	}

})(Function('return this')());


