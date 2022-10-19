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

test('Test battery is plugged', () => {
  BatteryStatus.onBatteryStatus((batterystatus) => {
    expect(batterystatus.isPlugged).toBeTruthy();
  });
});

test('Test battery is charged at 80%', () => {
  BatteryStatus.onBatteryStatus((batterystatus) => {
    expect(batterystatus.level).toBe(80);
  });
});
