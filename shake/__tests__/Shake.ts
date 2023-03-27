import { beforeEach, expect, test } from '@jest/globals';
import Shake from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).shake = {
    startWatch: (_onShake: () => void, _sensitivity: number = 30, _onError: () => void) => expect(true).toBeTruthy(),
    stopWatch: () => expect(true).toBeTruthy(),
  };
  
});

test('Test startWatch', () => {
  Shake.startWatch(() => { }, 40, () => {})
});

test('Test stopWatch', () => {
  Shake.stopWatch();
});
