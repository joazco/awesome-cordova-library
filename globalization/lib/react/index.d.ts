/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-vibration/index.html Cordova} or {@link http://www.w3.org/TR/vibration/ W3}
 * @requires module:cordova-plugin-vibration
 */
declare const useGlobalization: () => {
    getPreferredLanguage: () => Promise<{
        value: string;
    }>;
    getPreferredLanguageWeb: () => string;
    getLocaleName: () => Promise<{
        value: string;
    }>;
    dateToString: (date: Date) => Promise<{
        value: string;
    }>;
    getCurrencyPattern: (currencyCode: string) => Promise<{
        pattern: string;
        code: string;
        fraction: number;
        rounding: number;
        decimal: string;
        grouping: string;
    }>;
    getDateNames: (options?: {
        type: 'narrow' | 'wide';
        item: 'months' | 'days';
    }) => Promise<{
        value: string;
    }[]>;
    getDatePattern: (options?: {
        formatLength: 'short' | 'medium' | 'long' | 'full';
        selector: 'date' | 'time';
    }) => Promise<{
        pattern: string;
        timeaone: string;
        iana_timezone: string;
        utc_offset: string;
        dst_offset: string;
    }>;
    getFirstDayOfWeek: () => Promise<{
        value: number;
    }>;
    getNumberPattern: (options?: {
        type: 'decimal' | 'percent' | 'currency';
    }) => Promise<{
        pattern: string;
        symbol: string;
        fraction: number;
        rounding: number;
        positive: string;
        negative: string;
        decimal: string;
        grouping: string;
    }>;
    isDayLightSavingsTime: (date: Date) => Promise<{
        dst: boolean;
    }>;
    numberToString: (n: number, options?: {
        type: 'decimal' | 'percent' | 'currency';
    }) => Promise<{
        value: string;
    }>;
    stringToDate: (dateString: string, options?: {
        formatLength: 'short' | 'medium' | 'long' | 'full';
        selector: 'date' | 'time' | 'date and time';
    }) => Promise<{
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    }>;
    stringToNumber: (s: string, options?: {
        type: 'decimal' | 'percent' | 'currency';
    }) => Promise<{
        value: number;
    }>;
};
export default useGlobalization;
