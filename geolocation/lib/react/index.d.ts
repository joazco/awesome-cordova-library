/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
declare const useGeolocation: () => {
    getCurrentPosition: (options?: PositionOptions) => Promise<GeolocationPosition>;
    watchPosition: (successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions) => number;
    clearWatch: (watchId: number) => void;
};
export default useGeolocation;
