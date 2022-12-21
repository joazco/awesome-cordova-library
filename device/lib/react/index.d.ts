/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin defines a global device object, which describes the device's hardware and software. Although the object is in the global scope, it is not available until after the deviceready event.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-device/index.html Cordova}
 * @requires module:cordova-plugin-device
 */
declare const useDevice: () => {
    getModel: () => string;
    getPlatform: () => "browser" | "Android" | "BlackBerry 10" | "iOS" | "WinCE" | "Tizen" | "Mac OS X";
    getUuid: () => string | null;
    getVersion: () => string | null;
    getManufacturer: () => string | null;
};
export default useDevice;
