export type OIDCRequest = {
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
export type ErrorType = {
  // The calling code did something wrong, e.g. passed an invalid authorization request,
  // such that the request couldn't even be sent to the authorization server
  UNSENDABLE_REQUEST: 'OIDC_UNSENDABLE_REQUEST';
  // The authorization server returned an error response as specified in https://tools.ietf.org/html/rfc6749#section-4.1.2.1
  ERROR_RESPONSE: 'OIDC_ERROR_RESPONSE';
  // The authorization server returned an invalid response not in keeping w/ the OpenID Connect spec
  INVALID_RESPONSE: 'OIDC_INVALID_RESPONSE';
  // There was an HTTP error completing the authorization request
  HTTP_ERROR: 'OIDC_HTTP_ERROR';
  // The user cancelled the authorization request
  USER_CANCELLED: 'OIDC_USER_CANCELLED';
  // There was an unexpected error completing the authorization request
  UNEXPECTED_ERROR: 'OIDC_UNEXPECTED_ERROR';
};
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * OIDC Cordova plugin
 * Also, check out {@link https://github.com/mi-corporation/cordova-plugin-oidc-basic Github}
 * @requires module:https://github.com/mi-corporation/cordova-plugin-oidc-basic.git
 */
export default class OIDC {
  static presentAuthorizationRequest(
    req: Partial<OIDCRequest>,
    success: (response: Partial<OIDCRequest>) => void,
    error: (error: { message: string; oidcType: string; oidcDetails: string; oidcResponse: string }) => void,
  ) {
    if (typeof cordova?.plugins?.oidc?.basic?.presentAuthorizationRequest === 'undefined') {
      OIDC.warnPluginIsUnInstallOrIncompatible();
      return;
    }
    cordova.plugins.oidc.basic.presentAuthorizationRequest(req, success, error);
  }
  static presentEndSessionRequest(
    req: Partial<OIDCRequest>,
    success: (response: Partial<OIDCRequest>) => void,
    error: (error: { message: string; oidcType: string; oidcDetails: string }) => void,
  ) {
    if (typeof cordova?.plugins?.oidc?.basic?.presentEndSessionRequest === 'undefined') {
      OIDC.warnPluginIsUnInstallOrIncompatible();
      return;
    }
    cordova.plugins.oidc.basic.presentEndSessionRequest(req, success, error);
  }
  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('OIDC plugin is uninstalled or incompatible with current platform');
  }
}
