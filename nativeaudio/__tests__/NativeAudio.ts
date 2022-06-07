import { beforeEach, expect, test } from '@jest/globals';
import NativeAudio from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).window = {
    plugins: {
      NativeAudio: {
        preloadSimple: () => expect(true).toBeTruthy(),
        preloadComplex: () => expect(true).toBeTruthy(),
        play: () => expect(true).toBeTruthy(),
        loop: () => expect(true).toBeTruthy(),
        stop: () => expect(true).toBeTruthy(),
        unload: () => expect(true).toBeTruthy(),
        setVolumeForComplexAsset: () => expect(true).toBeTruthy(),
      },
    },
  };
});

test('Test preloadSimple', () => {
  NativeAudio.preloadSimple(
    '',
    '',
    () => {},
    () => {},
  );
});

test('Test preloadComplex', () => {
  NativeAudio.preloadComplex(
    '',
    '',
    1,
    1,
    1,
    () => {},
    () => {},
  );
});

test('Test play', () => {
  NativeAudio.play(
    '',
    () => {},
    () => {},
    () => {},
  );
});

test('Test loop', () => {
  NativeAudio.loop(
    '',
    () => {},
    () => {},
  );
});

test('Test stop', () => {
  NativeAudio.stop(
    '',
    () => {},
    () => {},
  );
});

test('Test unload', () => {
  NativeAudio.unload(
    '',
    () => {},
    () => {},
  );
});

test('Test setVolumeForComplexAsset', () => {
  NativeAudio.setVolumeForComplexAsset(
    '',
    1,
    () => {},
    () => {},
  );
});
