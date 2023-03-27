"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to detect when a physical device performs a shake gesture.
 * Also, check out {@link https://github.com/leecrossley/cordova-plugin-shake#readme Github}
 * @requires module:cordova-plugin-shake
 */
var useShake = function () {
    var startWatch = (0, react_1.useCallback)(function (onShake, sensitivity, onError) {
        if (sensitivity === void 0) { sensitivity = 30; }
        __1.default.startWatch(onShake, sensitivity, onError);
    }, []);
    var stopWatch = (0, react_1.useCallback)(function () {
        __1.default.stopWatch();
    }, []);
    return {
        startWatch: startWatch,
        stopWatch: stopWatch,
    };
};
exports.default = useShake;
