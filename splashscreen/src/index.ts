/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
export default class SplashScreen {
  /**
   * Displays the splash screen.
   */
  static show() {
    if (typeof navigator !== 'undefined' && navigator.splashscreen) {
      navigator.splashscreen.show();
    } else {
      SplashScreen.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * Dismiss the splash screen.
   */
  static hide() {
    if (typeof navigator !== 'undefined' && navigator.splashscreen) {
      navigator.splashscreen.hide();
    } else {
      SplashScreen.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('Splashscreen is uninstalled or incompatible with current platform');
  }
}
