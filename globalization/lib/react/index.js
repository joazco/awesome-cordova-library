"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-vibration/index.html Cordova} or {@link http://www.w3.org/TR/vibration/ W3}
 * @requires module:cordova-plugin-vibration
 */
var useGlobalization = function () {
    var getPreferredLanguage = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) {
            __1.default.getPreferredLanguage(resolve, reject);
        });
    }, []);
    var getPreferredLanguageWeb = (0, react_1.useCallback)(function () { return __1.default.getPreferredLanguageWeb(); }, []);
    var getLocaleName = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) {
            __1.default.getLocaleName(resolve, reject);
        });
    }, []);
    var dateToString = (0, react_1.useCallback)(function (date) {
        return new Promise(function (resolve, reject) {
            __1.default.dateToString(date, resolve, reject);
        });
    }, []);
    var getCurrencyPattern = (0, react_1.useCallback)(function (currencyCode) {
        return new Promise(function (resolve, reject) {
            __1.default.getCurrencyPattern(currencyCode, resolve, reject);
        });
    }, []);
    var getDateNames = (0, react_1.useCallback)(function (options) {
        return new Promise(function (resolve, reject) {
            __1.default.getDateNames(resolve, reject, options);
        });
    }, []);
    var getDatePattern = (0, react_1.useCallback)(function (options) {
        return new Promise(function (resolve, reject) {
            __1.default.getDatePattern(resolve, reject, options);
        });
    }, []);
    var getFirstDayOfWeek = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) {
            __1.default.getFirstDayOfWeek(resolve, reject);
        });
    }, []);
    var getNumberPattern = (0, react_1.useCallback)(function (options) {
        return new Promise(function (resolve, reject) {
            __1.default.getNumberPattern(resolve, reject, options);
        });
    }, []);
    var isDayLightSavingsTime = (0, react_1.useCallback)(function (date) {
        return new Promise(function (resolve, reject) {
            __1.default.isDayLightSavingsTime(date, resolve, reject);
        });
    }, []);
    var numberToString = (0, react_1.useCallback)(function (n, options) {
        return new Promise(function (resolve, reject) {
            __1.default.numberToString(n, resolve, reject, options);
        });
    }, []);
    var stringToDate = (0, react_1.useCallback)(function (dateString, options) {
        return new Promise(function (resolve, reject) {
            __1.default.stringToDate(dateString, resolve, reject, options);
        });
    }, []);
    var stringToNumber = (0, react_1.useCallback)(function (s, options) {
        return new Promise(function (resolve, reject) {
            __1.default.stringToNumber(s, resolve, reject, options);
        });
    }, []);
    return {
        getPreferredLanguage: getPreferredLanguage,
        getPreferredLanguageWeb: getPreferredLanguageWeb,
        getLocaleName: getLocaleName,
        dateToString: dateToString,
        getCurrencyPattern: getCurrencyPattern,
        getDateNames: getDateNames,
        getDatePattern: getDatePattern,
        getFirstDayOfWeek: getFirstDayOfWeek,
        getNumberPattern: getNumberPattern,
        isDayLightSavingsTime: isDayLightSavingsTime,
        numberToString: numberToString,
        stringToDate: stringToDate,
        stringToNumber: stringToNumber,
    };
};
exports.default = useGlobalization;
