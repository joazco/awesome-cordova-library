---
id: plugin-globalization
title: Globalization
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - globalization
---

# Globalization

This plugin obtains information and performs operations specific to the user's locale, language, and timezone. Note the difference between locale and language: locale controls how numbers, dates, and times are displayed for a region, while language determines what language text appears as, independently of locale settings.

[Online documentation](https://awesomecordovalibrary.com)

[Github documentation](https://github.com/apache/cordova-plugin-globalization)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-globalization
npm install @awesome-cordova-library/globalization
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-globalization
npm install @awesome-cordova-library/globalization
npx cap sync
```

## Vanilla

### Declaration

```typescript
class Globalization {
  static getPreferredLanguage(
    successCallback: (language: { value: string }) => void,
    errorCallback: () => void
  ): void;
  static getPreferredLanguageWeb(): string;
  static getLocaleName(
    successCallback: (language: { value: string }) => void,
    errorCallback: () => void
  ): void;
  static dateToString(
    date: Date,
    successCallback: (date: { value: string }) => void,
    errorCallback: () => void
  ): void;
  static getCurrencyPattern(
    currencyCode: string,
    successCallback: (pattern: {
      pattern: string;
      code: string;
      fraction: number;
      rounding: number;
      decimal: string;
      grouping: string;
    }) => void,
    errorCallback: () => void
  ): void;
  static getDateNames(
    successCallback: (
      names: {
        value: string;
      }[]
    ) => void,
    errorCallback: () => void,
    options?: {
      type: "narrow" | "wide";
      item: "months" | "days";
    }
  ): void;
  static getDatePattern(
    successCallback: (date: {
      pattern: string;
      timeaone: string;
      iana_timezone: string;
      utc_offset: string;
      dst_offset: string;
    }) => void,
    errorCallback: () => void,
    options?: {
      formatLength: "short" | "medium" | "long" | "full";
      selector: "date" | "time";
    }
  ): void;
  static getFirstDayOfWeek(
    successCallback: (day: { value: number }) => void,
    errorCallback: () => void
  ): void;
  static getNumberPattern(
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
      type: "decimal" | "percent" | "currency";
    }
  ): void;
  static isDayLightSavingsTime(
    date: Date,
    successCallback: (date: { dst: boolean }) => void,
    errorCallback: () => void
  ): void;
  static numberToString(
    n: number,
    successCallback: (number: { value: string }) => void,
    errorCallback: () => void,
    options?: {
      type: "decimal" | "percent" | "currency";
    }
  ): void;
  static stringToDate(
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
      formatLength: "short" | "medium" | "long" | "full";
      selector: "date" | "time" | "date and time";
    }
  ): void;
  static stringToNumber(
    s: string,
    successCallback: (n: { value: number }) => void,
    errorCallback: () => void,
    options?: {
      type: "decimal" | "percent" | "currency";
    }
  ): void;
}
```

### Usages

```typescript
import Globalization from "@awesome-cordova-library/globalization";

Globalization.getPreferredLanguage(
  function (language) {
    alert("language: " + language.value + "\n");
  },
  function () {
    alert("Error getting language\n");
  }
);

Globalization.getPreferredLanguageWeb();

Globalization.getLocaleName(
  function (locale) {
    alert("locale: " + locale.value + "\n");
  },
  function () {
    alert("Error getting locale\n");
  }
);

Globalization.dateToString(
  new Date(),
  function (date) {
    alert("date: " + date.value + "\n");
  },
  function () {
    alert("Error getting dateString\n");
  },
  { formatLength: "short", selector: "date and time" }
);

Globalization.getCurrencyPattern(
  "USD",
  function (pattern) {
    alert(
      "pattern: " +
        pattern.pattern +
        "\n" +
        "code: " +
        pattern.code +
        "\n" +
        "fraction: " +
        pattern.fraction +
        "\n" +
        "rounding: " +
        pattern.rounding +
        "\n" +
        "decimal: " +
        pattern.decimal +
        "\n" +
        "grouping: " +
        pattern.grouping
    );
  },
  function () {
    alert("Error getting pattern\n");
  }
);

Globalization.getDateNames(
  function (names) {
    for (var i = 0; i < names.value.length; i++) {
      alert("month: " + names.value[i] + "\n");
    }
  },
  function () {
    alert("Error getting names\n");
  },
  { type: "wide", item: "months" }
);

Globalization.getDatePattern(
  function (date) {
    alert("pattern: " + date.pattern + "\n");
  },
  function () {
    alert("Error getting pattern\n");
  },
  { formatLength: "short", selector: "date and time" }
);

Globalization.getFirstDayOfWeek(
  function (day) {
    alert("day: " + day.value + "\n");
  },
  function () {
    alert("Error getting day\n");
  }
);

Globalization.getNumberPattern(
  function (pattern) {
    alert(
      "pattern: " +
        pattern.pattern +
        "\n" +
        "symbol: " +
        pattern.symbol +
        "\n" +
        "fraction: " +
        pattern.fraction +
        "\n" +
        "rounding: " +
        pattern.rounding +
        "\n" +
        "positive: " +
        pattern.positive +
        "\n" +
        "negative: " +
        pattern.negative +
        "\n" +
        "decimal: " +
        pattern.decimal +
        "\n" +
        "grouping: " +
        pattern.grouping
    );
  },
  function () {
    alert("Error getting pattern\n");
  },
  { type: "decimal" }
);

Globalization.isDayLightSavingsTime(
  new Date(),
  function (date) {
    alert("dst: " + date.dst + "\n");
  },
  function () {
    alert("Error getting names\n");
  }
);

Globalization.numberToString(
  3.1415926,
  function (number) {
    alert("number: " + number.value + "\n");
  },
  function () {
    alert("Error getting number\n");
  },
  { type: "decimal" }
);

Globalization.stringToDate(
  "9/25/2012",
  function (date) {
    alert(
      "month:" + date.month + " day:" + date.day + " year:" + date.year + "\n"
    );
  },
  function () {
    alert("Error getting date\n");
  },
  { selector: "date" }
);

Globalization.stringToNumber(
  "1234.56",
  function (number) {
    alert("number: " + number.value + "\n");
  },
  function () {
    alert("Error getting number\n");
  },
  { type: "decimal" }
);
```

## React

### Declaration

```typescript
const useGlobalization: () => {
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
    type: "narrow" | "wide";
    item: "months" | "days";
  }) => Promise<
    {
      value: string;
    }[]
  >;
  getDatePattern: (options?: {
    formatLength: "short" | "medium" | "long" | "full";
    selector: "date" | "time";
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
    type: "decimal" | "percent" | "currency";
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
  numberToString: (
    n: number,
    options?: {
      type: "decimal" | "percent" | "currency";
    }
  ) => Promise<{
    value: string;
  }>;
  stringToDate: (
    dateString: string,
    options?: {
      formatLength: "short" | "medium" | "long" | "full";
      selector: "date" | "time" | "date and time";
    }
  ) => Promise<{
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
  }>;
  stringToNumber: (
    s: string,
    options?: {
      type: "decimal" | "percent" | "currency";
    }
  ) => Promise<{
    value: number;
  }>;
};
```

### Usages

```typescript
import { useEffect } from 'react';
import useGlobalization from '@awesome-cordova-library/globalization/lib/react';

function App() {
  const { getPreferredLanguage, ..... } = useGlobalization();

  useEffect(() => {
    getPreferredLanguage().then((language) => {
      console.log(`Preferred language ${language.value}`);
    })

  }, []);

  return <div />;
}
```
