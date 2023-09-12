import { OIDCRequest } from '../';
declare const useOIDC: () => {
    presentAuthorizationRequest: (req: Partial<OIDCRequest>) => Promise<Partial<OIDCRequest>>;
    presentEndSessionRequest: (req: Partial<OIDCRequest>) => Promise<Partial<OIDCRequest>>;
};
export default useOIDC;
