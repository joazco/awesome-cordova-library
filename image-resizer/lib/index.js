"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova Plugin For Image Resize.
 * Also, check out {@link https://github.com/JoschkaSchulz/cordova-plugin-image-resizer Github}
 * @requires module:cordova-plugin-camera
 */
var ImageResizer = /** @class */ (function () {
    function ImageResizer() {
    }
    ImageResizer.resize = function (options, success, error) {
        if (typeof window.ImageResizer === 'undefined') {
            ImageResizer.warnPluginIsUnInstallOrIncompatible();
        }
        else {
            window.ImageResizer.resize(options, success, error);
        }
    };
    ImageResizer.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('PatternPlugin is uninstalled or incompatible with current platform');
    };
    return ImageResizer;
}());
exports.default = ImageResizer;
