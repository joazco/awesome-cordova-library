"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
var useNavigationBar = function () {
    var setUp = (0, react_1.useCallback)(function (autoHideNavigationBar) {
        return new Promise(function (resolve, reject) { return __1.default.setUp(autoHideNavigationBar, resolve, reject); });
    }, []);
    var hideNavigationBar = (0, react_1.useCallback)(function () { return new Promise(function (resolve, reject) { return __1.default.hideNavigationBar(resolve, reject); }); }, []);
    return { setUp: setUp, hideNavigationBar: hideNavigationBar };
};
exports.default = useNavigationBar;
