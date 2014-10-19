chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("This message was sent from scripts/inject.js");
		
		document.body.appendChild(document.createElement('script')).src='https://raw.githubusercontent.com/Openbijbel-nu/reftaggerdemo/master/reftagger-niv.js';
		
		// ----------------------------------------------------------

	}
	}, 10);
});