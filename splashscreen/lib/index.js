"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
var SplashScreen = /** @class */ (function () {
    function SplashScreen() {
    }
    /**
     * Displays the splash screen.
     */
    SplashScreen.show = function () {
        if (typeof navigator !== 'undefined' && navigator.splashscreen) {
            navigator.splashscreen.show();
        }
        else {
            SplashScreen.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Dismiss the splash screen.
     */
    SplashScreen.hide = function () {
        if (typeof navigator !== 'undefined' && navigator.splashscreen) {
            navigator.splashscreen.hide();
        }
        else {
            SplashScreen.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SplashScreen.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Splashscreen is uninstalled or incompatible with current platform');
    };
    return SplashScreen;
}());
exports.default = SplashScreen;
