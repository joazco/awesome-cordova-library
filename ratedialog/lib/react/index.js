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
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * A plugin to provide rate this app functionality into your cordova application
 * @requires module:@awesome-cordova-library/localstorage
 * @requires module:@awesome-cordova-library/dialogs
 * @requires module:@awesome-cordova-library/device
 * @requires module:@awesome-cordova-library/inappbrowser
 */
var useRateDialog = function (initOptions) {
    var setPreference = (0, react_1.useCallback)(function (options) {
        __1.default.setPreference(__assign(__assign({}, initOptions), options));
    }, []);
    var promptForRating = (0, react_1.useCallback)(function (force) {
        if (force === void 0) { force = false; }
        __1.default.promptForRating(force);
    }, []);
    var resetUserRatedOrRefused = (0, react_1.useCallback)(function () {
        __1.default.resetUserRatedOrRefused();
    }, []);
    var getUserRatedOrRefused = (0, react_1.useCallback)(function () {
        return __1.default.getUserRatedOrRefused();
    }, []);
    var getNbUseApp = (0, react_1.useCallback)(function () {
        return __1.default.getNbUseApp();
    }, []);
    var setLocale = (0, react_1.useCallback)(function (locale) {
        return __1.default.setLocale(locale);
    }, []);
    (0, react_1.useEffect)(function () {
        __1.default.setPreference(initOptions);
    }, [initOptions]);
    return {
        setPreference: setPreference,
        promptForRating: promptForRating,
        resetUserRatedOrRefused: resetUserRatedOrRefused,
        getUserRatedOrRefused: getUserRatedOrRefused,
        getNbUseApp: getNbUseApp,
        setLocale: setLocale,
    };
};
exports.default = useRateDialog;
