"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localstorage_1 = require("@awesome-cordova-library/localstorage");
var dialogs_1 = require("@awesome-cordova-library/dialogs");
var device_1 = require("@awesome-cordova-library/device");
var inappbrowser_1 = require("@awesome-cordova-library/inappbrowser");
var types_1 = require("./types");
var translations_1 = require("./translations");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * A plugin to provide rate this app functionality into your cordova application
 * @requires module:@awesome-cordova-library/localstorage
 * @requires module:@awesome-cordova-library/dialogs
 * @requires module:@awesome-cordova-library/device
 * @requires module:@awesome-cordova-library/inappbrowser
 *
 */
var RateDialog = /** @class */ (function () {
    function RateDialog() {
    }
    /**
     * Set preferences for use RateDialog
     * @param options {DialogRateOption}
     */
    RateDialog.setPreference = function (options) {
        var platform = device_1.default.getPlatform();
        if (platform !== 'Android' && platform !== 'iOS') {
            RateDialog.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        var data = localstorage_1.default.getItem(types_1.dialogRateTableName);
        if (!data) {
            data = {
                nbUseApp: 0,
                userRatedOrRefused: false,
                options: options,
            };
        }
        else {
            data.options = options;
        }
        localstorage_1.default.setItem(types_1.dialogRateTableName, data);
    };
    /**
     * Show dialog rating if user open app usesUntilPrompt times. You can force open dialog with force = true. If user had select no or rate now dialog won't open again. If user selected later usesUntilPrompt is reset at 0.
     * @param force {boolean}
     */
    RateDialog.promptForRating = function (force) {
        if (force === void 0) { force = false; }
        var platform = device_1.default.getPlatform();
        if (platform !== 'Android' && platform !== 'iOS') {
            RateDialog.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        var data = localstorage_1.default.getItem(types_1.dialogRateTableName);
        if (!data) {
            console.warn('RateDialog:: use setPreference before promptForRatng');
            return;
        }
        if (!force && data.userRatedOrRefused) {
            return;
        }
        var setUserRatedOrRefused = function () {
            data.userRatedOrRefused = true;
            localstorage_1.default.setItem(types_1.dialogRateTableName, data);
        };
        var openRated = function () {
            if (platform === 'iOS') {
                inappbrowser_1.default.open("itms-apps://itunes.apple.com/app/viewContentsUserReviews/id".concat(data.options.storeAppURL.ios, "?action=write-review"), '_system');
            }
            else {
                inappbrowser_1.default.open("market://details?id=".concat(data.options.storeAppURL.android, "&showAllReviews=true"), '_system');
            }
        };
        var setUserSelectRemindLater = function () {
            data.nbUseApp = 0;
            localstorage_1.default.setItem(types_1.dialogRateTableName, data);
        };
        var openRateDialog = function () {
            var translation = data.options.forceText ? data.options.forceText : translations_1.default[data.options.locale];
            dialogs_1.default.confirm(translation.rate_dialog_content, function (buttonIndex) {
                switch (buttonIndex) {
                    case 1:
                        openRated();
                        setUserRatedOrRefused();
                        break;
                    case 2:
                        setUserSelectRemindLater();
                        break;
                    case 3:
                        setUserRatedOrRefused();
                        break;
                }
            }, translation.rate_dialog_modal_title.replace('{appName}', data.options.appName), [
                translation.rate_dialog_modal_btn_ratenow,
                translation.rate_dialog_modal_btn_maybe_later,
                translation.rate_dialog_modal_btn_no,
            ]);
        };
        if (force) {
            openRateDialog();
            return;
        }
        else if (data.nbUseApp === data.options.usesUntilPrompt) {
            openRateDialog();
        }
        else {
            data.nbUseApp += 1;
            localstorage_1.default.setItem(types_1.dialogRateTableName, data);
        }
    };
    /**
     * Reset usesUntilPrompt at 0 and dialog will be open again after user open app usesUntilPrompt times
     */
    RateDialog.resetUserRatedOrRefused = function () {
        var data = localstorage_1.default.getItem(types_1.dialogRateTableName);
        if (!data) {
            console.warn('RateDialog:: use setPreference before promptForRatng');
            return;
        }
        data.nbUseApp = 0;
        data.userRatedOrRefused = false;
        localstorage_1.default.setItem(types_1.dialogRateTableName, data);
    };
    /**
     * Get information if user select no or rate now
     * @returns {bool|undefined}
     */
    RateDialog.getUserRatedOrRefused = function () {
        var data = localstorage_1.default.getItem(types_1.dialogRateTableName);
        if (!data) {
            console.warn('RateDialog:: use setPreference before promptForRatng');
            return;
        }
        return data.userRatedOrRefused;
    };
    /**
     * Get number of times user open app since the first call promptForRating
     * @returns {number|undefined}
     */
    RateDialog.getNbUseApp = function () {
        var data = localstorage_1.default.getItem(types_1.dialogRateTableName);
        if (!data) {
            console.warn('RateDialog:: use setPreference before promptForRatng');
            return;
        }
        return data.nbUseApp;
    };
    /**
     * Override langage
     * @param locale {DialogRateLanguagesAccepted}
     * @returns
     */
    RateDialog.setLocale = function (locale) {
        var data = localstorage_1.default.getItem(types_1.dialogRateTableName);
        if (!data) {
            console.warn('RateDialog:: use setPreference before promptForRatng');
            return;
        }
        data.options.locale = locale;
        localstorage_1.default.setItem(types_1.dialogRateTableName, data);
    };
    RateDialog.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('RateDialog is uninstalled or incompatible with current platform');
    };
    return RateDialog;
}());
exports.default = RateDialog;
