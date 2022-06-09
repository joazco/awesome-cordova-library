// Type definitions for Apache Cordova Splashscreen plugin
// Project: https://github.com/apache/cordova-plugin-splashscreen
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.

interface Globalization {
  getPreferredLanguage: (successCallback: (language: { value: string }) => void, errorCallback: () => void) => void;
  getLocaleName: Globalization['getPreferredLanguage'];
  dateToString: (date: Date, successCallback: (date: { value: string }) => void, errorCallback: () => void) => void;
  getCurrencyPattern: (
    currencyCode: string,
    successCallback: (pattern: {
      pattern: string;
      code: string;
      fraction: number;
      rounding: number;
      decimal: string;
      grouping: string;
    }) => void,
    errorCallback: () => void,
  ) => void;
  getDateNames: (
    successCallback: (names: { value: string }[]) => void,
    errorCallback: () => void,
    options?: {
      type: 'narrow' | 'wide';
      item: 'months' | 'days';
    },
  ) => void;
  getDatePattern: (
    successCallback: (date: {
      pattern: string;
      timeaone: string;
      iana_timezone: string;
      utc_offset: string;
      dst_offset: string;
    }) => void,
    errorCallback: () => void,
    options?: {
      formatLength: 'short' | 'medium' | 'long' | 'full';
      selector: 'date' | 'time';
    },
  ) => void;
  getFirstDayOfWeek: (successCallback: (day: { value: number }) => void, errorCallback: () => void) => void;
  getNumberPattern: (
    successCallback: (pattern: {
      pattern: string;
      symbol: string;
      fraction: number;
      rounding: number;
      positive: string;
      negative: string;
      decimal: string;
      grouping: string;
    }) => void,
    errorCallback: () => void,
    options?: {
      type: 'decimal' | 'percent' | 'currency';
    },
  ) => void;
  isDayLightSavingsTime: (
    date: Date,
    successCallback: (date: { dst: boolean }) => void,
    errorCallback: () => void,
  ) => void;
  numberToString: (
    n: number,
    successCallback: (number: { value: string }) => void,
    errorCallback: () => void,
    options?: {
      type: 'decimal' | 'percent' | 'currency';
    },
  ) => void;
  stringToDate: (
    dateString: string,
    successCallback: (date: {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
      millisecond: number;
    }) => void,
    errorCallback: () => void,
    options?: {
      formatLength: 'short' | 'medium' | 'long' | 'full';
      selector: 'date' | 'time' | 'date and time';
    },
  ) => void;
  stringToNumber: (
    s: string,
    successCallback: (n: { value: number }) => void,
    errorCallback: () => void,
    options?: {
      type: 'decimal' | 'percent' | 'currency';
    },
  ) => void;
}

interface Navigator {
  globalization: Globalization;
}
