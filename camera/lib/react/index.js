"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-battery-status/index.html Cordova}
 * @requires module:cordova-plugin-battery-status
 */
var useBatteryStatus = function () {
    var onBatteryStatus = (0, react_1.useCallback)(function (callback) {
        __1.default.onBatteryStatus(callback);
    }, []);
    var onBatteryLow = (0, react_1.useCallback)(function (callback) {
        __1.default.onBatteryLow(callback);
    }, []);
    var onBatteryCritical = (0, react_1.useCallback)(function (callback) {
        __1.default.onBatteryCritical(callback);
    }, []);
    return { onBatteryStatus: onBatteryStatus, onBatteryLow: onBatteryLow, onBatteryCritical: onBatteryCritical };
};
exports.default = useBatteryStatus;
