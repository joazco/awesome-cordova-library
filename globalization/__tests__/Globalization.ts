import { beforeEach, expect, test } from '@jest/globals';
import Globalization from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    globalization: {
      getPreferredLanguage: () => expect(true).toBeTruthy(),
      getLocaleName: () => expect(true).toBeTruthy(),
      dateToString: () => expect(true).toBeTruthy(),
      getCurrencyPattern: () => expect(true).toBeTruthy(),
      getDateNames: () => expect(true).toBeTruthy(),
      getDatePattern: () => expect(true).toBeTruthy(),
      getFirstDayOfWeek: () => expect(true).toBeTruthy(),
      getNumberPattern: () => expect(true).toBeTruthy(),
      isDayLightSavingsTime: () => expect(true).toBeTruthy(),
      numberToString: () => expect(true).toBeTruthy(),
      stringToDate: () => expect(true).toBeTruthy(),
      stringToNumber: () => expect(true).toBeTruthy(),
    },
    language: 'en-GB',
  };
});

test('Test getPreferredLanguage', () => {
  Globalization.getPreferredLanguage(
    () => {},
    () => {},
  );
});
test('Test getPreferredLanguageWeb', () => {
  expect(Globalization.getPreferredLanguageWeb()).toStrictEqual('en-GB');
});
test('Test getLocaleName', () => {
  Globalization.getLocaleName(
    () => {},
    () => {},
  );
});
test('Test dateToString', () => {
  Globalization.dateToString(
    new Date(),
    () => {},
    () => {},
  );
});
test('Test getCurrencyPattern', () => {
  Globalization.getCurrencyPattern(
    '',
    () => {},
    () => {},
  );
});
test('Test getDateNames', () => {
  Globalization.getDateNames(
    () => {},
    () => {},
  );
});
test('Test getDatePattern', () => {
  Globalization.getDatePattern(
    () => {},
    () => {},
  );
});
test('Test getFirstDayOfWeek', () => {
  Globalization.getFirstDayOfWeek(
    () => {},
    () => {},
  );
});
test('Test getNumberPattern', () => {
  Globalization.getNumberPattern(
    () => {},
    () => {},
  );
});
test('Test isDayLightSavingsTime', () => {
  Globalization.isDayLightSavingsTime(
    new Date(),
    () => {},
    () => {},
  );
});
test('Test numberToString', () => {
  Globalization.numberToString(
    10,
    () => {},
    () => {},
  );
});
test('Test stringToDate', () => {
  Globalization.stringToDate(
    '',
    () => {},
    () => {},
  );
});
test('Test stringToNumber', () => {
  Globalization.stringToNumber(
    '',
    () => {},
    () => {},
  );
});
