/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to enables adding contextual haptic feedback in response to specific user actions.
 * Also, check out {@link https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine Github}
 * @requires cordova-plugin-taptic-engine
 */
declare const useTapicEngineIos: () => {
    selection: () => void;
    notification: (type: 'success' | 'warning' | 'error') => void;
    impact: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
    gestureSelectionStart: () => void;
    gestureSelectionChanged: () => void;
    gestureSelectionEnd: () => void;
    weakBoom: () => Promise<void>;
    strongBoom: () => Promise<void>;
    burst: () => Promise<void>;
};
export default useTapicEngineIos;
