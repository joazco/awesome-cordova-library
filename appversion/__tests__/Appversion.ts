import { beforeEach, expect, test } from '@jest/globals';
import Appversion from '../src';

beforeEach(() => {
  (global as any).cordova = {
    getAppVersion: {
      getAppName: () => {
        return Promise.resolve('App name');
      },
      getPackageName: () => {
        return Promise.resolve('com.appversion.packagename');
      },
      getVersionNumber: () => {
        return Promise.resolve('123456');
      },
      getVersionCode: () => {
        return Promise.resolve('789');
      },
    },
  };
});

test('Test App Name', async () => {
  expect(await Appversion.getAppName()).toBe('App name');
});

test('Test App package name', async () => {
  expect(await Appversion.getPackageName()).toBe('com.appversion.packagename');
});

test('Test App version number', async () => {
  expect(await Appversion.getVersionNumber()).toBe('123456');
});

test('Test App Name', async () => {
  expect(await Appversion.getVersionCode()).toBe('789');
});
