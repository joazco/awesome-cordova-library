/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to detect when a physical device performs a shake gesture.
 * Also, check out {@link https://github.com/leecrossley/cordova-plugin-shake#readme Github}
 * @requires module:cordova-plugin-shake
 */
declare const useShake: () => {
    startWatch: (onShake: () => void, sensitivity?: number, onError?: () => void) => void;
    stopWatch: () => void;
};
export default useShake;
