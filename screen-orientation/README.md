---
id: plugin-screen-orientation
title: Screen Orientation
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - screen orientation
---

# Screen Orientation

Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, and windows-uwp.

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-screen-orientation/index.html)

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
type OrientationLockCordovaType =
  | "any"
  | "landscape"
  | "landscape-primary"
  | "landscape-secondary"
  | "portrait"
  | "portrait-primary"
  | "portrait-secondary";

class ScreenOrientation {
  static lock(orientation: OrientationLockCordovaType): void;
  static unLock(): void;
  static currentOrientation(): OrientationLockCordovaType;
  static onOrientationChange(
    callback: (orientation: OrientationLockCordovaType) => void
  ): void;
}
```

### Usages

```typescript
import ScreenOrientation from "@awesome-cordova-library/screen-orientation";

// lock the device orientation
ScreenOrientation.lock("portrait");
// unlock the orientation
ScreenOrientation.unLock();
// access current orientation
ScreenOrientation.currentOrientation();
ScreenOrientation.onOrientationChange((o) => console.log(o));
```

## React

### Declaration

```typescript
const useScreenOrientation: () => {
  lock: (orientation: OrientationLockCordovaType) => void;
  unLock: () => void;
  currentOrientation: () => OrientationLockCordovaType;
  onOrientationChange: (
    callback: (orientation: OrientationLockCordovaType) => void
  ) => void;
};
```

### Usages

```typescript
import { useEffect } from "react";
import useScreenOrientation from "@awesome-cordova-library/screen-orientation/lib/react";

function App() {
  const { lock, unLock, currentOrientation, onOrientationChange } =
    useScreenOrientation();

  useEffect(() => {
    lock("portrait");
  }, []);

  return <div />;
}
```
