/*
	content/themes.js [05/29/2017]
*/
$(function () {
	var languageName = "";
	var original = null, pretty = null;

	var doHighlight = function (element) {
		element.classList.add(languageName);
		document.head.innerHTML = "";
		hljs.highlightBlock(element);
	};

	var getHtmlHighlight = function (source) {
		if (!source) {
			return "";
		}

		var pre = $("<pre>").text(source).addClass(languageName);
		doHighlight(pre[0]);
		return pre.html();
	};

	if (document.contentType.includes("html")) {
		return;
	}

	if (document.contentType.startsWith("application/json") || location.href.endsWith(".json")) {
		languageName = "json";

		var tag = $("pre").attr("data-extension-take-over", ext.id);
		var json = JSON.parse(tag.html());
		original = JSON.stringify(json);
		pretty = JSON.stringify(json, null, "\t");
	} else if (document.contentType.includes("javascript") || location.href.endsWith(".js")) {
		languageName = "javascript";

		original = document.documentElement.innerText;
		pretty = js_beautify(original, {
			indent_char: "\t",
			indent_size: 1,
			space_in_empty_paren: true
		});
	} else if (document.contentType.includes("css") || location.href.endsWith(".css")) {
		languageName = "css";

		original = document.documentElement.innerText;
		pretty = cssbeautify(original, {
			indent: "\t",
			autosemicolon: true,
			openbrace: "end-of-line"
		});
	}

	if (original) {
		document.documentElement.classList.add("format-dark");

		var originalHtml = getHtmlHighlight(original);
		var prettyHtml = getHtmlHighlight(pretty);

		var pre = $("pre").html(originalHtml).addClass("hljs").addClass(languageName);

		if (prettyHtml) {
			var isPretty = false;

			$(document).keyup(function (e) {
				if (e.keyCode === 13) {
					isPretty = !isPretty;
					pre.html(isPretty ? prettyHtml : originalHtml);
				}
			});
		}
	}
});


// WebGL3D
