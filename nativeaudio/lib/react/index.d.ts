/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This Cordova / PhoneGap (3.5+) plugin enables concurrency (multi-channel playback), polyphony (multi-voice playback) and minimized latency (via caching) in audio-based applications, by leveraging native audio APIs. Designed for the use in HTML5-based cross-platform games and mobile/hybrid audio applications.
 * Also, check out {@link https://github.com/floatinghotpot/cordova-plugin-nativeaudio Github}
 * @requires module:cordova-plugin-nativeaudio
 */
declare const useNativeAudio: () => {
    preloadSimple: (id: string, assetPath: string) => Promise<void>;
    preloadComplex: (id: string, assetPath: string, volume: number, voices: number, delay: number) => Promise<void>;
    play: (id: string, completeCallback?: () => void) => Promise<void>;
    playWeb: (src: string, isLoop?: boolean, volume?: number) => HTMLAudioElement;
    loop: (id: string) => Promise<void>;
    stop: (id: string) => Promise<void>;
    stopWeb: (sound: HTMLAudioElement) => void;
    unload: (id: string) => Promise<void>;
    setVolumeForComplexAsset: (id: string, volume: number) => Promise<void>;
};
export default useNativeAudio;
