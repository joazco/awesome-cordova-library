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
  static onBatteryStatus(callback: (batterystatus: BatteryStatusType) => void) {
    if (typeof window.cordova === 'undefined') {
      BatteryStatus.onBatteryStatusWeb(callback);
    } else {
      window.addEventListener(
        'batterystatus',
        (status: any) => {
          callback(status);
        },
        false,
      );
    }
  }

  /**
   * Fires when the battery charge percentage changes by at least 1 percent, or when the device is plugged in or unplugged. Returns an object containing battery status.
   * @param callback {(batterystatus: BatteryStatusType) => void}
   */
  static onBatteryStatusWeb(callback: (batterystatus: BatteryStatusType) => void) {
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        callback({ isPlugged: battery.charging, level: battery.level * 100 });
        battery.onlevelchange = () => {
          callback({ isPlugged: battery.charging, level: battery.level * 100 });
        };
      });
    }
  }

  /**
   * Fires when the battery charge percentage reaches the low charge threshold. This threshold value is device-specific.
   * Incompatible without cordova
   * @param callback {(batterystatus: BatteryStatusType) => void}
   */
  static onBatteryLow(callback: (batterystatus: BatteryStatusType) => void) {
    if (typeof window.cordova !== 'undefined') {
      window.addEventListener(
        'onBatteryLow',
        (status: any) => {
          callback(status);
        },
        false,
      );
    } else {
      BatteryStatus.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * Fires when the battery charge percentage reaches the critical charge threshold. This threshold value is device-specific.
   * Incompatible without cordova
   * @param callback {(batterystatus: BatteryStatusType) => void}
   */
  static onBatteryCritical(callback: (batterystatus: BatteryStatusType) => void) {
    if (typeof window.cordova !== 'undefined') {
      window.addEventListener(
        'batterycritical',
        (status: any) => {
          callback(status);
        },
        false,
      );
    } else {
      BatteryStatus.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('BatteryStatus is uninstalled or incompatible with current platform');
  }
}

export { BatteryStatusType };
