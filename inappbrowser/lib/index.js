"use strict";
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * You can show helpful articles, videos, and web resources inside of your app. Users can view web pages without leaving your app.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-inappbrowser/index.html Cordova}
 * @requires module:cordova-plugin-inappbrowser
 */
Object.defineProperty(exports, "__esModule", { value: true });
var InAppBrowser = /** @class */ (function () {
    function InAppBrowser() {
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param url string
     * @param target {"_self"|'_blank'|"_system"}
     * @params options {string|undefined}
     * @return InAppBrowserType | Window | null
     */
    InAppBrowser.open = function (url, target, options) {
        if (options === void 0) { options = 'location=yes'; }
        var finalOptions = '';
        if (typeof options !== 'string') {
            Object.keys(options).forEach(function (key, i) {
                if (i === 0) {
                    // @ts-ignore
                    finalOptions += "".concat(key, "=").concat(options[key]);
                }
                else {
                    // @ts-ignore
                    finalOptions += ",".concat(key, "=").concat(options[key]);
                }
            });
        }
        else {
            finalOptions = options;
        }
        if (typeof cordova !== 'undefined') {
            return cordova.InAppBrowser.open(url, target, finalOptions);
        }
        else {
            return window.open(url, target, finalOptions);
        }
    };
    return InAppBrowser;
}());
exports.default = InAppBrowser;
