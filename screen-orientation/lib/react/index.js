"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, and windows-uwp
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-screen-orientation/index.html Cordova}
 * @requires module:cordova-plugin-screen-orientation
 */
var useScreenOrientation = function () {
    /**
     * lock the device orientation
     * @param orientation {OrientationLockCordovaType}
     */
    var lock = (0, react_1.useCallback)(function (orientation) {
        if (screen) {
            __1.default.lock(orientation);
        }
    }, []);
    /**
     * unlock the orientation
     */
    var unLock = (0, react_1.useCallback)(function () {
        __1.default.unLock();
    }, []);
    /**
     * current orientation
     * @returns {OrientationLockCordovaType}
     */
    var currentOrientation = (0, react_1.useCallback)(function () {
        return __1.default.currentOrientation();
    }, []);
    /**
     * Both android and iOS will fire the orientationchange event on the window object. For this version of the plugin use the window object if you require notification.
     * @param callback {(orientation: OrientationLockCordovaType) => void}
     */
    var onOrientationChange = (0, react_1.useCallback)(function (callback) {
        __1.default.onOrientationChange(callback);
    }, []);
    return { lock: lock, unLock: unLock, currentOrientation: currentOrientation, onOrientationChange: onOrientationChange };
};
exports.default = useScreenOrientation;
