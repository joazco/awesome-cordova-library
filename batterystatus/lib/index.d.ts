import { BatteryStatusType } from './types';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides an implementation of an old version of the Battery Status Events API.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-battery-status/index.html Cordova}
 * @requires module:cordova-plugin-battery-status
 */
export default class BatteryStatus {
    /**
     * Fires when the battery charge percentage changes by at least 1 percent, or when the device is plugged in or unplugged. Returns an object containing battery status.
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    static onBatteryStatus(callback: (batterystatus: BatteryStatusType) => void): void;
    /**
     * Fires when the battery charge percentage changes by at least 1 percent, or when the device is plugged in or unplugged. Returns an object containing battery status.
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    static onBatteryStatusWeb(callback: (batterystatus: BatteryStatusType) => void): void;
    /**
     * Fires when the battery charge percentage reaches the low charge threshold. This threshold value is device-specific.
     * Incompatible without cordova
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    static onBatteryLow(callback: (batterystatus: BatteryStatusType) => void): void;
    /**
     * Fires when the battery charge percentage reaches the critical charge threshold. This threshold value is device-specific.
     * Incompatible without cordova
     * @param callback {(batterystatus: BatteryStatusType) => void}
     */
    static onBatteryCritical(callback: (batterystatus: BatteryStatusType) => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
export { BatteryStatusType };
