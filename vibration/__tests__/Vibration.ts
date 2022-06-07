import { beforeEach, expect, test } from '@jest/globals';
import Vibration from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    vibrate: (_time: number | number[]) => {
      expect(true).toBeTruthy();
    },
  };
});

test('Test vibration', () => {
  Vibration.vibrate([100]);
});
