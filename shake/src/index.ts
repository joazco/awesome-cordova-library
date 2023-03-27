/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to detect when a physical device performs a shake gesture.
 * Also, check out {@link https://github.com/leecrossley/cordova-plugin-shake#readme Github}
 * @requires module:cordova-plugin-shake
 */
export default class Shake {
  /**
   * Start watching for shake gestures and call "onShake"
   * @param coords
   */
  static startWatch(onShake: () => void, sensitivity: number = 30, onError?: () => void) {
    if (typeof shake !== 'undefined') {
      shake.startWatch(onShake, sensitivity, onError);
    } else {
      Shake.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * Stop watching for shake gestures
   * @param coords
   */
  static stopWatch() {
    if (typeof shake !== 'undefined') {
      shake.stopWatch();
    } else {
      Shake.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('Shake Plugin is uninstalled or incompatible with current platform');
  }
}
