import { useCallback } from 'react';
import OIDC, { OIDCRequest } from '../';

const useOIDC = () => {
  const presentAuthorizationRequest = useCallback((req: Partial<OIDCRequest>) => {
    return new Promise<Partial<OIDCRequest>>((resolve, reject) =>
      OIDC.presentAuthorizationRequest(req, resolve, reject),
    );
  }, []);

  const presentEndSessionRequest = useCallback((req: Partial<OIDCRequest>) => {
    return new Promise<Partial<OIDCRequest>>((resolve, reject) => OIDC.presentEndSessionRequest(req, resolve, reject));
  }, []);

  return { presentAuthorizationRequest, presentEndSessionRequest };
};

export default useOIDC;
