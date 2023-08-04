import { beforeEach, expect, test } from '@jest/globals';
import TapicEngineIos from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).TapicEngineIos = {
    selection: () => expect(true).toBeTruthy(),
    notification: (type: "success" | "warning" | "error") => expect(true).toBeTruthy(),
    impact: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => expect(true).toBeTruthy(),
    gestureSelectionStart: () => expect(true).toBeTruthy(),
    gestureSelectionChanged: () => expect(true).toBeTruthy(),
    gestureSelectionEnd: () => expect(true).toBeTruthy(),
    unofficial: {
      weakBoom: (_onSuccess: () => void, _onFail: () => void) => {expect(true).toBeTruthy()},
      strongBoom: (_onSuccess: () => void, _onFail: () => void) => {expect(true).toBeTruthy()},
      burst: (_onSuccess: () => void, _onFail: () => void) => {expect(true).toBeTruthy()}
    }
  };
  
});

test('Test selection', () => {
  TapicEngineIos.selection()
});
test('Test notification', () => {
  TapicEngineIos.notification("success");
});
test('Test impact', () => {
  TapicEngineIos.impact("light");
});
test('Test gestureSelectionStart', () => {
  TapicEngineIos.gestureSelectionStart()
});
test('Test gestureSelectionChanged', () => {
  TapicEngineIos.gestureSelectionChanged()
});
test('Test gestureSelectionEnd', () => {
  TapicEngineIos.gestureSelectionEnd()
});
test('Test weakBoom', () => {
  TapicEngineIos.weakBoom(() => {}, () => {})
});
test('Test strongBoom', () => {
  TapicEngineIos.strongBoom(() => {}, () => {})
});
test('Test burst', () => {
  TapicEngineIos.burst(() => {}, () => {})
});