import { beforeEach, expect, test } from '@jest/globals';
import Geolocation from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    geolocation: {
      getCurrentPosition: () => expect(true).toBeTruthy(),
      watchPosition: () => expect(true).toBeTruthy(),
      clearWatch: () => expect(true).toBeTruthy(),
    },
  };
});

test('Test current position', () => {
  Geolocation.getCurrentPosition(
    () => {},
    () => {},
  );
});

test('Test watch position', () => {
  Geolocation.watchPosition(
    () => {},
    () => {},
  );
});

test('Test clear watch', () => {
  Geolocation.clearWatch(1);
});
