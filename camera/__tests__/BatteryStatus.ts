import { beforeEach, expect, test } from '@jest/globals';
import BatteryStatus from '../src';

beforeEach(() => {
  (global as any).window = {};
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    getBattery: (): Promise<{ charging: boolean; level: number }> => {
      return new Promise((resolve) => {
        resolve({
          charging: true,
          level: 0.8,
        });
      });
    },
  };
});

test('Test battery is plugged', () => {});
