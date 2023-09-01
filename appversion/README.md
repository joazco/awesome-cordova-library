---
id: plugin-appversion
title: App Version
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - version
  - app version
---

# App Version

Reads the version of your app from the target build settings.

[Online documentation](https://awesomecordovalibrary.com)

[Github documentation](https://github.com/sampart/cordova-plugin-app-version)

## Installation

### Cordova

```bash
cordova plugin add cordova-plugin-app-version
npm install @awesome-cordova-library/appversion
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-app-version
npm install @awesome-cordova-library/appversion
npx cap sync
```

## Vanilla

### Declaration

```typescript
export default class Appversion {
  /**
   * Return App Name
   * @return Promise<string>
   */
  static getAppName(): Promise<string> | Promise<null>;
  /**
   * Return Package Name
   * @return Promise<string>
   */
  static getPackageName(): Promise<string> | Promise<null>;
  /**
   * Return App Version Number
   * @return Promise<string>
   */
  static getVersionNumber(): Promise<string> | Promise<null>;
  /**
   * Return App Version Code
   * @return Promise<string>
   */
  static getVersionCode(): Promise<string> | Promise<null>;
  static warnPluginIsUnInstallOrIncompatible(): void;
}
```

### Usages

```typescript
import Appversion from '@awesome-cordova-library/appversion';

Appversion.getAppName().then((value) => value && setAppName(value));
Appversion.getPackageName().then((value) => value && setPackageName(value));
Appversion.getVersionNumber().then((value) => value && setVersionNumber(value));
Appversion.getVersionCode().then((value) => value && setVersionCode(value));
```
