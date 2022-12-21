/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Hide and auto hide navigation bar. (Android)
 * Also, check out {@link https://github.com/cranberrygame/cordova-plugin-navigationbar Github}
 * @requires module:cordova-plugin-navigationbar
 */
export default class NavigationBar {
    /**
     *
     * @param autoHideNavigationBar {boolean}
     * @param successCallback {Function}
     * @param errorCallback {Function}
     */
    static setUp(autoHideNavigationBar: boolean, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param successCallback {Function}
     * @param errorCallback {Function}
     */
    static hideNavigationBar(successCallback: () => void, errorCallback: () => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
