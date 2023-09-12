interface Cordova {
  plugins: {
    oidc: {
      basic: {
        presentAuthorizationRequest: (
          req: any,
          success: (response: any) => void,
          error: (error: { message: string; oidcType: string; oidcDetails: string; oidcResponse: string }) => void,
        ) => void;
        presentEndSessionRequest: (
          req: any,
          success: (response: any) => void,
          error: (error: { message: string; oidcType: string; oidcDetails: string }) => void,
        ) => {};
      };
    };
  };
}

declare const cordova: Cordova;
