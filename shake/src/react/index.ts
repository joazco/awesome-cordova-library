import { useCallback } from 'react';
import Shake from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to detect when a physical device performs a shake gesture.
 * Also, check out {@link https://github.com/leecrossley/cordova-plugin-shake#readme Github}
 * @requires module:cordova-plugin-shake
 */
const useShake = () => {
  const startWatch = useCallback((onShake: () => void, sensitivity: number = 30, onError?: () => void) => {
    Shake.startWatch(onShake, sensitivity, onError);
  }, []);

  const stopWatch = useCallback(() => {
    Shake.stopWatch();
  }, []);

  return {
    startWatch,
    stopWatch,
  };
};

export default useShake;
