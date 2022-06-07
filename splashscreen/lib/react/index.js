"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
var useSplashScreen = function () {
    /**
     * Displays the splash screen.
     */
    var show = (0, react_1.useCallback)(function () {
        __1.default.show();
    }, []);
    /**
     * Dismiss the splash screen.
     */
    var hide = (0, react_1.useCallback)(function () {
        __1.default.hide();
    }, []);
    return {
        show: show,
        hide: hide,
    };
};
exports.default = useSplashScreen;
