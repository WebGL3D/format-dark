/*
	content/themes.js [05/29/2017]
*/
$(function () {
	var languageName = "";
	var highlight = false;
	var isPretty = false;
	var original, pretty;

	var doHighlight = function () {
		if (languageName) {
			document.documentElement.classList.add(languageName);
		}

		document.head.innerHTML = "";
		hljs.highlightBlock(document.documentElement);
	};

	if (document.contentType.includes("html")) {
		return;
	}

	if (document.contentType.startsWith("application/json") || location.href.endsWith(".json")) {
		highlight = true;
		languageName = "json";

		var tag = $("pre").attr("data-extension-take-over", ext.id);
		var json = JSON.parse(tag.html());
		original = JSON.stringify(json);
		pretty = JSON.stringify(json, null, "\t");
	} else if (document.contentType.includes("javascript") || location.href.endsWith(".js")) {
		highlight = true;
		languageName = "javascript";

		// TODO: Pretty-print?
	} else if (document.contentType.includes("css") || location.href.endsWith(".css")) {
		highlight = true;
		languageName = "css";

		original = document.documentElement.innerText;
		pretty = cssbeautify(original, {
			indent: "\t",
			autosemicolon: true,
			openbrace: "end-of-line"
		});
	}

	$(document).keyup(function (e) {
		if (e.keyCode === 13 && pretty && highlight) {
			isPretty = !isPretty;
			var pre = $("pre");
			pre.text(isPretty ? pretty : original);
			doHighlight();
		}
	});

	if (highlight) {
		doHighlight();
	}
});


// WebGL3D
