type InAppBrowserType = {
  addEventListener: (
    eventname: 'loadstart' | 'loadstop' | 'loaderror' | 'beforeload' | 'message',
    callback: () => void,
  ) => void;
  removeEventListener: (
    eventname: 'loadstart' | 'loadstop' | 'loaderror' | 'beforeload' | 'message',
    callback: () => void,
  ) => void;
  close: () => void;
  show: () => void;
  hide: () => void;
  executeScript: (details: { file?: string; code?: string }, callback: () => void) => void;
  insertCSS: (details: { file?: string; code?: string }, callback: () => void) => void;
};

interface InAppBrowser {
  open: (url: string, target: '_self' | '_blank' | '_system', options: string) => InAppBrowserType;
}
/**
 * The StatusBar object provides some functions to customize the iOS and Android StatusBar.
 */
interface Cordova {
  InAppBrowser: InAppBrowser;
}

declare const cordova: Cordova;
