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
var useNavigationBar = function () {
    var setUp = (0, react_1.useCallback)(function (autoHideNavigationBar) {
        return new Promise(function (resolve, reject) { return __1.default.setUp(autoHideNavigationBar, resolve, reject); });
    }, []);
    var hideNavigationBar = (0, react_1.useCallback)(function () { return new Promise(function (resolve, reject) { return __1.default.hideNavigationBar(resolve, reject); }); }, []);
    return { setUp: setUp, hideNavigationBar: hideNavigationBar };
};
exports.default = useNavigationBar;
