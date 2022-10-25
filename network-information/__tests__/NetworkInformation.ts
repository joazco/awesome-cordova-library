import { beforeEach, expect, test } from '@jest/globals';
import NetworkInformation from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    connection: {
      type: '4g',
    },
  };
});

test('Test network type', () => {
  expect(NetworkInformation.getNetworkType()).toBe('4g');
});
