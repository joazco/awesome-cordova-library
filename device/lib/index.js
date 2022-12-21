"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin defines a global device object, which describes the device's hardware and software. Although the object is in the global scope, it is not available until after the deviceready event.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-device/index.html Cordova}
 * @requires module:cordova-plugin-device
 */
var Device = /** @class */ (function () {
    function Device() {
    }
    /**
     * Returns the name of the device's model or product. The value is set by the device manufacturer and may be different across versions of the same product.
     *
     * Android:    Nexus One       returns "Passion" (Nexus One code name)
     *             Motorola Droid  returns "voles"
     * BlackBerry: Torch 9800      returns "9800"
     * Browser:    Google Chrome   returns "Chrome"
     *             Safari          returns "Safari"
     * iOS:     for the iPad Mini, returns iPad2,5; iPhone 5 is iPhone 5,1. See http://theiphonewiki.com/wiki/index.php?title=Models
     * OSX:                        returns "x86_64"
     * @returns {string}
     */
    Device.getModel = function () {
        if (typeof device !== 'undefined') {
            return device.model;
        }
        return Device.getBrowserInfo(true);
    };
    /**
     * Get the device's operating system name.
     * Depending on the device, a few examples are:
     *   - "Android"
     *   - "BlackBerry 10"
     *   - "browser"
     *   - "iOS"
     *   - "WinCE"
     *   - "Tizen"
     *   - "Mac OS X"
     * @returns {string}
     */
    Device.getPlatform = function () {
        if (typeof device !== 'undefined') {
            return device.platform;
        }
        return 'browser';
    };
    /**
     * Get the operating system version.
     * @returns {string}
     */
    Device.getVersion = function () {
        return Device.getBrowserInfo(false);
    };
    /**
     * Get the device's Universally Unique Identifier
     * @returns {string | null}
     */
    Device.getUuid = function () {
        if (typeof device !== 'undefined') {
            return device.uuid;
        }
        return null;
    };
    /**
     * Get the device's manufacturer.
     * @returns {string | null}
     */
    Device.getManufacturer = function () {
        if (typeof device !== 'undefined') {
            return device.manufacturer;
        }
        return null;
    };
    /**
     * whether the device is running on a simulator.
     * @returns {boolean | null}
     */
    Device.getIsVirtual = function () {
        if (typeof device !== 'undefined') {
            return device.isVirtual;
        }
        return false;
    };
    Device.getBrowserInfo = function (getModel) {
        var userAgent = navigator.userAgent;
        var returnVal = '';
        var offset;
        if (userAgent.indexOf('Edge') !== -1) {
            offset = userAgent.indexOf('Edge');
            returnVal = getModel ? 'Edge' : userAgent.substring(offset + 5);
        }
        else if (userAgent.indexOf('Chrome') !== -1) {
            offset = userAgent.indexOf('Chrome');
            returnVal = getModel ? 'Chrome' : userAgent.substring(offset + 7);
        }
        else if (userAgent.indexOf('Safari') !== -1) {
            offset = userAgent.indexOf('Safari');
            if (getModel) {
                returnVal = 'Safari';
            }
            else {
                returnVal = userAgent.substring(offset + 7);
                if (userAgent.indexOf('Version') !== -1) {
                    offset = userAgent.indexOf('Version');
                    returnVal = userAgent.substring(offset + 8);
                }
            }
        }
        else if (userAgent.indexOf('Firefox') !== -1) {
            offset = userAgent.indexOf('Firefox');
            returnVal = getModel ? 'Firefox' : userAgent.substring(offset + 8);
        }
        else if (userAgent.indexOf('MSIE') !== -1) {
            offset = userAgent.indexOf('MSIE');
            returnVal = getModel ? 'MSIE' : userAgent.substring(offset + 5);
        }
        else if (userAgent.indexOf('Trident') !== -1) {
            offset = userAgent.indexOf('Trident');
            returnVal = getModel ? 'MSIE' : '11';
        }
        if (returnVal.indexOf(';') !== -1) {
            offset = returnVal.indexOf(';');
            returnVal = returnVal.substring(0, offset);
        }
        else if (returnVal.indexOf(' ') !== -1) {
            offset = returnVal.indexOf(' ');
            returnVal = returnVal.substring(0, offset);
        }
        return returnVal;
    };
    return Device;
}());
exports.default = Device;
