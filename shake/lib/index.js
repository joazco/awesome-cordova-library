"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to detect when a physical device performs a shake gesture.
 * Also, check out {@link https://github.com/leecrossley/cordova-plugin-shake#readme Github}
 * @requires module:cordova-plugin-shake
 */
var Shake = /** @class */ (function () {
    function Shake() {
    }
    /**
     * Start watching for shake gestures and call "onShake"
     * @param coords
     */
    Shake.startWatch = function (onShake, sensitivity, onError) {
        if (sensitivity === void 0) { sensitivity = 30; }
        if (typeof shake !== 'undefined') {
            shake.startWatch(onShake, sensitivity, onError);
        }
        else {
            Shake.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Stop watching for shake gestures
     * @param coords
     */
    Shake.stopWatch = function () {
        if (typeof shake !== 'undefined') {
            shake.stopWatch();
        }
        else {
            Shake.warnPluginIsUnInstallOrIncompatible();
        }
    };
    Shake.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Shake Plugin is uninstalled or incompatible with current platform');
    };
    return Shake;
}());
exports.default = Shake;
