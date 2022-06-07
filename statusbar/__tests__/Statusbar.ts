import { beforeEach, expect, test } from '@jest/globals';
import Statusbar from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).StatusBar = {
    overlaysWebView: (_isOverlay: boolean) => {
      expect(true).toBeTruthy();
    },
    styleDefault: () => {
      expect(true).toBeTruthy();
    },
    styleLightContent: () => {
      expect(true).toBeTruthy();
    },
    styleBlackTranslucent: () => {
      expect(true).toBeTruthy();
    },
    styleBlackOpaque: () => {
      expect(true).toBeTruthy();
    },
    backgroundColorByName: (_color: string) => {
      expect(true).toBeTruthy();
    },
    backgroundColorByHexString: (_color: string) => {
      expect(true).toBeTruthy();
    },
    show: () => {
      expect(true).toBeTruthy();
    },
    hide: () => {
      expect(true).toBeTruthy();
    },
    isVisible: false,
  };
});

test('Test overlaysWebView', () => {
  Statusbar.overlaysWebView(true);
});

test('Test styleDefault', () => {
  Statusbar.styleDefault();
});

test('Test styleLightContent', () => {
  Statusbar.styleLightContent();
});

test('Test styleBlackTranslucent', () => {
  Statusbar.styleBlackTranslucent();
});

test('Test styleBlackOpaque', () => {
  Statusbar.styleBlackOpaque();
});

test('Test backgroundColorByName', () => {
  Statusbar.backgroundColorByName('black');
});

test('Test backgroundColorByHexString', () => {
  Statusbar.backgroundColorByHexString('#000000');
});

test('Test show', () => {
  Statusbar.show();
});

test('Test hide', () => {
  Statusbar.hide();
});

test('Test isVisible', () => {
  expect(Statusbar.isVisible()).toBeFalsy();
});
