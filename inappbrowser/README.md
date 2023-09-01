---
id: plugin-inappbrowser
title: Inappbrowser
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - inappbrowser
---

# Inappbrowser

You can show helpful articles, videos, and web resources inside of your app. Users can view web pages without leaving your app.

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-inappbrowser/index.html)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-inappbrowser
npm install @awesome-cordova-library/inappbrowser
```

```bash
npm install cordova-plugin-inappbrowser
npm install @awesome-cordova-library/inappbrowser
npx cap sync
```

## Vanilla

### Declaration

```typescript
class InAppBrowser {
  static open(
    url: string,
    target: "_self" | "_blank" | "_system",
    options?: string | InAppBrowserOptions
  ): InAppBrowserType | Window | null;
}
```

### Usages

```typescript
import InAppBrowser from "@awesome-cordova-library/inappbrowser";

// Open Joazco.com
InAppBrowser.open("https://joazco.com", "_blank", "location=yes");
```

## React

### Declaration

```typescript
const useInAppBrowser: () => (
  url: string,
  target: "_self" | "_blank" | "_system",
  options?: string | InAppBrowserOptions
) => Window | InAppBrowserType | null;
```

### Usages

```typescript
import useInAppBrowser from "@awesome-cordova-library/inappbrowser/lib/react";
import { InAppBrowserType } from "@awesome-cordova-library/inappbrowser/lib/types";

function App() {
  const open = useInAppBrowser();

  const openJoazco = () => {
    const ref: InAppBrowserType = open("https://joazco.com", "_blank", {
      location: "yes",
      footer: "yes",
      fullscreen: "yes",
      hidden: "yes",
    }) as InAppBrowserType;
    setTimeout(() => ref.show(), 1000);
  };

  return (
    <div>
      <button onClick={openJoazco}>Open Joazco.com</button>
    </div>
  );
}
```
