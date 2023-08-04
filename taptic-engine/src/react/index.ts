import { useCallback } from 'react';
import TapicEngineIos from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to enables adding contextual haptic feedback in response to specific user actions.
 * Also, check out {@link https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine Github}
 * @requires cordova-plugin-taptic-engine
 */
const useTapicEngineIos = () => {
  const selection = useCallback(() => TapicEngineIos.selection(), []);
  const notification = useCallback((type: 'success' | 'warning' | 'error') => TapicEngineIos.notification(type), []);
  const impact = useCallback(
    (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => TapicEngineIos.impact(style),
    [],
  );
  const gestureSelectionStart = useCallback(() => TapicEngineIos.gestureSelectionStart(), []);
  const gestureSelectionChanged = useCallback(() => TapicEngineIos.gestureSelectionChanged(), []);
  const gestureSelectionEnd = useCallback(() => TapicEngineIos.gestureSelectionEnd(), []);
  const weakBoom = useCallback(
    () =>
      new Promise<void>((resolve, reject) => {
        TapicEngineIos.weakBoom(resolve, reject);
      }),
    [],
  );
  const strongBoom = useCallback(
    () =>
      new Promise<void>((resolve, reject) => {
        TapicEngineIos.strongBoom(resolve, reject);
      }),
    [],
  );
  const burst = useCallback(
    () =>
      new Promise<void>((resolve, reject) => {
        TapicEngineIos.burst(resolve, reject);
      }),
    [],
  );

  return {
    selection,
    notification,
    impact,
    gestureSelectionStart,
    gestureSelectionChanged,
    gestureSelectionEnd,
    weakBoom,
    strongBoom,
    burst,
  };
};

export default useTapicEngineIos;
