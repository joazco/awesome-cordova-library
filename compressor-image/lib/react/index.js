"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
var useCompressorImage = function () {
    var compress = (0, react_1.useCallback)(function (options) {
        return __1.default.compress(options);
    }, []);
    var compressTargetLength = (0, react_1.useCallback)(function (options) {
        return __1.default.compressTargetLength(options);
    }, []);
    var determineOutputFormat = (0, react_1.useCallback)(function (extension) {
        return __1.default.determineOutputFormat(extension);
    }, []);
    var sizeBase64ToMo = (0, react_1.useCallback)(function (base64) {
        return __1.default.sizeBase64ToMo(base64);
    }, []);
    return { compress: compress, compressTargetLength: compressTargetLength, determineOutputFormat: determineOutputFormat, sizeBase64ToMo: sizeBase64ToMo };
};
exports.default = useCompressorImage;
