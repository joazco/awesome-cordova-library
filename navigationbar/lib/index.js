"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Hide and auto hide navigation bar. (Android)
 * Also, check out {@link https://github.com/cranberrygame/cordova-plugin-navigationbar Github}
 * @requires module:cordova-plugin-navigationbar
 */
var NavigationBar = /** @class */ (function () {
    function NavigationBar() {
    }
    /**
     *
     * @param autoHideNavigationBar {boolean}
     * @param successCallback {Function}
     * @param errorCallback {Function}
     */
    NavigationBar.setUp = function (autoHideNavigationBar, successCallback, errorCallback) {
        if (typeof window.navigationbar !== 'undefined') {
            window.navigationbar.setUp(autoHideNavigationBar, successCallback, errorCallback);
        }
        else {
            NavigationBar.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param successCallback {Function}
     * @param errorCallback {Function}
     */
    NavigationBar.hideNavigationBar = function (successCallback, errorCallback) {
        if (typeof window.navigationbar !== 'undefined') {
            window.navigationbar.hideNavigationBar(successCallback, errorCallback);
        }
        else {
            NavigationBar.warnPluginIsUnInstallOrIncompatible();
        }
    };
    NavigationBar.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Navigationbar is uninstalled or incompatible with current platform');
    };
    return NavigationBar;
}());
exports.default = NavigationBar;
