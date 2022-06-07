# @awesome-cordova-library/splashscreen

This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html#methods)

## Installation

```sh
cordova plugin add cordova-plugin-splashscreen
npm i @awesome-cordova-library/splashscreen
```

## Vanilla

### Declaration

```typescript
class SplashScreen {
  static show(): void;
  static hide(): void;
}
```

### Usages

```typescript
import SplashScreen from '@awesome-cordova-library/SplashScreen';

// Displays the splash screen.
SplashScreen.show();

// Dismiss the splash screen.
SplashScreen.hide();
```

## React

### Declaration

```typescript
const useSplashScreen: () => {
  show: () => void;
  hide: () => void;
};
```

### Usages

```typescript
import { useEffect } from 'react';
import useSplashScreen from '@awesome-cordova-library/splashscreen/lib/react';

function App() {
  const { show, hide } = useSplashScreen();

  useEffect(() => {
    show();
    setTimeout(() => {
      hide();
    }, 3000);
  }, []);

  return <div />;
}
```
