---
id: plugin-file
title: File
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - file
---

# File

This plugin implements a File API allowing read/write access to files residing on the device.

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-file/)

**cordova-plugin-file has already type file at `cordova-plugin-file/type/index.d.ts` just use it.**

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-file
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-file
npx cap sync
```

### Copy type file

Please copy the [index.d.ts](https://github.com/joazco/awesome-cordova-library/tree/main/file/index.d.ts) file to the root of the directory where you want to use cordova-plugin-file.

### Usages

Replace `./` with the path where you have copied the index.d.ts file.

```typescript
/// <reference types="./" />
const declare cordova: Cordova;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log(cordova.file);
  console.log(cordova.file.dataDirectory);
}

var folderName = "myFolder";
// create directory myFolder
window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
    const directory = dirEntry as globalThis.DirectoryEntry;
    directory.getDirectory(folderName, { create: true, exclusive: false }, function (folderEntry) {
        console.log("Directory created: " + folderEntry.toURL());
    }, onError);
}, onError);

function onError(error) {
    console.error("Error : " + JSON.stringify(error));
}

```
