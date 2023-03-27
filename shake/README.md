# @awesome-cordova-library/cordova-plugin-shake

Apache Cordova / PhoneGap Plugin to detect when a physical device performs a shake gesture.

For iOS, the plugin uses the native shake detection.
Fo all other platforms, it is based on a standalone JavaScript implementation.

[Github documentation](https://github.com/leecrossley/cordova-plugin-shake)

## Installation

```sh
cordova plugin add cordova-plugin-shake
npm i @awesome-cordova-library/shake
```

## Vanilla

### Declaration

```typescript
export default class Shake {
  static startWatch(onShake: () => void, sensitivity?: number, onError?: () => void): void;
  static stopWatch(): void;
  static warnPluginIsUnInstallOrIncompatible(): void;
}
```

### Usages

```typescript
import Shake from '@awesome-cordova-library/shake';

Shake.startWatch(() => console.log("deviceShaken success"), 40, () => console.err("deviceShaken error"));
setTimeout(() => {
  Shake.stopWatch();
}, 2000);
.....
```

## React

### Declaration

```typescript
declare const useShake: () => {
  startWatch: (onShake: () => void, sensitivity?: number, onError?: () => void) => void;
  stopWatch: () => void;
};
```

### Usages

```typescript
import { useEffect } from 'react';
import useShake from '@awesome-cordova-library/shake/lib/react';

function App() {
  const { startWatch, stopWatch } = useShake();

  useEffect(() => {
    startWatch(
      () => console.log('deviceShaken success'),
      40,
      () => console.err('deviceShaken error'),
    );
    return {
      stopWatch();,
    };
  }, []);

  return <div></div>;
}
```
