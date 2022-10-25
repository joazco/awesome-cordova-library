import { ConnectionType } from '..';
declare const useNetworkInformation: () => {
    getNetworkType: () => ConnectionType;
    onOffline: (callback: () => void) => void;
    onOnline: (callback: (networkType: ConnectionType) => void) => void;
};
export default useNetworkInformation;
