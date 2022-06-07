import { OrientationLockCordovaType } from '../';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, and windows-uwp
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-screen-orientation/index.html Cordova}
 * @requires module:cordova-plugin-screen-orientation
 */
declare const useScreenOrientation: () => {
    lock: (orientation: OrientationLockCordovaType) => void;
    unLock: () => void;
    currentOrientation: () => OrientationLockCordovaType;
    onOrientationChange: (callback: (orientation: OrientationLockCordovaType) => void) => void;
};
export default useScreenOrientation;
