import { useCallback } from 'react';
import NativeAudio from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This Cordova / PhoneGap (3.5+) plugin enables concurrency (multi-channel playback), polyphony (multi-voice playback) and minimized latency (via caching) in audio-based applications, by leveraging native audio APIs. Designed for the use in HTML5-based cross-platform games and mobile/hybrid audio applications.
 * Also, check out {@link https://github.com/floatinghotpot/cordova-plugin-nativeaudio Github}
 * @requires module:cordova-plugin-nativeaudio
 */
const useNativeAudio = () => {
  const preloadSimple = useCallback(
    (id: string, assetPath: string): Promise<void> =>
      new Promise((resolve, reject) => {
        NativeAudio.preloadSimple(id, assetPath, resolve, reject);
      }),
    [],
  );

  const preloadComplex = useCallback(
    (id: string, assetPath: string, volume: number, voices: number, delay: number): Promise<void> =>
      new Promise((resolve, reject) => {
        NativeAudio.preloadComplex(id, assetPath, volume, voices, delay, resolve, reject);
      }),
    [],
  );

  const play = useCallback(
    (
      id: string,
      completeCallback: () => void = () => {
        console.warn('Sound played complete');
      },
    ): Promise<void> =>
      new Promise((resolve, reject) => {
        NativeAudio.play(id, resolve, reject, completeCallback);
      }),
    [],
  );

  const playWeb = useCallback((src: string, isLoop: boolean = false, volume: number = 1): HTMLAudioElement => {
    return NativeAudio.playWeb(src, isLoop, volume);
  }, []);

  const loop = useCallback(
    (id: string): Promise<void> =>
      new Promise((resolve, reject) => {
        NativeAudio.loop(id, resolve, reject);
      }),
    [],
  );

  const stop = useCallback(
    (id: string): Promise<void> =>
      new Promise((resolve, reject) => {
        NativeAudio.stop(id, resolve, reject);
      }),
    [],
  );

  const stopWeb = useCallback((sound: HTMLAudioElement) => {
    NativeAudio.stopWeb(sound);
  }, []);

  const unload = useCallback(
    (id: string): Promise<void> =>
      new Promise((resolve, reject) => {
        NativeAudio.unload(id, resolve, reject);
      }),
    [],
  );

  const setVolumeForComplexAsset = useCallback(
    (id: string, volume: number): Promise<void> =>
      new Promise((resolve, reject) => {
        NativeAudio.setVolumeForComplexAsset(id, volume, resolve, reject);
      }),
    [],
  );

  return {
    preloadSimple,
    preloadComplex,
    play,
    playWeb,
    loop,
    stop,
    stopWeb,
    unload,
    setVolumeForComplexAsset,
  };
};

export default useNativeAudio;
