"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
var Geolocation = /** @class */ (function () {
    function Geolocation() {
    }
    Geolocation.getCurrentPosition = function (successCallback, errorCallback, options) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
    };
    Geolocation.watchPosition = function (successCallback, errorCallback, options) {
        return navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    };
    Geolocation.clearWatch = function (watchId) {
        navigator.geolocation.clearWatch(watchId);
    };
    return Geolocation;
}());
exports.default = Geolocation;
