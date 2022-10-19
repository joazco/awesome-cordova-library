import { useCallback } from 'react';
import BatteryStatus, { BatteryStatusType } from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-battery-status/index.html Cordova}
 * @requires module:cordova-plugin-battery-status
 */
const useBatteryStatus = () => {
  const onBatteryStatus = useCallback((callback: (batterystatus: BatteryStatusType) => void) => {
    BatteryStatus.onBatteryStatus(callback);
  }, []);

  const onBatteryLow = useCallback((callback: (batterystatus: BatteryStatusType) => void) => {
    BatteryStatus.onBatteryLow(callback);
  }, []);

  const onBatteryCritical = useCallback((callback: (batterystatus: BatteryStatusType) => void) => {
    BatteryStatus.onBatteryCritical(callback);
  }, []);

  return { onBatteryStatus, onBatteryLow, onBatteryCritical };
};

export default useBatteryStatus;
