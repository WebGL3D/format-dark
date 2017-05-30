/*
	ext.js [10/08/2016]
*/
browser = (function(userAgentInfo){
	var wholeVersion = userAgentInfo[2].split(".");
	return {
		name: userAgentInfo[1],
		version: userAgentInfo[2],
		wholeVersion: Number(wholeVersion[0]) || 0,
		userAgent: navigator.userAgent,
		userAgentMatch: userAgentInfo[0]
	};
})(navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/([\d.]+)/i) || ["Unknown", "0.0"]);

ext = {
	"id": chrome.runtime.id,
	"manifest": chrome.runtime.getManifest(),
	"incognito": chrome.extension.inIncognitoContext,
	
	"getUrl": function(path){
		return chrome.extension.getURL(path);
	}
};

console.log(ext.manifest.name + " " + ext.manifest.version + " started" + (ext.incognito ? " in icognito" : ""));


// WebGL3D
