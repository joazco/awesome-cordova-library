/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin defines a global device object, which describes the device's hardware and software. Although the object is in the global scope, it is not available until after the deviceready event.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-device/index.html Cordova}
 * @requires module:cordova-plugin-device
 */
export default class Device {
    /**
     * Returns the name of the device's model or product. The value is set by the device manufacturer and may be different across versions of the same product.
     *
     * Android:    Nexus One       returns "Passion" (Nexus One code name)
     *             Motorola Droid  returns "voles"
     * BlackBerry: Torch 9800      returns "9800"
     * Browser:    Google Chrome   returns "Chrome"
     *             Safari          returns "Safari"
     * iOS:     for the iPad Mini, returns iPad2,5; iPhone 5 is iPhone 5,1. See http://theiphonewiki.com/wiki/index.php?title=Models
     * OSX:                        returns "x86_64"
     * @returns {string}
     */
    static getModel(): string;
    /**
     * Get the device's operating system name.
     * Depending on the device, a few examples are:
     *   - "Android"
     *   - "BlackBerry 10"
     *   - "browser"
     *   - "iOS"
     *   - "WinCE"
     *   - "Tizen"
     *   - "Mac OS X"
     * @returns {string}
     */
    static getPlatform(): string;
    /**
     * Get the operating system version.
     * @returns {string}
     */
    static getVersion(): string;
    /**
     * Get the device's Universally Unique Identifier
     * @returns {string | null}
     */
    static getUuid(): string | null;
    /**
     * Get the device's manufacturer.
     * @returns {string | null}
     */
    static getManufacturer(): string | null;
    /**
     * whether the device is running on a simulator.
     * @returns {boolean | null}
     */
    static getIsVirtual(): boolean;
    static getBrowserInfo(getModel: boolean): string;
}
