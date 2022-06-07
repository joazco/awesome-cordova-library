export declare type OrientationLockCordovaType = 'any' | 'landscape' | 'landscape-primary' | 'landscape-secondary' | 'portrait' | 'portrait-primary' | 'portrait-secondary';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, and windows-uwp
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-screen-orientation/index.html Cordova}
 * @requires module:cordova-plugin-screen-orientation
 */
export default class ScreenOrientation {
    /**
     * lock the device orientation
     * @param orientation {OrientationLockCordovaType}
     */
    static lock(orientation: OrientationLockCordovaType): void;
    /**
     * unlock the orientation
     */
    static unLock(): void;
    /**
     * current orientation
     * @returns {OrientationLockCordovaType}
     */
    static currentOrientation(): OrientationLockCordovaType;
    /**
     * Both android and iOS will fire the orientationchange event on the window object. For this version of the plugin use the window object if you require notification.
     * @param callback {(orientation: OrientationLockCordovaType) => void}
     */
    static onOrientationChange(callback: (orientation: OrientationLockCordovaType) => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
