---
id: plugin-localstorage
title: Localstorage
tags:
  - javascript
  - typescript
  - localstorage
sidebar_position: 2
---

# Localstorage

Library to use localstorage easily

[Online documentation](https://awesomecordovalibrary.com)

[Mozilla documentation](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

## Installation

```sh
npm install @awesome-cordova-library/localstorage
```

## Vanilla

### Declartion

```typescript
class LocalStorage {
  static setItem<T = any>(key: string, value: T): void;
  static getItem<T = any>(key: string): T | null;
  static removeItem(key: string): void;
  static clear(): void;
}
```

### Usages

```typescript
import LocalStorage from "@awesome-cordova-library/localstorage";

LocalStorage.setItem<string[]>("item", value);
LocalStorage.getItem<string[]>("item");
LocalStorage.removeItem("item");
LocalStorage.clear();
```

## React

### Declaration

```typescript
const useLocalStorage: () => {
  setItem: <T = any>(key: string, value: T) => void;
  getItem: <T_1 = any>(key: string) => T_1 | null;
  removeItem: (key: string) => void;
  clear: () => void;
};
```

### Usages

```typescript
import { useEffect } from "react";
import useLocalStorage from "@awesome-cordova-library/localstorage/lib/react";

function App() {
  const { setItem, getItem, removeItem, clear } = useLocalStorage();

  useEffect(() => {
    setItem<string[]>("item", value);
    getItem<string[]>("item");
    removeItem("item");
    clear();
  }, []);

  return <div />;
}
```
