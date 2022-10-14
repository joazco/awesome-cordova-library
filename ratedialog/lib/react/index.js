"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
var useRateDialog = function (initOptions) {
    var setPreference = (0, react_1.useCallback)(function (options) {
        __1.default.setPreference(options);
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
