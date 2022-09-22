"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
var useDialogs = function () {
    var alert = (0, react_1.useCallback)(function (message, alertCallback, title, buttonName) {
        return __1.default.alert(message, alertCallback, title, buttonName);
    }, []);
    var confirm = (0, react_1.useCallback)(function (message, confirmCallback, title, buttonLabels) {
        return __1.default.confirm(message, confirmCallback, title, buttonLabels);
    }, []);
    var prompt = (0, react_1.useCallback)(function (message, promptCallback, title, buttonLabels, defaultText) {
        __1.default.prompt(message, promptCallback, title, buttonLabels, defaultText);
    }, []);
    var beep = (0, react_1.useCallback)(function (times) {
        __1.default.beep(times);
    }, []);
    return { alert: alert, confirm: confirm, prompt: prompt, beep: beep };
};
exports.default = useDialogs;
