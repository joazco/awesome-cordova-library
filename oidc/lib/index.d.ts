export declare type OIDCRequest = {
    configuration: {
        authorizationEndpoint: string;
    };
    clientId: string;
    scope: string;
    state: string;
    redirectUrl: string;
    responseType: string;
    accesTokenExpirationDate: number;
    tokenType: string;
    idToken: string;
    additionalParameters: string;
    nonce: string;
    codeVerifier: string;
    codeChallenge: string;
    codeChallengeMethod: string;
    error: string;
    errorDescription: string;
    errorUrl: string;
    idTokenHint: string;
    postLogoutRedirectUrl: string;
};
export declare type ErrorType = {
    UNSENDABLE_REQUEST: 'OIDC_UNSENDABLE_REQUEST';
    ERROR_RESPONSE: 'OIDC_ERROR_RESPONSE';
    INVALID_RESPONSE: 'OIDC_INVALID_RESPONSE';
    HTTP_ERROR: 'OIDC_HTTP_ERROR';
    USER_CANCELLED: 'OIDC_USER_CANCELLED';
    UNEXPECTED_ERROR: 'OIDC_UNEXPECTED_ERROR';
};
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * OIDC Cordova plugin
 * Also, check out {@link https://github.com/mi-corporation/cordova-plugin-oidc-basic Github}
 * @requires module:https://github.com/mi-corporation/cordova-plugin-oidc-basic.git
 */
export default class OIDC {
    static presentAuthorizationRequest(req: Partial<OIDCRequest>, success: (response: Partial<OIDCRequest>) => void, error: (error: {
        message: string;
        oidcType: string;
        oidcDetails: string;
        oidcResponse: string;
    }) => void): void;
    static presentEndSessionRequest(req: Partial<OIDCRequest>, success: (response: Partial<OIDCRequest>) => void, error: (error: {
        message: string;
        oidcType: string;
        oidcDetails: string;
    }) => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
