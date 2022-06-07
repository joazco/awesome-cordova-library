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
    static preloadSimple(id: string, assetPath: string, successCallback: () => void, errorCallback: () => void): void;
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
    static preloadComplex(id: string, assetPath: string, volume: number, voices: number, delay: number, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * Plays an audio asset.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     * @param completeCallback {() => void)}
     */
    static play(id: string, successCallback: () => void, errorCallback: () => void, completeCallback: () => void): void;
    /**
     *
     * Plays an audio with HTMLAudioElement object.
     *
     * @param src {string}
     * @param isLoop {boolean}
     * @param volume {number}
     * @returns HTMLAudioElement
     */
    static playWeb(src: string, isLoop?: boolean, volume?: number): HTMLAudioElement;
    /**
     *
     * Loops an audio asset infinitely - this only works for assets loaded via preloadComplex.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    static loop(id: string, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * Stops an audio file. Only works for assets loaded via preloadComplex.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    static stop(id: string, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * Stop sound from HTMLAudioElement object.
     *
     * @param sound {HTMLAudioElement}
     */
    static stopWeb(sound: HTMLAudioElement): void;
    /**
     *
     * Unloads an audio file from memory.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    static unload(id: string, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * Changes the volume for preloaded complex assets.
     *
     * @param id {string}
     * @param volume {number}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    static setVolumeForComplexAsset(id: string, volume: number, successCallback: () => void, errorCallback: () => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
