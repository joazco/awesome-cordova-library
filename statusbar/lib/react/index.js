"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * The StatusBar object provides some functions to customize the iOS and Android StatusBar.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-statusbar/index.html}
 * @requires module:cordova-plugin-statusbar
 */
var useStatusbar = function () {
    /**
     * On iOS 7, make the statusbar overlay or not overlay the WebView.
     *
     * @param isOverlay - On iOS 7, set to false to make the statusbar appear like iOS 6.
     *                    Set the style and background color to suit using the other functions.
     */
    var overlaysWebView = (0, react_1.useCallback)(function (isOverlay) {
        __1.default.overlaysWebView(isOverlay);
    }, []);
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    var styleDefault = (0, react_1.useCallback)(function () {
        __1.default.styleDefault();
    }, []);
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    var styleLightContent = (0, react_1.useCallback)(function () {
        __1.default.styleLightContent();
    }, []);
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    var styleBlackTranslucent = (0, react_1.useCallback)(function () {
        __1.default.styleBlackTranslucent();
    }, []);
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    var styleBlackOpaque = (0, react_1.useCallback)(function () {
        __1.default.styleBlackOpaque();
    }, []);
    /**
     * On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false,
     * you can set the background color of the statusbar by color name.
     *
     * @param color - Supported color names are:
     *                black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
     */
    var backgroundColorByName = (0, react_1.useCallback)(function (color) {
        __1.default.backgroundColorByName(color);
    }, []);
    /**
     * Sets the background color of the statusbar by a hex string.
     *
     * @param color - CSS shorthand properties are also supported.
     *                On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you can set the background color of the statusbar by a hex string (#RRGGBB).
     *                On WP7 and WP8 you can also specify values as #AARRGGBB, where AA is an alpha value
     */
    var backgroundColorByHexString = (0, react_1.useCallback)(function (color) {
        __1.default.backgroundColorByHexString(color);
    }, []);
    /**
     * Hide the statusbar.
     */
    var hide = (0, react_1.useCallback)(function () {
        __1.default.hide();
    }, []);
    /**
     * Show the statusbar.
     */
    var show = (0, react_1.useCallback)(function () {
        __1.default.show();
    }, []);
    /**
     * Read this property to see if the statusbar is visible or not.
     */
    var isVisible = (0, react_1.useCallback)(function () {
        return __1.default.isVisible();
    }, []);
    return {
        overlaysWebView: overlaysWebView,
        styleDefault: styleDefault,
        styleLightContent: styleLightContent,
        styleBlackTranslucent: styleBlackTranslucent,
        styleBlackOpaque: styleBlackOpaque,
        backgroundColorByName: backgroundColorByName,
        backgroundColorByHexString: backgroundColorByHexString,
        hide: hide,
        show: show,
        isVisible: isVisible,
    };
};
exports.default = useStatusbar;
