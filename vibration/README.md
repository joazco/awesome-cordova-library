---
id: plugin-vibration
title: Vibration
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - vibration
---

# Vibration

This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-vibration/index.html)

[W3C documentation](http://www.w3.org/TR/vibration/)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-vibration
npm install @awesome-cordova-library/vibration
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-vibration
npm install @awesome-cordova-library/vibration
npx cap sync
```

## Vanilla

### Declaration

```typescript
class Vibration {
  static vibrate(time: number | number[]): void;
}
```

### Usages

```typescript
import Vibration from "@awesome-cordova-library/vibration";

// Vibrate for 3 seconds
Vibration.vibrate(3000);

// Vibrate for 3 seconds
Vibration.vibrate([3000]);
```

## React

### Declaration

```typescript
const useVibration: () => (time: number | number[]) => void;
```

### Usages

```typescript
import { useEffect } from "react";
import useVibration from "@awesome-cordova-library/vibration/lib/react";

function App() {
  const vibrate = useVibration();

  useEffect(() => {
    // Vibrate for 1 second
    // Wait for 1 second
    // Vibrate for 3 seconds
    // Wait for 1 second
    // Vibrate for 5 seconds
    vibrate([1000, 1000, 3000, 1000, 5000]);
  }, []);

  return <div />;
}
```

## Quirks

Mulitple vibration not supported on iOS
