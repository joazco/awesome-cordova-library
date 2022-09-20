"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * You can show helpful articles, videos, and web resources inside of your app. Users can view web pages without leaving your app.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-inappbrowser/index.html Cordova}
 * @requires module:cordova-plugin-inappbrowser
 */
var useInAppBrowser = function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param url string
     * @param target {"_self"|'_blank'|"_system"}
     * @params options string
     * @return InAppBrowserType | Window | null
     */
    var open = (0, react_1.useCallback)(function (url, target, options) {
        return __1.default.open(url, target, options);
    }, []);
    return open;
};
exports.default = useInAppBrowser;
