interface Cordova {
  getAppVersion: {
    getAppName: () => Promise<string>;
    getPackageName: () => Promise<string>;
    getVersionNumber: () => Promise<string>;
    getVersionCode: () => Promise<string>;
  };
}

declare const cordova: Cordova;
