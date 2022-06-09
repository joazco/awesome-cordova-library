import { useCallback } from 'react';
import Globalization from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-vibration/index.html Cordova} or {@link http://www.w3.org/TR/vibration/ W3}
 * @requires module:cordova-plugin-vibration
 */
const useGlobalization = () => {
  const getPreferredLanguage = useCallback(
    (): Promise<{ value: string }> =>
      new Promise((resolve, reject) => {
        Globalization.getPreferredLanguage(resolve, reject);
      }),
    [],
  );

  const getPreferredLanguageWeb = useCallback((): string => Globalization.getPreferredLanguageWeb(), []);

  const getLocaleName = useCallback(
    (): Promise<{ value: string }> =>
      new Promise((resolve, reject) => {
        Globalization.getLocaleName(resolve, reject);
      }),
    [],
  );

  const dateToString = useCallback(
    (date: Date): Promise<{ value: string }> =>
      new Promise((resolve, reject) => {
        Globalization.dateToString(date, resolve, reject);
      }),
    [],
  );

  const getCurrencyPattern = useCallback(
    (
      currencyCode: string,
    ): Promise<{
      pattern: string;
      code: string;
      fraction: number;
      rounding: number;
      decimal: string;
      grouping: string;
    }> =>
      new Promise((resolve, reject) => {
        Globalization.getCurrencyPattern(currencyCode, resolve, reject);
      }),
    [],
  );

  const getDateNames = useCallback(
    (options?: { type: 'narrow' | 'wide'; item: 'months' | 'days' }): Promise<{ value: string }[]> =>
      new Promise((resolve, reject) => {
        Globalization.getDateNames(resolve, reject, options);
      }),
    [],
  );

  const getDatePattern = useCallback(
    (options?: {
      formatLength: 'short' | 'medium' | 'long' | 'full';
      selector: 'date' | 'time';
    }): Promise<{
      pattern: string;
      timeaone: string;
      iana_timezone: string;
      utc_offset: string;
      dst_offset: string;
    }> =>
      new Promise((resolve, reject) => {
        Globalization.getDatePattern(resolve, reject, options);
      }),
    [],
  );

  const getFirstDayOfWeek = useCallback(
    (): Promise<{ value: number }> =>
      new Promise((resolve, reject) => {
        Globalization.getFirstDayOfWeek(resolve, reject);
      }),
    [],
  );

  const getNumberPattern = useCallback(
    (options?: {
      type: 'decimal' | 'percent' | 'currency';
    }): Promise<{
      pattern: string;
      symbol: string;
      fraction: number;
      rounding: number;
      positive: string;
      negative: string;
      decimal: string;
      grouping: string;
    }> =>
      new Promise((resolve, reject) => {
        Globalization.getNumberPattern(resolve, reject, options);
      }),
    [],
  );

  const isDayLightSavingsTime = useCallback(
    (date: Date): Promise<{ dst: boolean }> =>
      new Promise((resolve, reject) => {
        Globalization.isDayLightSavingsTime(date, resolve, reject);
      }),
    [],
  );

  const numberToString = useCallback(
    (
      n: number,
      options?: {
        type: 'decimal' | 'percent' | 'currency';
      },
    ): Promise<{ value: string }> =>
      new Promise((resolve, reject) => {
        Globalization.numberToString(n, resolve, reject, options);
      }),
    [],
  );

  const stringToDate = useCallback(
    (
      dateString: string,
      options?: {
        formatLength: 'short' | 'medium' | 'long' | 'full';
        selector: 'date' | 'time' | 'date and time';
      },
    ): Promise<{
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
      millisecond: number;
    }> =>
      new Promise((resolve, reject) => {
        Globalization.stringToDate(dateString, resolve, reject, options);
      }),
    [],
  );

  const stringToNumber = useCallback(
    (
      s: string,
      options?: {
        type: 'decimal' | 'percent' | 'currency';
      },
    ): Promise<{ value: number }> =>
      new Promise((resolve, reject) => {
        Globalization.stringToNumber(s, resolve, reject, options);
      }),
    [],
  );

  return {
    getPreferredLanguage,
    getPreferredLanguageWeb,
    getLocaleName,
    dateToString,
    getCurrencyPattern,
    getDateNames,
    getDatePattern,
    getFirstDayOfWeek,
    getNumberPattern,
    isDayLightSavingsTime,
    numberToString,
    stringToDate,
    stringToNumber,
  };
};

export default useGlobalization;
