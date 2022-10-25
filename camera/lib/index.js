"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureSourceType = exports.MediaType = exports.EncodingType = exports.Direction = exports.DestinationType = void 0;
var types_1 = require("./types");
Object.defineProperty(exports, "DestinationType", { enumerable: true, get: function () { return types_1.DestinationType; } });
Object.defineProperty(exports, "Direction", { enumerable: true, get: function () { return types_1.Direction; } });
Object.defineProperty(exports, "EncodingType", { enumerable: true, get: function () { return types_1.EncodingType; } });
Object.defineProperty(exports, "MediaType", { enumerable: true, get: function () { return types_1.MediaType; } });
Object.defineProperty(exports, "PictureSourceType", { enumerable: true, get: function () { return types_1.PictureSourceType; } });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin defines a global navigator.camera object, which provides an API for taking pictures and for choosing images from the system's image library.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-camera/index.html Cordova}
 * @requires module:cordova-plugin-camera
 */
var Camera = /** @class */ (function () {
    function Camera() {
    }
    /**
     * Takes a photo using the camera, or retrieves a photo from the device's image gallery. The image is passed to the success callback as a Base64-encoded String, or as the URI for the image file.
     * @param cameraSuccess {(imageData: string) => void}
     * @param cameraError {(message: string) => void}
     * @param cameraOptions {Partial<CameraOptions>|undefined}
     */
    Camera.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
        if (typeof navigator.camera !== 'undefined') {
            navigator.camera.getPicture(cameraSuccess, cameraError, __assign(__assign({}, types_1.defaultOptions), cameraOptions));
        }
        else {
            Camera.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Removes intermediate image files that are kept in temporary storage after calling camera.getPicture. Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @param onSuccess {() => void}
     * @param onFail {() => void}
     */
    Camera.cleanup = function (onSuccess, onFail) {
        if (typeof navigator.camera !== 'undefined') {
            navigator.camera.cleanup(onSuccess, onFail);
        }
        else {
            Camera.warnPluginIsUnInstallOrIncompatible();
        }
    };
    Camera.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Camera is uninstalled or incompatible with current platform');
    };
    return Camera;
}());
exports.default = Camera;
