import { beforeEach, expect, test } from '@jest/globals';
import Device from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
  };
  (global as any).device = {
    platform: 'browser',
    model: 'Chrome',
    uuid: '12345',
    isVirtual: true,
    manufacturer: 'Apple',
  };
});

test('Test getModel', () => {
  expect(Device.getModel()).toStrictEqual('Chrome');
});

test('Test getPlatform', () => {
  expect(Device.getPlatform()).toStrictEqual('browser');
});

test('Test getVersion', () => {
  expect(Device.getVersion()).toStrictEqual('100.0.4896.127');
});

test('Test getUuid', () => {
  expect(Device.getUuid()).toStrictEqual('12345');
});

test('Test getManufacturer', () => {
  expect(Device.getManufacturer()).toStrictEqual('Apple');
});

test('Test getIsVirtual', () => {
  expect(Device.getIsVirtual()).toBeTruthy();
});
