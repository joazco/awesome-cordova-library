---
id: image-resizer
title: Image Resizer
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - image
  - resize
  - compress
---

# Image Resizer

Cordova Plugin For Image Resize.

[Online documentation](https://awesomecordovalibrary.com)

[Github documentation](https://github.com/JoschkaSchulz/cordova-plugin-image-resizer)

## Warning

**This plugin appears to be depreciated, please use [Compressor Image](../compressor-image/README.md) .**

## Installation

### Cordova

```bash
# This plugin uses the cordova-plugin-camera
cordova plugin add cordova-plugin-camera

# This plugin
cordova plugin add info.protonet.imageresizer

npm install @awesome-cordova-library/image-resizer
```

### Capacitor / Ionic

```bash
# This plugin uses the cordova-plugin-camera
cordova plugin add cordova-plugin-camera

# This plugin
cordova plugin add info.protonet.imageresizer

npm install @awesome-cordova-library/image-resizer
npx cap sync
```

## Vanilla

### Declaration

```typescript
export declare type OptionsImageResizer = {
  uri: string;
  folderName?: string;
  fileName: string;
  quality: number;
  width: number;
  height: number;
  base64?: boolean;
  fit?: boolean;
};
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova Plugin For Image Resize.
 * Also, check out {@link https://github.com/JoschkaSchulz/cordova-plugin-image-resizer Github}
 * @requires module:cordova-plugin-camera
 */
export default class ImageResizer {
  static resize(options: OptionsImageResizer, success: (image: string) => void, error: () => void): void;
  static warnPluginIsUnInstallOrIncompatible(): void;
}
```

### Usages

```typescript
import ImageResizer from '@awesome-cordova-library/image-resizer';
const options = {
  uri: uri,
  folderName: 'Protonet Messenger',
  quality: 90,
  width: 1280,
  height: 1280,
  base64: true,
  fit: false,
};
ImageResizer.resize(
  options,
  function (image) {
    // success: image is the new resized image
  },
  function () {
    // failed: grumpy cat likes this function
  },
);
```

## React

### Declaration

```typescript
declare const useImageResizer: () => (options: OptionsImageResizer) => Promise<string>;
export default useImageResizer;
```

### Usages

```typescript
import {useMemo} from "react";
import useImageResizer from '@awesome-cordova-library/image-resizer/lib/react';

function App() {
  const resize = useShake();
  const options = useMemo({
    uri: "path/to/my/image",
    folderName: 'Protonet Messenger',
    quality: 90,
    width: 1280,
    height: 1280,
    base64: true,
    fit: false,
  }, []);

  return <div>
    <button onClick={resize(options).then((image) => {
      console.log(image);
    })}>
  </div>;
}
```
