"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("..");
var useNetworkInformation = function () {
    var getNetworkType = (0, react_1.useCallback)(function () {
        return __1.default.getNetworkType();
    }, []);
    var onOffline = (0, react_1.useCallback)(function (callback) {
        __1.default.onOffline(callback);
    }, []);
    var onOnline = (0, react_1.useCallback)(function (callback) {
        __1.default.onOnline(callback);
    }, []);
    return { getNetworkType: getNetworkType, onOffline: onOffline, onOnline: onOnline };
};
exports.default = useNetworkInformation;
