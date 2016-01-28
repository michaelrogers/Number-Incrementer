var inputNumber = 1;
//The first test case needs to be setup, preferablly with number 1, but it is not neccesary.
chrome.browserAction.onClicked.addListener(function(tab) {
    //alert('Listener runs');
		var elements = document.getElementsByTagName('*');
		window.console.log("After chrome button click "+inputNumber);


//Starting number prompt
if (inputNumber == 0) {
	inputNumber = parseInt(window.prompt("Please enter the first number",inputNumber + 1));
	window.console.log("After prompt: "+inputNumber);
}
//Find and Replace function based on number submitted from the input
else if (inputNumber !== 0) {
	inputNumber = parseInt(window.prompt("Enter the new number to replace the old one",inputNumber + 1)); //increments the default number to increment the input at this step
	window.console.log("New Number: "+inputNumber);	
	
}
//Start match and replacement of the number	
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var replaceNumber = inputNumber-1;
            var replacedText = text.replace(/[replaceNumber]/gi, [inputNumber]); //Uses a simple regex to match the number that was inputted from the window.prompt

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}


});

