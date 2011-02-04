var caret = require('./index')

function assert(truthy, message) {
	if (truthy) { return }
	alert("Failed assert: " + message)
}

function test(input) {
	caret.setPosition(input, 1)
	
	var position = caret.getPosition(input),
		message = 'get/set position 1'
	assert(position.start == 1, message)
	assert(position.end == 1, message)
	assert(position.caret == 1, message)
}

window.onload = function() {
	var textInput = document.getElementById('textInput'),
		textArea = document.getElementById('textArea'),
		testText = 'lorem ipsum dolores samblum dictatum'
	
	textInput.value = textArea.value = testText
	
	test(textInput)
	test(textArea)
}