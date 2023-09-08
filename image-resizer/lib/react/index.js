"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
var useImageResizer = function () {
    var resize = (0, react_1.useCallback)(function (options) {
        return new Promise(function (resolve, reject) {
            __1.default.resize(options, resolve, reject);
        });
    }, []);
    return resize;
};
exports.default = useImageResizer;
