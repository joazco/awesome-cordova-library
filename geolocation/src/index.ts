/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
export default class Geolocation {
  static getCurrentPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  }

  static watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): number {
    return navigator.geolocation.watchPosition(successCallback, errorCallback, options);
  }

  static clearWatch(watchId: number) {
    navigator.geolocation.clearWatch(watchId);
  }
}
