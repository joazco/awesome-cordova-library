# @awesome-cordova-library/batterystatus

This plugin provides an implementation of an old version of the Battery Status Events API.

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-battery-status/index.html)

## Installation

```sh
cordova plugin add cordova-plugin-battery-status
npm i @awesome-cordova-library/batterystatus
```

## Vanilla

### Declaration

```typescript
class BatteryStatus {
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
}
```

### Usages

```typescript
import BatteryStatus from '@awesome-cordova-library/batterystatus';

BatteryStatus.onBatteryStatus((batterystatus) => {
  console.log(`Battery is plugged: ${batterystatus.isPlugged} // Battery level: ${batterystatus.level}`);
});
```

## React

### Declaration

```typescript
const useBatteryStatus: () => {
  onBatteryStatus: (callback: (batterystatus: BatteryStatusType) => void) => void;
  onBatteryLow: (callback: (batterystatus: BatteryStatusType) => void) => void;
  onBatteryCritical: (callback: (batterystatus: BatteryStatusType) => void) => void;
};
```

### Usages

```typescript
import { useEffect, useState } from 'react';
import { BatteryStatusType } from '@awesome-cordova-library/batterystatus';
import useBatteryStatus from '@awesome-cordova-library/batterystatus/lib/react';

function App() {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatusType>();
  const { onBatteryStatus } = useBatteryStatus();

  useEffect(() => {
    onBatteryStatus((batterystatus) => {
      setBatteryStatus(batterystatus);
    });
  }, [onBatteryStatus]);

  return (
    <div>
      <p>Battery Is plugged: {String(batteryStatus?.isPlugged)}</p>
      <p>Battery level: {batteryStatus?.level}</p>
    </div>
  );
}
```
