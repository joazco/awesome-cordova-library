# @awesome-cordova-library/navigationbar

Hide and auto hide navigation bar.

[Github](https://github.com/cranberrygame/cordova-plugin-navigationbar)

## Installation

```sh
cordova plugin add cordova-plugin-navigationbar
(when build error, use github url: cordova plugin add https://github.com/cranberrygame/cordova-plugin-navigationbar)
npm i @awesome-cordova-library/navigationbar
```

## Vanilla

### Declaration

```typescript
class NavigationBar {
  /**
   *
   * @param autoHideNavigationBar {boolean}
   * @param successCallback {Function}
   * @param errorCallback {Function}
   */
  static setUp(autoHideNavigationBar: boolean, successCallback: () => void, errorCallback: () => void): void;
  /**
   *
   * @param successCallback {Function}
   * @param errorCallback {Function}
   */
  static hideNavigationBar(successCallback: () => void, errorCallback: () => void): void;
}
```

### Usages

```typescript
import NavigationBar from '@awesome-cordova-library/navigationbar';

document.addEventListener(
  'deviceready',
  function () {
    var autoHideNavigationBar = false;
    NavigationBar.setUp(autoHideNavigationBar);
  },
  false,
);

NavigationBar.hide();
```

## React

### Declaration

```typescript
const useNavigationBar: () => {
  setUp: (autoHideNavigationBar: boolean) => Promise<void>;
  hideNavigationBar: () => Promise<void>;
};
```

### Usages

```typescript
import { useEffect } from 'react';
import useNavigationBar from '@awesome-cordova-library/navigationbar/lib/react';

function App() {
  const { setUp, hideNavigationBar } = useNavigationBar();
  useEffect(() => {
    setUp(true);
  }, []);

  return <div />;
}
```
