---
id: plugin-dialogs
title: Dialogs
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - dialogs
---

# Dialogs

This plugin provides access to some native dialog UI elements via a global navigator.notification object.

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-dialogs
npm install @awesome-cordova-library/dialogs
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-dialogs
npm install @awesome-cordova-library/dialogs
npx cap sync
```

## Vanilla

### Declaration

```typescript
class Dialogs {
  static alert(
    message: string,
    alertCallback: () => void,
    title?: string,
    buttonName?: string
  ): void;
  static confirm(
    message: string,
    confirmCallback: (buttonIndex: number) => void,
    title?: string,
    buttonLabels?: string[]
  ): boolean | void;
  static prompt(
    message: string,
    promptCallback: (results: { buttonIndex: number; input1: string }) => void,
    title?: string,
    buttonLabels?: string[],
    defaultText?: string
  ): string | null | undefined;
  static beep(times?: number): void;
}
```

### Usages

```typescript
import Dialogs from "@awesome-cordova-library/dialogs";

Dialogs.alert("Alert content", () => {}, "Alert", "OK");
Dialogs.confirm(
  "Confirm content",
  (buttonIndex) => {
    console.log("confirm buttonIndex  " + buttonIndex);
  },
  "Confirm",
  ["OK", "May be later", "No"]
);
Dialogs.prompt(
  "Hello Prompt",
  (results) => {
    console.log(JSON.stringify(results));
  },
  "Prompt",
  ["OK", "Cancel"],
  "42"
);
Dialogs.beep();
```

## React

### Declaration

```typescript
const useDialogs: () => {
  alert: (
    message: string,
    alertCallback: () => void,
    title?: string,
    buttonName?: string
  ) => void;
  confirm: (
    message: string,
    confirmCallback: (buttonIndex: number) => void,
    title?: string,
    buttonLabels?: string[]
  ) => boolean | void;
  prompt: (
    message: string,
    promptCallback: (results: { buttonIndex: number; input1: string }) => void,
    title?: string,
    buttonLabels?: string[],
    defaultText?: string
  ) => void;
  beep: (times?: number) => void;
};
```

### Usages

```typescript
import useDialogs from "@awesome-cordova-library/dialogs/lib/react";

function App() {
  const { alert, confirm, prompt, beep } = useDialogs();

  const openDialogs = () => {
    alert("Alert content", () => {}, "Alert", "OK");
    const c = confirm(
      "Confirm content",
      (buttonIndex) => {
        console.log("confirm buttonIndex  " + buttonIndex);
      },
      "Confirmer?",
      ["OK", "May be later", "No"]
    );
    if (c) {
      console.log("confirme");
    }
    prompt(
      "Hello Prompt",
      (results) => {
        console.log(JSON.stringify(results));
      },
      "Prompt",
      ["OK", "Cancel"],
      "42"
    );
    beep();
  };

  return (
    <div>
      <button onClick={openDialogs}>Open Dialogs</button>
    </div>
  );
}
```
