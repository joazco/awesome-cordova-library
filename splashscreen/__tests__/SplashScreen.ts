import { beforeEach, expect, test } from '@jest/globals';
import SplashScreen from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    splashscreen: {
      show: () => expect(true).toBeTruthy(),
      hide: () => expect(true).toBeTruthy(),
    },
  };
});

test('Show splashscreen', () => {
  SplashScreen.show();
});

test('Hide splashscreen', () => {
  SplashScreen.hide();
});
