"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
var Dialogs = /** @class */ (function () {
    function Dialogs() {
    }
    /**
     * Open a native alert dialog, with a customizable title and button text.
     *
     * @param {String} message              Message to print in the body of the alert
     * @param {Function} completeCallback   The callback that is called when user clicks on a button.
     * @param {String} title                Title of the alert dialog (default: Alert)
     * @param {String} buttonLabel          Label of the close button (default: OK)
     */
    Dialogs.alert = function (message, alertCallback, title, buttonName) {
        var _a;
        if (title === void 0) { title = 'Alert'; }
        if (buttonName === void 0) { buttonName = 'OK'; }
        if ((_a = navigator.notification) === null || _a === void 0 ? void 0 : _a.alert) {
            navigator.notification.alert(message, alertCallback, title, buttonName);
        }
        else {
            window.alert(message);
        }
    };
    /**
     * Open a native confirm dialog, with a customizable title and button text.
     * The result that the user selects is returned to the result callback.
     *
     * @param {String} message              Message to print in the body of the alert
     * @param {Function} resultCallback     The callback that is called when user clicks on a button.
     * @param {String} title                Title of the alert dialog (default: Confirm)
     * @param {Array} buttonLabels          Array of the labels of the buttons (default: ['OK', 'Cancel'])
     */
    Dialogs.confirm = function (message, confirmCallback, title, buttonLabels) {
        var _a;
        if (title === void 0) { title = 'Confirm'; }
        if (buttonLabels === void 0) { buttonLabels = ['OK', 'Cancel']; }
        if ((_a = navigator.notification) === null || _a === void 0 ? void 0 : _a.confirm) {
            navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
        }
        else {
            return window.confirm(message);
        }
    };
    /**
     * Open a native prompt dialog, with a customizable title and button text.
     * The following results are returned to the result callback:
     *  buttonIndex     Index number of the button selected.
     *  input1          The text entered in the prompt dialog box.
     *
     * @param {String} message              Dialog message to display (default: "Prompt message")
     * @param {Function} resultCallback     The callback that is called when user clicks on a button.
     * @param {String} title                Title of the dialog (default: "Prompt")
     * @param {Array} buttonLabels          Array of strings for the button labels (default: ["OK","Cancel"])
     * @param {String} defaultText          Textbox input value (default: empty string)
     */
    Dialogs.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
        var _a;
        if (title === void 0) { title = 'Prompt'; }
        if (buttonLabels === void 0) { buttonLabels = ['OK', 'Cancel']; }
        if ((_a = navigator.notification) === null || _a === void 0 ? void 0 : _a.prompt) {
            navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
        }
        else {
            return window.prompt(message, defaultText);
        }
    };
    /**
     * Causes the device to beep.
     * On Android, the default notification ringtone is played "count" times.
     *
     * @param {Integer} count       The number of beeps. (default: 1)
     */
    Dialogs.beep = function (times) {
        var _a;
        if (times === void 0) { times = 1; }
        if ((_a = navigator.notification) === null || _a === void 0 ? void 0 : _a.beep) {
            navigator.notification.beep(times);
        }
        else {
            console.warn('Dialogs.beep is uninstalled or incompatible with current platform');
        }
    };
    return Dialogs;
}());
exports.default = Dialogs;
