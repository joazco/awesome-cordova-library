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
  static setUp(autoHideNavigationBar: boolean, successCallback: () => void, errorCallback: () => void) {
    if (typeof window.navigationbar !== 'undefined') {
      window.navigationbar.setUp(autoHideNavigationBar, successCallback, errorCallback);
    } else {
      NavigationBar.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param successCallback {Function}
   * @param errorCallback {Function}
   */
  static hideNavigationBar(successCallback: () => void, errorCallback: () => void) {
    if (typeof window.navigationbar !== 'undefined') {
      window.navigationbar.hideNavigationBar(successCallback, errorCallback);
    } else {
      NavigationBar.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('Navigationbar is uninstalled or incompatible with current platform');
  }
}
