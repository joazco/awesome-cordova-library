interface Window {
  plugins: {
    NativeAudio: NativeAudio;
  };
}

/**
 * The NativeAudio object provides some functions to customize the iOS and Android NativeAudio.
 */
interface NativeAudio {
  preloadSimple: (id: string, assetPath: string, successCallback: () => void, errorCallback: () => void) => void;
  preloadComplex: (
    id: string,
    assetPath: string,
    volume: number,
    voices: number,
    delay: number,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  play: (id: string, successCallback: () => void, errorCallback: () => void, completeCallback: () => void) => void;
  loop: (id: string, successCallback: () => void, errorCallback: () => void) => void;
  stop: (id: string, successCallback: () => void, errorCallback: () => void) => void;
  unload: (id: string, successCallback: () => void, errorCallback: () => void) => void;
  setVolumeForComplexAsset: (
    id: string,
    volume: number,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
}

declare var NativeAudio: NativeAudio;
