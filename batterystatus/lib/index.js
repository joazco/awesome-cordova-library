"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides an implementation of an old version of the Battery Status Events API.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-battery-status/index.html Cordova}
 * @requires module:cordova-plugin-battery-status
 */
var BatteryStatus = /** @class */ (function () {
    function BatteryStatus() {
    }
    /**
     * Fires when the battery charge percentage changes by at least 1 percent, or when the device is plugged in or unplugged. Returns an object containing battery status.
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    BatteryStatus.onBatteryStatus = function (callback) {
        if (typeof window.cordova === 'undefined') {
            BatteryStatus.onBatteryStatusWeb(callback);
        }
        else {
            window.addEventListener('batterystatus', function (status) {
                callback(status);
            }, false);
        }
    };
    /**
     * Fires when the battery charge percentage changes by at least 1 percent, or when the device is plugged in or unplugged. Returns an object containing battery status.
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    BatteryStatus.onBatteryStatusWeb = function (callback) {
        if (navigator.getBattery) {
            navigator.getBattery().then(function (battery) {
                callback({ isPlugged: battery.charging, level: battery.level * 100 });
                battery.onlevelchange = function () {
                    callback({ isPlugged: battery.charging, level: battery.level * 100 });
                };
            });
        }
    };
    /**
     * Fires when the battery charge percentage reaches the low charge threshold. This threshold value is device-specific.
     * Incompatible without cordova
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    BatteryStatus.onBatteryLow = function (callback) {
        if (typeof window.cordova !== 'undefined') {
            window.addEventListener('onBatteryLow', function (status) {
                callback(status);
            }, false);
        }
        else {
            BatteryStatus.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Fires when the battery charge percentage reaches the critical charge threshold. This threshold value is device-specific.
     * Incompatible without cordova
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    BatteryStatus.onBatteryCritical = function (callback) {
        if (typeof window.cordova !== 'undefined') {
            window.addEventListener('batterycritical', function (status) {
                callback(status);
            }, false);
        }
        else {
            BatteryStatus.warnPluginIsUnInstallOrIncompatible();
        }
    };
    BatteryStatus.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('BatteryStatus is uninstalled or incompatible with current platform');
    };
    return BatteryStatus;
}());
exports.default = BatteryStatus;
