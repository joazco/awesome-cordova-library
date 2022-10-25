import { useCallback } from 'react';
import Geolocation from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
const useGeolocation = () => {
  const getCurrentPosition = (options?: PositionOptions): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  const watchPosition = (
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): number => {
    return Geolocation.watchPosition(successCallback, errorCallback, options);
  };

  const clearWatch = (watchId: number) => {
    Geolocation.clearWatch(watchId);
  };

  return { getCurrentPosition, watchPosition, clearWatch };
};

export default useGeolocation;
