"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This Cordova / PhoneGap (3.5+) plugin enables concurrency (multi-channel playback), polyphony (multi-voice playback) and minimized latency (via caching) in audio-based applications, by leveraging native audio APIs. Designed for the use in HTML5-based cross-platform games and mobile/hybrid audio applications.
 * Also, check out {@link https://github.com/floatinghotpot/cordova-plugin-nativeaudio Github}
 * @requires module:cordova-plugin-nativeaudio
 */
var useNativeAudio = function () {
    var preloadSimple = (0, react_1.useCallback)(function (id, assetPath) {
        return new Promise(function (resolve, reject) {
            __1.default.preloadSimple(id, assetPath, resolve, reject);
        });
    }, []);
    var preloadComplex = (0, react_1.useCallback)(function (id, assetPath, volume, voices, delay) {
        return new Promise(function (resolve, reject) {
            __1.default.preloadComplex(id, assetPath, volume, voices, delay, resolve, reject);
        });
    }, []);
    var play = (0, react_1.useCallback)(function (id, completeCallback) {
        if (completeCallback === void 0) { completeCallback = function () {
            console.warn('Sound played complete');
        }; }
        return new Promise(function (resolve, reject) {
            __1.default.play(id, resolve, reject, completeCallback);
        });
    }, []);
    var playWeb = (0, react_1.useCallback)(function (src, isLoop, volume) {
        if (isLoop === void 0) { isLoop = false; }
        if (volume === void 0) { volume = 1; }
        return __1.default.playWeb(src, isLoop, volume);
    }, []);
    var loop = (0, react_1.useCallback)(function (id) {
        return new Promise(function (resolve, reject) {
            __1.default.loop(id, resolve, reject);
        });
    }, []);
    var stop = (0, react_1.useCallback)(function (id) {
        return new Promise(function (resolve, reject) {
            __1.default.stop(id, resolve, reject);
        });
    }, []);
    var stopWeb = (0, react_1.useCallback)(function (sound) {
        __1.default.stopWeb(sound);
    }, []);
    var unload = (0, react_1.useCallback)(function (id) {
        return new Promise(function (resolve, reject) {
            __1.default.unload(id, resolve, reject);
        });
    }, []);
    var setVolumeForComplexAsset = (0, react_1.useCallback)(function (id, volume) {
        return new Promise(function (resolve, reject) {
            __1.default.setVolumeForComplexAsset(id, volume, resolve, reject);
        });
    }, []);
    return {
        preloadSimple: preloadSimple,
        preloadComplex: preloadComplex,
        play: play,
        playWeb: playWeb,
        loop: loop,
        stop: stop,
        stopWeb: stopWeb,
        unload: unload,
        setVolumeForComplexAsset: setVolumeForComplexAsset,
    };
};
exports.default = useNativeAudio;
