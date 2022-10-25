import { BatteryStatusType } from '../';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-battery-status/index.html Cordova}
 * @requires module:cordova-plugin-battery-status
 */
declare const useBatteryStatus: () => {
    onBatteryStatus: (callback: (batterystatus: BatteryStatusType) => void) => void;
    onBatteryLow: (callback: (batterystatus: BatteryStatusType) => void) => void;
    onBatteryCritical: (callback: (batterystatus: BatteryStatusType) => void) => void;
};
export default useBatteryStatus;
