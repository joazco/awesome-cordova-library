import { beforeEach, expect, test } from '@jest/globals';
import InAppBrowser from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).cordova = {
    InAppBrowser: {
      open: (url: string, target: string, options: any) => {
        expect(true).toBeTruthy();
      },
    },
  };
});

test('Test open', () => {
  InAppBrowser.open('https://joazco.com', '_blank', { location: 'yes' });
});
