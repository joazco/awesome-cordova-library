---
id: plugin-statusbar
title: Statusbar
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - statusbar
---

# Statusbar

The StatusBar object provides some functions to customize the iOS and Android StatusBar.

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-statusbar/index.html)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-statusbar
npm install @awesome-cordova-library/statusbar
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-statusbar
npm install @awesome-cordova-library/statusbar
npx cap sync
```

## Vanilla

### Declaration

```typescript
class Statusbar {
  static overlaysWebView(isOverlay: boolean): void;
  static styleDefault(): void;
  static styleLightContent(): void;
  static styleBlackTranslucent(): void;
  static styleBlackOpaque(): void;
  static backgroundColorByName(color: string): void;
  static backgroundColorByHexString(color: string): void;
  static show(): void;
  static hide(): void;
  static isVisible(): boolean;
  static warnPluginIsUnInstallOrIncompatible(): void;
  static changeThemeColor(color: string): void;
}
```

### Usages

```typescript
import Statusbar from '@awesome-cordova-library/statusbar';

/**
 * On iOS 7, make the statusbar overlay or not overlay the WebView.
 *
 * @param isOverlay - On iOS 7, set to false to make the statusbar appear like iOS 6.
 *                    Set the style and background color to suit using the other functions.
 */
Statusbar.overlaysWebView(true);
/**
 * Use the default statusbar (dark text, for light backgrounds).
 */
Statusbar.styleDefault();
/**
 * Use the lightContent statusbar (light text, for dark backgrounds).
 */
Statusbar.styleLightContent();
/**
 * Use the blackTranslucent statusbar (light text, for dark backgrounds).
 */
Statusbar.styleBlackTranslucent();
/**
 * Use the blackOpaque statusbar (light text, for dark backgrounds).
 */
Statusbar.styleBlackOpaque();
/**
   * On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false,
   * you can set the background color of the statusbar by color name.
   *
   * @param color - Supported color names are:
   *                black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
*/
Statusbar.backgroundColorByName(color: string);
/**
   * Sets the background color of the statusbar by a hex string.
   *
   * @param color - CSS shorthand properties are also supported.
   *                On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you can set the background color of the statusbar by a hex string (#RRGGBB).
   *                On WP7 and WP8 you can also specify values as #AARRGGBB, where AA is an alpha value
*/
Statusbar.backgroundColorByHexString(color: string);
/**
 * Shows the statusbar.
*/
Statusbar.show();
/**
 * Hide the statusbar.
*/
Statusbar.hide();
/**
 * Read this property to see if the statusbar is visible or not.
 */
Statusbar.isVisible();
/**
 * Sets color of meta balise theme-color
*/
Statusbar.changeThemeColor(color: string);
```

## React

### Declaration

```typescript
const useStatusbar: () => {
  overlaysWebView: (isOverlay: boolean) => void;
  styleDefault: () => void;
  styleLightContent: () => void;
  styleBlackTranslucent: () => void;
  styleBlackOpaque: () => void;
  backgroundColorByName: (color: string) => void;
  backgroundColorByHexString: (color: string) => void;
  hide: () => void;
  show: () => void;
  isVisible: () => boolean;
};
```

### Usages

```typescript
import { useEffect } from "react";
import useStatusbar from "@awesome-cordova-library/statusbar/lib/react";

function App() {
  const {
    overlaysWebView,
    styleDefault,
    styleLightContent,
    styleBlackTranslucent,
    styleBlackOpaque,
    backgroundColorByName,
    backgroundColorByHexString,
    hide,
    show,
    isVisible,
  } = useStatusbar();

  useEffect(() => {
    styleDefault();
    overlaysWebView(false);
    backgroundColorByHexString("#FFA500");
  }, []);

  return <div />;
}
```
