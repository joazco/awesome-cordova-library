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
    static startWatch(onShake: () => void, sensitivity?: number, onError?: () => void): void;
    /**
     * Stop watching for shake gestures
     * @param coords
     */
    static stopWatch(): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
