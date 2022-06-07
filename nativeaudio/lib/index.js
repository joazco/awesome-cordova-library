"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This Cordova / PhoneGap (3.5+) plugin enables concurrency (multi-channel playback), polyphony (multi-voice playback) and minimized latency (via caching) in audio-based applications, by leveraging native audio APIs. Designed for the use in HTML5-based cross-platform games and mobile/hybrid audio applications.
 * Also, check out {@link https://github.com/floatinghotpot/cordova-plugin-nativeaudio Github}
 * @requires module:cordova-plugin-nativeaudio
 */
var NativeAudio = /** @class */ (function () {
    function NativeAudio() {
    }
    /**
     *
     * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
     *
     * @param id {string}
     * @param assetPath {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    NativeAudio.preloadSimple = function (id, assetPath, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.NativeAudio) {
            window.plugins.NativeAudio.preloadSimple(id, assetPath, successCallback, errorCallback);
        }
        else {
            NativeAudio.warnPluginIsUnInstallOrIncompatible();
        }
    };
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
    NativeAudio.preloadComplex = function (id, assetPath, volume, voices, delay, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.NativeAudio) {
            window.plugins.NativeAudio.preloadComplex(id, assetPath, volume, voices, delay, successCallback, errorCallback);
        }
        else {
            NativeAudio.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * Plays an audio asset.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     * @param completeCallback {() => void)}
     */
    NativeAudio.play = function (id, successCallback, errorCallback, completeCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.NativeAudio) {
            window.plugins.NativeAudio.play(id, successCallback, errorCallback, completeCallback);
        }
        else {
            NativeAudio.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * Plays an audio with HTMLAudioElement object.
     *
     * @param src {string}
     * @param isLoop {boolean}
     * @param volume {number}
     * @returns HTMLAudioElement
     */
    NativeAudio.playWeb = function (src, isLoop, volume) {
        if (isLoop === void 0) { isLoop = false; }
        if (volume === void 0) { volume = 1; }
        var sound = new Audio();
        sound.src = src;
        sound.loop = isLoop;
        sound.volume = volume;
        sound.load();
        sound.play();
        return sound;
    };
    /**
     *
     * Loops an audio asset infinitely - this only works for assets loaded via preloadComplex.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    NativeAudio.loop = function (id, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.NativeAudio) {
            window.plugins.NativeAudio.loop(id, successCallback, errorCallback);
        }
        else {
            NativeAudio.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * Stops an audio file. Only works for assets loaded via preloadComplex.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    NativeAudio.stop = function (id, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.NativeAudio) {
            window.plugins.NativeAudio.stop(id, successCallback, errorCallback);
        }
        else {
            NativeAudio.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * Stop sound from HTMLAudioElement object.
     *
     * @param sound {HTMLAudioElement}
     */
    NativeAudio.stopWeb = function (sound) {
        sound.pause();
    };
    /**
     *
     * Unloads an audio file from memory.
     *
     * @param id {string}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    NativeAudio.unload = function (id, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.NativeAudio) {
            window.plugins.NativeAudio.unload(id, successCallback, errorCallback);
        }
        else {
            NativeAudio.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * Changes the volume for preloaded complex assets.
     *
     * @param id {string}
     * @param volume {number}
     * @param successCallback {() => void)}
     * @param errorCallback {() => void)}
     */
    NativeAudio.setVolumeForComplexAsset = function (id, volume, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.NativeAudio) {
            window.plugins.NativeAudio.setVolumeForComplexAsset(id, volume, successCallback, errorCallback);
        }
        else {
            NativeAudio.warnPluginIsUnInstallOrIncompatible();
        }
    };
    NativeAudio.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('NativeAudio is uninstalled or incompatible with current platform');
    };
    return NativeAudio;
}());
exports.default = NativeAudio;
