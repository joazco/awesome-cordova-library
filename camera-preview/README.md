---
id: camera-preview
title: Camera Preview
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - camera
  - preview
---

# Camera Preview

[Online documentation](https://awesomecordovalibrary.com)

[Plugin documentation](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview)

## Installation

### Cordova

```bash
cordova plugin add cordova-plugin-camera-preview
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-camera-preview
npx cap sync
```

## Usages

[See more](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview#methods)

```typescript
import {
  CameraPreview as CameraPreviewPlugin,
  CameraPreviewStartCameraOptions,
  CameraPreviewTakePictureOptions,
} from 'cordova-plugin-camera-preview';

declare const CameraPreview: CameraPreviewPlugin;

...

private readonly cameraPreviewOpts: CameraPreviewStartCameraOptions = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight - 80,
    camera: 'rear',
    tapPhoto: false,
    previewDrag: false,
    toBack: false,
    alpha: 1,
    tapFocus: true,
    storeToFile: true,
};
private readonly cameraPicOptions: CameraPreviewTakePictureOptions = {
    quality: 66,
    width: 750,
    height: 1000,
};

CameraPreview.startCamera(
  this.cameraPreviewOpts,
  () => {

  },
  () => {

  }
);
CameraPreview.stopCamera(
  () => {

  },
  () => {

  }
);
CameraPreview.takePicture(
  this.cameraPicOptions,
  (pictures) => {

  },
  () => {

  }
);
```
