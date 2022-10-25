import { useCallback } from 'react';
import NetworkInformation, { ConnectionType } from '..';

const useNetworkInformation = () => {
  const getNetworkType = useCallback(() => {
    return NetworkInformation.getNetworkType();
  }, []);

  const onOffline = useCallback((callback: () => void) => {
    NetworkInformation.onOffline(callback);
  }, []);

  const onOnline = useCallback((callback: (networkType: ConnectionType) => void) => {
    NetworkInformation.onOnline(callback);
  }, []);

  return { getNetworkType, onOffline, onOnline };
};

export default useNetworkInformation;
