var documentReady = (function () {
    var listeners = [];

    // https://stackoverflow.com/a/26324641/1663648
    var observer = new MutationObserver(function () {
        if (document.body) {
            while (listeners.length > 0) {
                listeners.shift()(document.body);
            }
            observer.disconnect();
        }
    });

    observer.observe(document.documentElement, { childList: true });

    return {
        waitForBody: function (callBack) {
            if (document.body) {
                callBack(document.body);
            } else {
                listeners.push(callBack);
            }
        }
    };
})();
