/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This Cordova / PhoneGap (3.5+) plugin enables concurrency (multi-channel playback), polyphony (multi-voice playback) and minimized latency (via caching) in audio-based applications, by leveraging native audio APIs. Designed for the use in HTML5-based cross-platform games and mobile/hybrid audio applications.
 * Also, check out {@link https://github.com/floatinghotpot/cordova-plugin-nativeaudio Github}
 * @requires module:cordova-plugin-nativeaudio
 */
export default class NativeAudio {
  /**
   *
   * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
   *
   * @param id {string}
   * @param assetPath {string}
   * @param successCallback {() => void)}
   * @param errorCallback {() => void)}
   */
  static preloadSimple(id: string, assetPath: string, successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.NativeAudio) {
      window.plugins.NativeAudio.preloadSimple(id, assetPath, successCallback, errorCallback);
    } else {
      NativeAudio.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
   *
   * @param id {string}
   * @param assetPath {string}
   * @param volume {number}
   * @param voices {number}
   * @param delay {number}
   * @param successCallback {() => void)}
   * @param errorCallback {() => void)}
   */
  static preloadComplex(
    id: string,
    assetPath: string,
    volume: number,
    voices: number,
    delay: number,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.NativeAudio) {
      window.plugins.NativeAudio.preloadComplex(id, assetPath, volume, voices, delay, successCallback, errorCallback);
    } else {
      NativeAudio.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * Plays an audio asset.
   *
   * @param id {string}
   * @param successCallback {() => void)}
   * @param errorCallback {() => void)}
   * @param completeCallback {() => void)}
   */
  static play(id: string, successCallback: () => void, errorCallback: () => void, completeCallback: () => void) {
    if (window.plugins?.NativeAudio) {
      window.plugins.NativeAudio.play(id, successCallback, errorCallback, completeCallback);
    } else {
      NativeAudio.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * Plays an audio with HTMLAudioElement object.
   *
   * @param src {string}
   * @param isLoop {boolean}
   * @param volume {number}
   * @returns HTMLAudioElement
   */
  static playWeb(src: string, isLoop: boolean = false, volume: number = 1): HTMLAudioElement {
    const sound = new Audio();
    sound.src = src;
    sound.loop = isLoop;
    sound.volume = volume;
    sound.load();
    sound.play();
    return sound;
  }

  /**
   *
   * Loops an audio asset infinitely - this only works for assets loaded via preloadComplex.
   *
   * @param id {string}
   * @param successCallback {() => void)}
   * @param errorCallback {() => void)}
   */
  static loop(id: string, successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.NativeAudio) {
      window.plugins.NativeAudio.loop(id, successCallback, errorCallback);
    } else {
      NativeAudio.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * Stops an audio file. Only works for assets loaded via preloadComplex.
   *
   * @param id {string}
   * @param successCallback {() => void)}
   * @param errorCallback {() => void)}
   */
  static stop(id: string, successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.NativeAudio) {
      window.plugins.NativeAudio.stop(id, successCallback, errorCallback);
    } else {
      NativeAudio.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * Stop sound from HTMLAudioElement object.
   *
   * @param sound {HTMLAudioElement}
   */
  static stopWeb(sound: HTMLAudioElement) {
    sound.pause();
  }

  /**
   *
   * Unloads an audio file from memory.
   *
   * @param id {string}
   * @param successCallback {() => void)}
   * @param errorCallback {() => void)}
   */
  static unload(id: string, successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.NativeAudio) {
      window.plugins.NativeAudio.unload(id, successCallback, errorCallback);
    } else {
      NativeAudio.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * Changes the volume for preloaded complex assets.
   *
   * @param id {string}
   * @param volume {number}
   * @param successCallback {() => void)}
   * @param errorCallback {() => void)}
   */
  static setVolumeForComplexAsset(id: string, volume: number, successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.NativeAudio) {
      window.plugins.NativeAudio.setVolumeForComplexAsset(id, volume, successCallback, errorCallback);
    } else {
      NativeAudio.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('NativeAudio is uninstalled or incompatible with current platform');
  }
}
