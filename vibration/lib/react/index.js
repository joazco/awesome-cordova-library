"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-vibration/index.html Cordova} or {@link http://www.w3.org/TR/vibration/ W3}
 * @requires module:cordova-plugin-vibration
 */
var useVibration = function () {
    /**
     * Vibrates the device for a given amount of time.
     * @param time {number | number[]} time
     */
    var vibrate = (0, react_1.useCallback)(function (time) {
        __1.default.vibrate(time);
    }, []);
    return vibrate;
};
exports.default = useVibration;
