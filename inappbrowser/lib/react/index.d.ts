import { InAppBrowserOptions } from '../types';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * You can show helpful articles, videos, and web resources inside of your app. Users can view web pages without leaving your app.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-inappbrowser/index.html Cordova}
 * @requires module:cordova-plugin-inappbrowser
 */
declare const useInAppBrowser: () => (url: string, target: '_self' | '_blank' | '_system', options?: string | InAppBrowserOptions) => Window | import("../types").InAppBrowserType | null;
export default useInAppBrowser;
