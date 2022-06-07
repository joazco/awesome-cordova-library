"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, and windows-uwp
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-screen-orientation/index.html Cordova}
 * @requires module:cordova-plugin-screen-orientation
 */
var ScreenOrientation = /** @class */ (function () {
    function ScreenOrientation() {
    }
    /**
     * lock the device orientation
     * @param orientation {OrientationLockCordovaType}
     */
    ScreenOrientation.lock = function (orientation) {
        if (screen === null || screen === void 0 ? void 0 : screen.orientation) {
            screen.orientation.lock(orientation);
        }
        else {
            ScreenOrientation.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * unlock the orientation
     */
    ScreenOrientation.unLock = function () {
        if (screen === null || screen === void 0 ? void 0 : screen.orientation) {
            screen.orientation.unlock();
        }
        else {
            ScreenOrientation.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * current orientation
     * @returns {OrientationLockCordovaType}
     */
    ScreenOrientation.currentOrientation = function () {
        if (screen === null || screen === void 0 ? void 0 : screen.orientation) {
            return screen.orientation.type;
        }
        ScreenOrientation.warnPluginIsUnInstallOrIncompatible();
        return 'portrait';
    };
    /**
     * Both android and iOS will fire the orientationchange event on the window object. For this version of the plugin use the window object if you require notification.
     * @param callback {(orientation: OrientationLockCordovaType) => void}
     */
    ScreenOrientation.onOrientationChange = function (callback) {
        if (screen === null || screen === void 0 ? void 0 : screen.orientation) {
            screen.orientation.addEventListener('change', function () {
                callback(screen.orientation.type);
            });
        }
        else {
            ScreenOrientation.warnPluginIsUnInstallOrIncompatible();
        }
    };
    ScreenOrientation.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Screen Orientation is uninstalled or incompatible with current platform');
    };
    return ScreenOrientation;
}());
exports.default = ScreenOrientation;
