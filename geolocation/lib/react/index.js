"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
var useGeolocation = function () {
    var getCurrentPosition = function (options) {
        return new Promise(function (resolve, reject) {
            __1.default.getCurrentPosition(resolve, reject, options);
        });
    };
    var watchPosition = function (successCallback, errorCallback, options) {
        return __1.default.watchPosition(successCallback, errorCallback, options);
    };
    var clearWatch = function (watchId) {
        __1.default.clearWatch(watchId);
    };
    return { getCurrentPosition: getCurrentPosition, watchPosition: watchPosition, clearWatch: clearWatch };
};
exports.default = useGeolocation;
