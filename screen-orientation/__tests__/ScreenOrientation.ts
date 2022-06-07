import { beforeEach, expect, test } from '@jest/globals';
import ScreenOrientation, { OrientationLockCordovaType } from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).screen = {
    orientation: {
      lock: (_orientation: OrientationLockCordovaType) => expect(true).toBeTruthy(),
      unlock: () => expect(true).toBeTruthy(),
      type: 'portrait',
    },
  };
});

test('Test screen orientation lock', () => {
  ScreenOrientation.lock('portrait');
});

test('Test screen orientation unlock', () => {
  ScreenOrientation.unLock();
});

test('Test screen orientation current orientation', () => {
  expect(ScreenOrientation.currentOrientation()).toStrictEqual('portrait');
});
