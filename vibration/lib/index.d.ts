/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-vibration/index.html Cordova} or {@link http://www.w3.org/TR/vibration/ W3}
 * @requires module:cordova-plugin-vibration
 */
export default class Vibration {
    /**
     * Vibrates the device for a given amount of time.
     * @param time {number | number[]} time
     */
    static vibrate(time: number | number[]): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
