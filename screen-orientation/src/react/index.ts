import { useCallback } from 'react';
import ScreenOrientation, { OrientationLockCordovaType } from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, and windows-uwp
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-screen-orientation/index.html Cordova}
 * @requires module:cordova-plugin-screen-orientation
 */
const useScreenOrientation = () => {
  /**
   * lock the device orientation
   * @param orientation {OrientationLockCordovaType}
   */
  const lock = useCallback((orientation: OrientationLockCordovaType) => {
    if (screen) {
      ScreenOrientation.lock(orientation);
    }
  }, []);

  /**
   * unlock the orientation
   */
  const unLock = useCallback(() => {
    ScreenOrientation.unLock();
  }, []);

  /**
   * current orientation
   * @returns {OrientationLockCordovaType}
   */
  const currentOrientation = useCallback((): OrientationLockCordovaType => {
    return ScreenOrientation.currentOrientation();
  }, []);

  /**
   * Both android and iOS will fire the orientationchange event on the window object. For this version of the plugin use the window object if you require notification.
   * @param callback {(orientation: OrientationLockCordovaType) => void}
   */
  const onOrientationChange = useCallback((callback: (orientation: OrientationLockCordovaType) => void) => {
    ScreenOrientation.onOrientationChange(callback);
  }, []);

  return { lock, unLock, currentOrientation, onOrientationChange };
};

export default useScreenOrientation;
