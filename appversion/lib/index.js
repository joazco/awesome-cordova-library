"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Reads the version of your app from the target build settings.
 *
 * @requires module:cordova-plugin-app-version
 */
var Appversion = /** @class */ (function () {
    function Appversion() {
    }
    /**
     * Return App Name
     * @return Promise<string>
     */
    Appversion.getAppName = function () {
        if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
            Appversion.warnPluginIsUnInstallOrIncompatible();
            return Promise.resolve(null);
        }
        else {
            return cordova.getAppVersion.getAppName();
        }
    };
    /**
     * Return Package Name
     * @return Promise<string>
     */
    Appversion.getPackageName = function () {
        if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
            Appversion.warnPluginIsUnInstallOrIncompatible();
            return Promise.resolve(null);
        }
        else {
            return cordova.getAppVersion.getPackageName();
        }
    };
    /**
     * Return App Version Number
     * @return Promise<string>
     */
    Appversion.getVersionNumber = function () {
        if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
            Appversion.warnPluginIsUnInstallOrIncompatible();
            return Promise.resolve(null);
        }
        else {
            return cordova.getAppVersion.getVersionNumber();
        }
    };
    /**
     * Return App Version Code
     * @return Promise<string>
     */
    Appversion.getVersionCode = function () {
        if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
            Appversion.warnPluginIsUnInstallOrIncompatible();
            return Promise.resolve(null);
        }
        else {
            return cordova.getAppVersion.getVersionCode();
        }
    };
    Appversion.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('AppVersion is uninstalled or incompatible with current platform');
    };
    return Appversion;
}());
exports.default = Appversion;
