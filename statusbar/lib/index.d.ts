/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * The StatusBar object provides some functions to customize the iOS and Android StatusBar.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-statusbar/index.html}
 * @requires module:cordova-plugin-statusbar
 */
export default class Statusbar {
    /**
     * On iOS 7, make the statusbar overlay or not overlay the WebView.
     *
     * @param isOverlay - On iOS 7, set to false to make the statusbar appear like iOS 6.
     *                    Set the style and background color to suit using the other functions.
     */
    static overlaysWebView(isOverlay: boolean): void;
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    static styleDefault(): void;
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    static styleLightContent(): void;
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    static styleBlackTranslucent(): void;
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    static styleBlackOpaque(): void;
    /**
     * On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false,
     * you can set the background color of the statusbar by color name.
     *
     * @param color - Supported color names are:
     *                black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
     */
    static backgroundColorByName(color: string): void;
    /**
     * Sets the background color of the statusbar by a hex string.
     *
     * @param color - CSS shorthand properties are also supported.
     *                On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you can set the background color of the statusbar by a hex string (#RRGGBB).
     *                On WP7 and WP8 you can also specify values as #AARRGGBB, where AA is an alpha value
     */
    static backgroundColorByHexString(color: string): void;
    /**
     * Shows the statusbar.
     */
    static show(): void;
    /**
     * Hide the statusbar.
     */
    static hide(): void;
    /**
     * Read this property to see if the statusbar is visible or not.
     */
    static isVisible(): boolean;
    static warnPluginIsUnInstallOrIncompatible(): void;
    /**
     * Sets color of meta balise theme-color
     */
    static changeThemeColor(color: string): void;
}
