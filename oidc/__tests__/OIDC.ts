import { beforeEach, expect, test } from '@jest/globals';
import OIDC from '../src';

beforeEach(() => {
  (global as any).cordova = {
    plugins: {
      oidc: {
        basic: {
          presentAuthorizationRequest: () => {
            expect(true).toBeTruthy();
          },
          presentEndSessionRequest: () => {
            expect(true).toBeTruthy();
          },
        },
      },
    },
  };
});

test('Test presentAuthorizationRequest', () => {
  OIDC.presentAuthorizationRequest(
    {},
    () => {},
    () => {},
  );
});

test('Test presentEndSessionRequest', () => {
  OIDC.presentEndSessionRequest(
    {},
    () => {},
    () => {},
  );
});
