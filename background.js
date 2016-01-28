var inputNumber = 0;
var replaceNumber = 0;
chrome.browserAction.onClicked.addListener(function(tab) {
    //alert('Listener runs');
		var elements = document.getElementsByTagName('*');
		
		window.console.log("After chrome button click "+inputNumber);



if (inputNumber == 0) {
	inputNumber = parseInt(window.prompt("Number",1));
	window.console.log("After prompt "+inputNumber);
}
//Find and Replace function based on number submitted from the input
else if (inputNumber !== 0) {
	inputNumber = parseInt(window.prompt("Enter the new number to replace the old one",inputNumber + 1));
	window.console.log("New Number"+inputNumber);	
	replaceNumber = inputNumber - 1;
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/[replaceNumber]/gi, '[inputNumber]');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

}
});

