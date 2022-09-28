import { beforeEach, expect, test } from '@jest/globals';
import Dialogs from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    notification: {
      alert: (message: string, alertCallback: () => void, title?: string, buttonName?: string) => {
        expect(true).toBeTruthy();
      },
      confirm: (
        message: string,
        confirmCallback: (buttonIndex: number) => void,
        title: string,
        buttonLabels: string[],
      ) => {
        expect(true).toBeTruthy();
      },
      prompt: (
        message: string,
        promptCallback: (results: { buttonIndex: number; input1: string }) => void,
        title?: string,
        buttonLabels?: string[],
        defaultText?: string,
      ) => {
        expect(true).toBeTruthy();
      },
      beep: (times?: number) => {
        expect(true).toBeTruthy();
      },
    },
  };
});

test('Test send alert', () => {
  Dialogs.alert('', () => {});
});

test('Test send confirm', () => {
  Dialogs.confirm('', () => {});
});
test('Test send prompt', () => {
  Dialogs.prompt('', () => {});
});
test('Test send beep', () => {
  Dialogs.beep();
});
