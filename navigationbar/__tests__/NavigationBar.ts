import { beforeEach, expect, test } from '@jest/globals';
import NavigationBar from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).window = {
    navigationbar: {
      setUp: (autoHideNavigationBar: boolean, successCallback: () => void, errorCallback: () => void) => {
        expect(true).toBeTruthy();
      },
      hideNavigationBar: (successCallback: () => void, errorCallback: () => void) => {
        expect(true).toBeTruthy();
      },
    },
  };
});

test('Test navigationbar setUp', () => {
  NavigationBar.setUp(true,
    () => {},
    () => {},
  );
});

test('Test navigationbar hideNavigationBar', () => {
  NavigationBar.hideNavigationBar(
    () => {},
    () => {},
  );
});
