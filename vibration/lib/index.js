"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-vibration/index.html Cordova} or {@link http://www.w3.org/TR/vibration/ W3}
 * @requires module:cordova-plugin-vibration
 */
var Vibration = /** @class */ (function () {
    function Vibration() {
    }
    /**
     * Vibrates the device for a given amount of time.
     * @param time {number | number[]} time
     */
    Vibration.vibrate = function (time) {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(time);
        }
        else {
            Vibration.warnPluginIsUnInstallOrIncompatible();
        }
    };
    Vibration.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Vibration is uninstalled or incompatible with current platform');
    };
    return Vibration;
}());
exports.default = Vibration;
