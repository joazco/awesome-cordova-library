---
id: plugin-taptic-engine
title: Taptic Engine
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - taptic engine
  - vibration
---

# Taptic Engine

Apache Cordova / PhoneGap Plugin to enables adding contextual haptic feedback in response to specific user actions.

**Only on iOS**

[Online documentation](https://awesomecordovalibrary.com)

[Github documentation](https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-taptic-engine
npm install @awesome-cordova-library/taptic-engine
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-taptic-engine
npm install @awesome-cordova-library/taptic-engine
npx cap sync
```

## Vanilla

### Declaration

```typescript
export default class TapicEngineIos {
  /**
   * Use selection feedback generators to indicate a change in selection.
   */
  static selection(): void;
  /**
   * Use notification feedback generators to indicate successes, failures, and warnings.
   * @param type {"success" | "warning" | "error"}
   */
  static notification(type: "success" | "warning" | "error"): void;
  /**
   * Use impact feedback generators to indicate that an impact has occurred. For example, you might trigger impact feedback when a user interface object collides with something or snaps into place.
   * @param style {"light" | "medium" | "heavy" | "rigid" | "soft"}
   */
  static impact(style: "light" | "medium" | "heavy" | "rigid" | "soft"): void;
  /**
   * Tell the taptic engine that a gesture for a selection change is starting.
   */
  static gestureSelectionStart(): void;
  /**
   * Tell the taptic engine that a selection changed during a gesture.
   */
  static gestureSelectionChanged(): void;
  /**
   * Tell the taptic engine we are done with a gesture. This needs to be called lest resources are not properly recycled.
   */
  static gestureSelectionEnd(): void;
  /**
   * This triggers the 'Pop' effect of 'Peek & Pop', which is a bit more profound than the 'Peek' effect.
   * Codewise this is exactly the same as weakBoom, except for the function name of course.
   */
  static weakBoom(onSuccess: () => void, onFail: () => void): void;
  /**
   * Start watching for shake gestures and call "onShake"
   * @param coords
   */
  static strongBoom(onSuccess: () => void, onFail: () => void): void;
  /**
   * This triggers the 'Nope' effect you get when fi. force touching a home icon which doesn't have any action. It's a short burst of 3-ish 'weak booms'.
   * Codewise this is exactly the same as weakBoom and strongBoom, except for the function name of course.
   */
  static burst(onSuccess: () => void, onFail: () => void): void;
  static warnPluginIsUnInstallOrIncompatible(): void;
}
```

### Usages

```typescript
import TapicEngineIos from '@awesome-cordova-library/taptic-engine';

TapicEngineIos.notification("error");
.....
```

## React

### Declaration

```typescript
declare const useTapicEngineIos: () => {
  selection: () => void;
  notification: (type: "success" | "warning" | "error") => void;
  impact: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => void;
  gestureSelectionStart: () => void;
  gestureSelectionChanged: () => void;
  gestureSelectionEnd: () => void;
  weakBoom: () => Promise<void>;
  strongBoom: () => Promise<void>;
  burst: () => Promise<void>;
};
```

### Usages

```typescript
import useTapicEngineIos from "@awesome-cordova-library/taptic-engine/lib/react";

function App() {
  const { notification } = useTapicEngineIos();

  return (
    <button
      onClick={() => {
        notification("error");
      }}
    >
      Send error haptic
    </button>
  );
}
```
