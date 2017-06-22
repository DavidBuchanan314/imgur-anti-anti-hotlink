"use strict";

var callback = function(e) {
	for (let header of e.requestHeaders) {
		if (header.name.toLowerCase() === "accept") {
			header.value = "*/*";
		}
	}
	
	return {requestHeaders: e.requestHeaders};
};

var requestFilter = {
	urls: ["https://i.imgur.com/*.*"]
};

browser.webRequest.onBeforeSendHeaders.addListener(callback, requestFilter, ["blocking", "requestHeaders"]);
