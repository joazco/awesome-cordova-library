import { ConnectionType, Connection } from './types';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides an implementation of an old version of the Network Information API. It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-network-information/index.html Cordova}
 * @requires module:cordova-plugin-network-information
 */
export default class NetworkInformation {
    /**
     * This function offers a fast way to determine the device's network connection state, and type of connection.
     * @returns {ConnectionType}
     */
    static getNetworkType(): ConnectionType;
    /**
     * The event fires when an application goes offline, and the device is not connected to the Internet.
     * @returns {ConnectionType}
     */
    static getNetworkTypeWeb(): ConnectionType;
    /**
     *
     * @param callback {() => void}
     */
    static onOffline(callback: () => void): void;
    /**
     * This event fires when an application goes online, and the device becomes connected to the Internet.
     * @param callback {(networkType: ConnectionType) => void}
     */
    static onOnline(callback: (networkType: ConnectionType) => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
export { ConnectionType, Connection };
