/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin obtains information and performs operations specific to the user's locale, language, and timezone. Note the difference between locale and language: locale controls how numbers, dates, and times are displayed for a region, while language determines what language text appears as, independently of locale settings.
 * Also, check out {@link https://github.com/apache/cordova-plugin-globalization Github}
 * @requires module:cordova-plugin-globalization
 */
export default class Globalization {
    /**
     * Get the BCP 47 language tag for the client's current language.
     * @param successCallback
     * @param errorCallback
     */
    static getPreferredLanguage(successCallback: (language: {
        value: string;
    }) => void, errorCallback: () => void): void;
    /**
     * Get current locale from browser
     * @returns
     */
    static getPreferredLanguageWeb(): string;
    /**
     * Returns the BCP 47 compliant tag for the client's current locale setting.
     * @param successCallback
     * @param errorCallback
     */
    static getLocaleName(successCallback: (language: {
        value: string;
    }) => void, errorCallback: () => void): void;
    /**
     * Returns a date formatted as a string according to the client's locale and timezone.
     * @param date
     * @param successCallback
     * @param errorCallback
     */
    static dateToString(date: Date, successCallback: (date: {
        value: string;
    }) => void, errorCallback: () => void): void;
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param currencyCode
     * @param successCallback
     * @param errorCallback
     */
    static getCurrencyPattern(currencyCode: string, successCallback: (pattern: {
        pattern: string;
        code: string;
        fraction: number;
        rounding: number;
        decimal: string;
        grouping: string;
    }) => void, errorCallback: () => void): void;
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    static getDateNames(successCallback: (names: {
        value: string;
    }[]) => void, errorCallback: () => void, options?: {
        type: 'narrow' | 'wide';
        item: 'months' | 'days';
    }): void;
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    static getDatePattern(successCallback: (date: {
        pattern: string;
        timeaone: string;
        iana_timezone: string;
        utc_offset: string;
        dst_offset: string;
    }) => void, errorCallback: () => void, options?: {
        formatLength: 'short' | 'medium' | 'long' | 'full';
        selector: 'date' | 'time';
    }): void;
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @param successCallback
     * @param errorCallback
     */
    static getFirstDayOfWeek(successCallback: (day: {
        value: number;
    }) => void, errorCallback: () => void): void;
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    static getNumberPattern(successCallback: (pattern: {
        pattern: string;
        symbol: string;
        fraction: number;
        rounding: number;
        positive: string;
        negative: string;
        decimal: string;
        grouping: string;
    }) => void, errorCallback: () => void, options?: {
        type: 'decimal' | 'percent' | 'currency';
    }): void;
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param date
     * @param successCallback
     * @param errorCallback
     */
    static isDayLightSavingsTime(date: Date, successCallback: (date: {
        dst: boolean;
    }) => void, errorCallback: () => void): void;
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param n
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    static numberToString(n: number, successCallback: (n: {
        value: string;
    }) => void, errorCallback: () => void, options?: {
        type: 'decimal' | 'percent' | 'currency';
    }): void;
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param dateString
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    static stringToDate(dateString: string, successCallback: (date: {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    }) => void, errorCallback: () => void, options?: {
        formatLength: 'short' | 'medium' | 'long' | 'full';
        selector: 'date' | 'time' | 'date and time';
    }): void;
    /**
     * Parses a number formatted as a string according to the client's user preferences and returns the corresponding number.
     * @param s
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    static stringToNumber(s: string, successCallback: (n: {
        value: number;
    }) => void, errorCallback: () => void, options?: {
        type: 'decimal' | 'percent' | 'currency';
    }): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
