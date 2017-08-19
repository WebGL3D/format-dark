/*
	content/themes.js [05/29/2017]
*/
$(function () {
	var highlight = false;

	if (document.contentType.startsWith("application/json") || location.href.endsWith(".json")) {
		highlight = true;

		var tag = $("pre").attr("data-extension-take-over", ext.id);
		var json = JSON.parse(tag.html());
		var original = JSON.stringify(json);
		var pretty = JSON.stringify(json, null, "\t");

		var isPretty = false;
		$(document).keyup(function (e) {
			if (e.keyCode == 13) {
				isPretty = !isPretty;
				$("pre").text(isPretty ? pretty : original);
				document.head.innerHTML = "";
				hljs.highlightBlock(document.documentElement);
			}
		});
	} else if (document.contentType.startsWith("application/javascript") || location.href.endsWith(".js")) {
		highlight = true;

		// TODO: Pretty-print?
	} else if (document.contentType.startsWith("text/css") || location.href.endsWith(".css")) {
		highlight = true;

		// TODO: Pretty-print?
	}

	if (highlight) {
		document.head.innerHTML = "";
		hljs.highlightBlock(document.documentElement);
	}
});


// WebGL3D
