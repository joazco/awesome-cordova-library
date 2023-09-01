---
id: plugin-nativeaudio
title: Nativeaudio
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - nativeaudio
---

# Nativeaudio

This Cordova / PhoneGap (3.5+) plugin enables concurrency (multi-channel playback), polyphony (multi-voice playback) and minimized latency (via caching) in audio-based applications, by leveraging native audio APIs. Designed for the use in HTML5-based cross-platform games and mobile/hybrid audio applications.

[Online documentation](https://awesomecordovalibrary.com)

[Github documentation](https://github.com/floatinghotpot/cordova-plugin-nativeaudio)

## Installation

### Cordova

```sh
cordova plugin add cordova-plugin-nativeaudio
npm install @awesome-cordova-library/nativeaudio
```

### Capacitor / Ionic

```bash
npm install cordova-plugin-nativeaudio
npm install @awesome-cordova-library/nativeaudio
npx cap sync
```

## Vanilla

### Declaration

```typescript
class NativeAudio {
  static preloadSimple(
    id: string,
    assetPath: string,
    successCallback: () => void,
    errorCallback: () => void
  ): void;
  static preloadComplex(
    id: string,
    assetPath: string,
    volume: number,
    voices: number,
    delay: number,
    successCallback: () => void,
    errorCallback: () => void
  ): void;
  static play(
    id: string,
    successCallback: () => void,
    errorCallback: () => void,
    completeCallback: () => void
  ): void;
  static playWeb(
    src: string,
    isLoop?: boolean,
    volume?: number
  ): HTMLAudioElement;
  static loop(
    id: string,
    successCallback: () => void,
    errorCallback: () => void
  ): void;
  static stop(
    id: string,
    successCallback: () => void,
    errorCallback: () => void
  ): void;
  static stopWeb(sound: HTMLAudioElement): void;
  static unload(
    id: string,
    successCallback: () => void,
    errorCallback: () => void
  ): void;
  static setVolumeForComplexAsset(
    id: string,
    volume: number,
    successCallback: () => void,
    errorCallback: () => void
  ): void;
}
```

### Usages

```typescript
import NativeAudio from '@awesome-cordova-library/nativeaudio';
// Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
NativeAudio.preloadSimple(
  'uniq id',
  'assets/sound.mp3',
  () => console.log('success'),
  () => console.error('fail'),
);
// Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
NativeAudio.preloadComplex(....);
//Plays an audio asset.
NativeAudio.play(....);
// Plays an audio with HTMLAudioElement object.
NativeAudio.playWeb(....);
// Loops an audio asset infinitely - this only works for assets loaded via preloadComplex.
NativeAudio.loop(....);
// Stops an audio file. Only works for assets loaded via preloadComplex.
NativeAudio.stop(....);
// Stop sound from HTMLAudioElement object.
NativeAudio.stopWeb(....);
// Unloads an audio file from memory.
NativeAudio.unload(....);
// Changes the volume for preloaded complex assets.
NativeAudio.setVolumeForComplexAsset(....);
```

## React

### Declaration

```typescript
const useNativeAudio: () => {
  preloadSimple: (id: string, assetPath: string) => Promise<void>;
  preloadComplex: (
    id: string,
    assetPath: string,
    volume: number,
    voices: number,
    delay: number
  ) => Promise<void>;
  play: (id: string, completeCallback?: () => void) => Promise<void>;
  playWeb: (src: string, isLoop?: boolean, volume?: number) => HTMLAudioElement;
  loop: (id: string) => Promise<void>;
  stop: (id: string) => Promise<void>;
  stopWeb: (sound: HTMLAudioElement) => void;
  unload: (id: string) => Promise<void>;
  setVolumeForComplexAsset: (id: string, volume: number) => Promise<void>;
};
```

### Usages

```typescript
import { useEffect } from "react";
import useNativeAudio from "@awesome-cordova-library/nativeaudio/lib/react";

function App() {
  const {
    playWeb,
    stopWeb,
    preloadSimple,
    play,
    stop,
    loop,
    preloadComplex,
    setVolumeForComplexAsset,
    unload,
  } = useNativeAudio();

  useEffect(() => {
    preloadSimple("my sound", "assets/sounds/mysound.mp3").then(() => {
      play("my sound").then(() => {
        setTimeout(() => stop("my sound"), 4000);
      });
    });
  }, []);

  return <div />;
}
```
