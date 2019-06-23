/*
	ext.js [10/08/2016]
*/
ext = {
	"id": chrome.runtime.id,
	"manifest": chrome.runtime.getManifest(),
	"incognito": chrome.extension.inIncognitoContext
};

console.log(ext.manifest.name + " " + ext.manifest.version + " started" + (ext.incognito ? " in icognito" : ""));


// WebGL3D
