# @awesome-cordova-library/device

This plugin defines a global device object, which describes the device's hardware and software. Although the object is in the global scope, it is not available until after the deviceready event.

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-device/index.html#quick-example)

## Installation

```sh
cordova plugin add cordova-plugin-device
npm i @awesome-cordova-library/device
```

## Vanilla

### Declaration

```typescript
class Device {
  static getModel(): string;
  static getPlatform(): 'browser' | 'Android' | 'BlackBerry 10' | 'iOS' | 'WinCE' | 'Tizen' | 'Mac OS X';
  static getVersion(): string;
  static getUuid(): string | null;
  static getManufacturer(): string | null;
  static getIsVirtual(): boolean;
}
```

### Usages

```typescript
import Device from '@awesome-cordova-library/device';

Device.getModel();
Device.getPlatform();
Device.getVersion();
Device.getUuid();
Device.getManufacturer();
Device.getIsVirtual();
```

## React

### Declartion

```typescript
const useDevice: () => {
  getModel: () => string;
  getPlatform: () => 'browser' | 'Android' | 'BlackBerry 10' | 'iOS' | 'WinCE' | 'Tizen' | 'Mac OS X';
  getUuid: () => string | null;
  getVersion: () => string | null;
  getManufacturer: () => string | null;
};
```

### Usages

```typescript
import { useEffect } from 'react';
import useDevice from '@awesome-cordova-library/device/lib/react';

function App() {
  const { getModel, getPlatform, getUuid, getVersion, getManufacturer } = useDevice();

  useEffect(() => {
    getModel();
    getPlatform();
    getUuid();
    getVersion();
    getManufacturer();
  }, []);
}
```
