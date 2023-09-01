---
id: plugin-network-information
title: Network Information
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - network information
---

Network Information

This plugin provides an implementation of an old version of the Network Information API. It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-network-information/index.html)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-screen-orientation
npm install @awesome-cordova-library/screen-orientation
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-screen-orientation
npm install @awesome-cordova-library/screen-orientation
npx cap sync
```

## Vanilla

### Declaration

```typescript
export declare type ConnectionType =
  | "unknown"
  | "ethernet"
  | "wifi"
  | "2g"
  | "3g"
  | "4g"
  | "cellular"
  | "none";
export declare enum Connection {
  UNKNOWN = "unknown",
  ETHERNET = "ethernet",
  WIFI = "wifi",
  CELL_2G = "2g",
  CELL_3G = "3g",
  CELL_4G = "4g",
  CELL = "cellular",
  NONE = "none",
}

class NetworkInformation {
  /**
   * This function offers a fast way to determine the device's network connection state, and type of connection.
   * @returns {ConnectionType}
   */
  static getNetworkType(): ConnectionType;
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
}
```

### Usages

```typescript
import NetworkInformation from "@awesome-cordova-library/network-information";

const type = NetworkInformation.getNetworkType();
NetworkInformation.onOffline(() => {});
NetworkInformation.onOnline((type) => {});
```

## React

### Declaration

```typescript
const useNetworkInformation: () => {
  getNetworkType: () => ConnectionType;
  onOffline: (callback: () => void) => void;
  onOnline: (callback: (networkType: ConnectionType) => void) => void;
};
```

### Usages

```typescript
import { useEffect, useState } from "react";
import { ConnectionType } from "@awesome-cordova-library/network-information/";
import useNetworkInformation from "@awesome-cordova-library/network-information/lib/react";

function App() {
  const [connectionType, setConnectionType] =
    useState<ConnectionType>("unknown");
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const { getNetworkType, onOffline, onOnline } = useNetworkInformation();

  useEffect(() => {
    const networkType = getNetworkType();
    setConnectionType(networkType);
    setIsOnline(networkType !== "unknown" && networkType !== "none");
    setInterval(() => {
      setConnectionType(getNetworkType());
    }, 1000);
  }, [getNetworkType]);

  useEffect(() => {
    onOnline((_type) => setIsOnline(true));
  }, [onOnline]);

  useEffect(() => {
    onOffline(() => setIsOnline(false));
  }, [onOffline]);

  return (
    <div>
      <p>Connection type: {connectionType}</p>
      <p>Is online: {String(isOnline)}</p>
    </div>
  );
}
```
