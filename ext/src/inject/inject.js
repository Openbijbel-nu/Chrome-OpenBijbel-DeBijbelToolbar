chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("This message was sent from scripts/inject.js");
		alert("this is from NIV-reftagger in inject.js");
		$.getScript('https://raw.githubusercontent.com/OpenBijbel/DeBijbelToolbar/master/debijbel.nl.toolbar.js');
		
		// ----------------------------------------------------------
	}
	}, 10);
});
