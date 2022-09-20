/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * You can show helpful articles, videos, and web resources inside of your app. Users can view web pages without leaving your app.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-inappbrowser/index.html Cordova}
 * @requires module:cordova-plugin-inappbrowser
 */
import { InAppBrowserOptions, InAppBrowserType } from './types';
export default class InAppBrowser {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param url string
     * @param target {"_self"|'_blank'|"_system"}
     * @params options string
     * @return InAppBrowserType | Window | null
     */
    static open(url: string, target: '_self' | '_blank' | '_system', options: string | InAppBrowserOptions): InAppBrowserType | Window | null;
}
