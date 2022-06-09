"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin obtains information and performs operations specific to the user's locale, language, and timezone. Note the difference between locale and language: locale controls how numbers, dates, and times are displayed for a region, while language determines what language text appears as, independently of locale settings.
 * Also, check out {@link https://github.com/apache/cordova-plugin-globalization Github}
 * @requires module:cordova-plugin-globalization
 */
var Globalization = /** @class */ (function () {
    function Globalization() {
    }
    /**
     * Get the BCP 47 language tag for the client's current language.
     * @param successCallback
     * @param errorCallback
     */
    Globalization.getPreferredLanguage = function (successCallback, errorCallback) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.getPreferredLanguage) {
            navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
        }
        else {
            successCallback({ value: Globalization.getPreferredLanguageWeb() });
        }
    };
    /**
     * Get current locale from browser
     * @returns
     */
    Globalization.getPreferredLanguageWeb = function () {
        return navigator.language;
    };
    /**
     * Returns the BCP 47 compliant tag for the client's current locale setting.
     * @param successCallback
     * @param errorCallback
     */
    Globalization.getLocaleName = function (successCallback, errorCallback) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.getLocaleName) {
            navigator.globalization.getLocaleName(successCallback, errorCallback);
        }
        else {
            successCallback({ value: Globalization.getPreferredLanguageWeb() });
        }
    };
    /**
     * Returns a date formatted as a string according to the client's locale and timezone.
     * @param date
     * @param successCallback
     * @param errorCallback
     */
    Globalization.dateToString = function (date, successCallback, errorCallback) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.dateToString) {
            navigator.globalization.dateToString(date, successCallback, errorCallback);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param currencyCode
     * @param successCallback
     * @param errorCallback
     */
    Globalization.getCurrencyPattern = function (currencyCode, successCallback, errorCallback) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.getCurrencyPattern) {
            navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    Globalization.getDateNames = function (successCallback, errorCallback, options) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.getDateNames) {
            navigator.globalization.getDateNames(successCallback, errorCallback, options);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    Globalization.getDatePattern = function (successCallback, errorCallback, options) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.getDatePattern) {
            navigator.globalization.getDatePattern(successCallback, errorCallback, options);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @param successCallback
     * @param errorCallback
     */
    Globalization.getFirstDayOfWeek = function (successCallback, errorCallback) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.getFirstDayOfWeek) {
            navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    Globalization.getNumberPattern = function (successCallback, errorCallback, options) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.getNumberPattern) {
            navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param date
     * @param successCallback
     * @param errorCallback
     */
    Globalization.isDayLightSavingsTime = function (date, successCallback, errorCallback) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.isDayLightSavingsTime) {
            navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param n
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    Globalization.numberToString = function (n, successCallback, errorCallback, options) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.numberToString) {
            navigator.globalization.numberToString(n, successCallback, errorCallback, options);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param dateString
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    Globalization.stringToDate = function (dateString, successCallback, errorCallback, options) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.stringToDate) {
            navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * Parses a number formatted as a string according to the client's user preferences and returns the corresponding number.
     * @param s
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    Globalization.stringToNumber = function (s, successCallback, errorCallback, options) {
        var _a;
        if ((_a = navigator.globalization) === null || _a === void 0 ? void 0 : _a.stringToNumber) {
            navigator.globalization.stringToNumber(s, successCallback, errorCallback, options);
        }
        else {
            Globalization.warnPluginIsUnInstallOrIncompatible();
        }
    };
    Globalization.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Globalization is uninstalled or incompatible with current platform');
    };
    return Globalization;
}());
exports.default = Globalization;
