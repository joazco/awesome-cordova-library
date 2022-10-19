import { beforeEach, expect, test } from '@jest/globals';
import Camera from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    camera: {
      getPicture: (cameraSuccess: () => void, cameraError: () => void, cameraOptions: any) => {
        expect(true).toBeTruthy();
      },
      cleanup: (cameraSuccess: () => void, cameraError: () => void) => {
        expect(true).toBeTruthy();
      },
    },
  };
});

test('Test camera getPicture', () => {
  Camera.getPicture(
    () => {},
    () => {},
  );
});

test('Test camera cleanup', () => {
  Camera.cleanup(
    () => {},
    () => {},
  );
});
