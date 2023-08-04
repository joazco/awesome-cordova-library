"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to enables adding contextual haptic feedback in response to specific user actions.
 * Also, check out {@link https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine Github}
 * @requires cordova-plugin-taptic-engine
 */
var useTapicEngineIos = function () {
    var selection = (0, react_1.useCallback)(function () { return __1.default.selection(); }, []);
    var notification = (0, react_1.useCallback)(function (type) { return __1.default.notification(type); }, []);
    var impact = (0, react_1.useCallback)(function (style) { return __1.default.impact(style); }, []);
    var gestureSelectionStart = (0, react_1.useCallback)(function () { return __1.default.gestureSelectionStart(); }, []);
    var gestureSelectionChanged = (0, react_1.useCallback)(function () { return __1.default.gestureSelectionChanged(); }, []);
    var gestureSelectionEnd = (0, react_1.useCallback)(function () { return __1.default.gestureSelectionEnd(); }, []);
    var weakBoom = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) {
            __1.default.weakBoom(resolve, reject);
        });
    }, []);
    var strongBoom = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) {
            __1.default.strongBoom(resolve, reject);
        });
    }, []);
    var burst = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) {
            __1.default.burst(resolve, reject);
        });
    }, []);
    return {
        selection: selection,
        notification: notification,
        impact: impact,
        gestureSelectionStart: gestureSelectionStart,
        gestureSelectionChanged: gestureSelectionChanged,
        gestureSelectionEnd: gestureSelectionEnd,
        weakBoom: weakBoom,
        strongBoom: strongBoom,
        burst: burst,
    };
};
exports.default = useTapicEngineIos;
