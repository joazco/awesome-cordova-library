---
id: plugin-ratedialog
title: Ratedialog
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - ratedialog
---

# Ratedialog

A plugin to provide rate this app functionality into your cordova application.

[Online documentation](https://awesomecordovalibrary.com)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-dialogs
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-inappbrowser
npm i @awesome-cordova-library/ratedialog
```

```bash
npm install cordova-plugin-dialogs
npm install cordova-plugin-device
npm install cordova-plugin-inappbrowser
npm install @awesome-cordova-library/ratedialog
npx cap sync
```

## Options

| Option                                      | Type       | Description                                                            |
| :------------------------------------------ | :--------- | :--------------------------------------------------------------------- |
| appName                                     | String     | App name                                                               |
| locale                                      | 'en', 'fr' | Locale have to use, if you use other language use **forceText** option |
| usesUntilPrompt                             | number     | Count of runs of application before dialog will be displayed           |
| storeAppURL.ios                             | number     | application id in AppStore (ex: 1234567)                               |
| storeAppURL.android                         | number     | application id in Google Store (ex: com.joazco.cordovaawesomelibrary)  |
| forceText.rate_dialog_modal_title           | string     | **optional** Title of modal                                            |
| forceText.rate_dialog_content               | string     | **optional** Content of modal                                          |
| forceText.rate_dialog_modal_btn_ratenow     | string     | **optional** Text of button rate now                                   |
| forceText.rate_dialog_modal_btn_no          | string     | **optional** Text of button no                                         |
| forceText.rate_dialog_modal_btn_maybe_later | string     | **optional** Text of button maybe later                                |

## Vanilla

### Declaration

```typescript
class RateDialog {
  /**
   * Set preferences for use RateDialog
   * @param options {DialogRateOption}
   */
  static setPreference(options: DialogRateOption): void;
  /**
   * Show dialog rating if user open app usesUntilPrompt times. You can force open dialog with force = true. If user had select no or rate now dialog won't open again. If user selected later usesUntilPrompt is reset at 0.
   * @param force {boolean}
   */
  static promptForRating(force?: boolean): void;
  /**
   * Reset usesUntilPrompt at 0 and dialog will be open again after user open app usesUntilPrompt times
   */
  static resetUserRatedOrRefused(): void;
  /**
   * Get information if user select no or rate now
   * @returns {bool|undefined}
   */
  static getUserRatedOrRefused(): boolean | undefined;
  /**
   * Get number of times user open app since the first call promptForRating
   * @returns {number|undefined}
   */
  static getNbUseApp(): number | undefined;
  /**
   * Override langage
   * @param locale {DialogRateLanguagesAccepted}
   * @returns
   */
  static setLocale(locale: DialogRateLanguagesAccepted): void;
}
```

### Usages

```typescript
import RateDialog from "@awesome-cordova-library/ratedialog";

RateDialog.setPreference({
  appName: "Cordova Awesome Library",
  locale: "en",
  usesUntilPrompt: 3,
  storeAppURL: {
    ios: "1234567",
    android: "com.joazco.cordovaawesomelibrary",
  },
});
RateDialog.promptForRating();
```

## React

### Declaration

```typescript
const useRateDialog: (initOptions: DialogRateOption) => {
  setPreference: (options: DialogRateOption) => void;
  promptForRating: (force?: boolean) => void;
  resetUserRatedOrRefused: () => void;
  getUserRatedOrRefused: () => boolean | undefined;
  getNbUseApp: () => number | undefined;
  setLocale: (locale: DialogRateLanguagesAccepted) => void;
};
```

### Usages

```typescript
import { useEffect } from "react";
import useRateDialog from "@awesome-cordova-library/ratedialog/lib/react";

function App() {
  const { promptForRating } = useRateDialog({
    appName: "Cordova Awesome Library",
    locale: "en",
    usesUntilPrompt: 3,
    storeAppURL: {
      ios: "1234567",
      android: "com.joazco.cordovaawesomelibrary",
    },
  });

  useEffect(() => {
    promptForRating();
  }, [promptForRating]);

  return <div />;
}
```
