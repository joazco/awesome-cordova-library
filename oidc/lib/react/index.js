"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
var useOIDC = function () {
    var presentAuthorizationRequest = (0, react_1.useCallback)(function (req) {
        return new Promise(function (resolve, reject) {
            return __1.default.presentAuthorizationRequest(req, resolve, reject);
        });
    }, []);
    var presentEndSessionRequest = (0, react_1.useCallback)(function (req) {
        return new Promise(function (resolve, reject) { return __1.default.presentEndSessionRequest(req, resolve, reject); });
    }, []);
    return { presentAuthorizationRequest: presentAuthorizationRequest, presentEndSessionRequest: presentEndSessionRequest };
};
exports.default = useOIDC;
