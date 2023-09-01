---
id: plugin-media
title: Media
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - media
---

# Media

This plugin provides the ability to record and play back audio files on a device.

[Online documentation](https://awesomecordovalibrary.com)

[Cordova documentation](https://www.npmjs.com/package/cordova-plugin-media)

**cordova-plugin-media has already type file at `cordova-plugin-media/type/index.d.ts` just use it.**

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-media
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-media
npx cap sync
```

### Usages

```typescript
/// <reference types="cordova-plugin-media" />
new Media("src", () => {}).play();
```
