/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Reads the version of your app from the target build settings.
 *
 * @requires module:cordova-plugin-app-version
 */
export default class Appversion {
  /**
   * Return App Name
   * @return Promise<string>
   */
  static getAppName() {
    if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
      Appversion.warnPluginIsUnInstallOrIncompatible();
      return Promise.resolve(null);
    } else {
      return cordova.getAppVersion.getAppName();
    }
  }

  /**
   * Return Package Name
   * @return Promise<string>
   */
  static getPackageName() {
    if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
      Appversion.warnPluginIsUnInstallOrIncompatible();
      return Promise.resolve(null);
    } else {
      return cordova.getAppVersion.getPackageName();
    }
  }

  /**
   * Return App Version Number
   * @return Promise<string>
   */
  static getVersionNumber() {
    if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
      Appversion.warnPluginIsUnInstallOrIncompatible();
      return Promise.resolve(null);
    } else {
      return cordova.getAppVersion.getVersionNumber();
    }
  }

  /**
   * Return App Version Code
   * @return Promise<string>
   */
  static getVersionCode() {
    if (typeof cordova === 'undefined' || typeof cordova.getAppVersion === 'undefined') {
      Appversion.warnPluginIsUnInstallOrIncompatible();
      return Promise.resolve(null);
    } else {
      return cordova.getAppVersion.getVersionCode();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('AppVersion is uninstalled or incompatible with current platform');
  }
}
