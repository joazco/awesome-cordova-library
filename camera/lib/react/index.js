"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin defines a global navigator.camera object, which provides an API for taking pictures and for choosing images from the system's image library.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-camera/index.html Cordova}
 * @requires module:cordova-plugin-camera
 */
var useCamera = function () {
    var getPicture = (0, react_1.useCallback)(function (cameraSuccess, cameraError, cameraOptions) {
        __1.default.getPicture(cameraSuccess, cameraError, cameraOptions);
    }, []);
    var cleanup = (0, react_1.useCallback)(function (onSuccess, onFail) {
        __1.default.cleanup(onSuccess, onFail);
    }, []);
    return { getPicture: getPicture, cleanup: cleanup };
};
exports.default = useCamera;
