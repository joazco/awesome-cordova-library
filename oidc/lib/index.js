"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * OIDC Cordova plugin
 * Also, check out {@link https://github.com/mi-corporation/cordova-plugin-oidc-basic Github}
 * @requires module:https://github.com/mi-corporation/cordova-plugin-oidc-basic.git
 */
var OIDC = /** @class */ (function () {
    function OIDC() {
    }
    OIDC.presentAuthorizationRequest = function (req, success, error) {
        var _a, _b, _c;
        if (typeof ((_c = (_b = (_a = cordova === null || cordova === void 0 ? void 0 : cordova.plugins) === null || _a === void 0 ? void 0 : _a.oidc) === null || _b === void 0 ? void 0 : _b.basic) === null || _c === void 0 ? void 0 : _c.presentAuthorizationRequest) === 'undefined') {
            OIDC.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        cordova.plugins.oidc.basic.presentAuthorizationRequest(req, success, error);
    };
    OIDC.presentEndSessionRequest = function (req, success, error) {
        var _a, _b, _c;
        if (typeof ((_c = (_b = (_a = cordova === null || cordova === void 0 ? void 0 : cordova.plugins) === null || _a === void 0 ? void 0 : _a.oidc) === null || _b === void 0 ? void 0 : _b.basic) === null || _c === void 0 ? void 0 : _c.presentEndSessionRequest) === 'undefined') {
            OIDC.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        cordova.plugins.oidc.basic.presentEndSessionRequest(req, success, error);
    };
    OIDC.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('OIDC plugin is uninstalled or incompatible with current platform');
    };
    return OIDC;
}());
exports.default = OIDC;
