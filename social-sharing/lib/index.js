"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin Github}
 * @requires module:cordova-plugin-x-socialsharing
 */
var SocialSharing = /** @class */ (function () {
    function SocialSharing() {
    }
    /**
     * when using the WkWebView polyfill the iPadPopupCoordinates overrides doesn't work so you can call the alternative setIPadPopupCoordinates method to define the popup position just before you call the share method.
     * @param coords
     */
    SocialSharing.setIPadPopupCoordinates = function (coords) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.setIPadPopupCoordinates(coords);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     * It's recommended to use shareWithOptions as it's the most feature rich way to share stuff cross-platform.
     * @param options
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareWithOptions = function (options, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareWithOptions(options, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param message
     * @param subject
     * @param fileOrFileArray
     * @param url
     * @param iPadCoordinates
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.share = function (message, subject, fileOrFileArray, url, iPadCoordinates, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.share(message, subject, fileOrFileArray, url, iPadCoordinates, successCallback, errorCallback);
        }
        else {
            SocialSharing.shareWeb({
                text: message,
                url: url || undefined,
                title: subject || undefined,
            })
                .then(successCallback)
                .catch(errorCallback);
        }
    };
    /**
     *
     * @param options
     * @returns
     */
    SocialSharing.shareWeb = function (options) {
        if (typeof navigator.share !== 'undefined') {
            return navigator.share(options);
        }
        else {
            return SocialSharing.clipboardWriteText(options.text || 'Message empty');
        }
    };
    /**
     * Write text on clipboard
     * @param message
     * @returns
     */
    SocialSharing.clipboardWriteText = function (message) {
        return navigator.clipboard.writeText(message);
    };
    /**
     *
     * @param message
     * @param file
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaTwitter = function (message, file, url, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaTwitter(message, file, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaFacebook = function (message, fileOrFileArray, url, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaFacebook(message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param pasteMessageHint
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaFacebookWithPasteMessageHint = function (message, fileOrFileArray, url, pasteMessageHint, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, fileOrFileArray, url, pasteMessageHint, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaWhatsApp = function (message, fileOrFileArray, url, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaWhatsApp(message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param receiver
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaWhatsAppToReceiver = function (receiver, message, fileOrFileArray, url, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaWhatsAppToReceiver(receiver, message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param optionsOrMessage
     * @param phonenumbers
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaSMS = function (optionsOrMessage, phonenumbers, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaSMS(optionsOrMessage, phonenumbers, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param message
     * @param subject
     * @param toArray
     * @param ccArray
     * @param bccArray
     * @param fileOrFileArray
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaEmail = function (message, subject, toArray, ccArray, bccArray, fileOrFileArray, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaEmail(message, subject, toArray, ccArray, bccArray, fileOrFileArray, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param via
     * @param message
     * @param subject
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.canShareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.canShareVia(via, message, subject, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.canShareViaEmail = function (successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.canShareViaEmail(successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareViaInstagram = function (message, fileOrFileArray, url, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareViaInstagram(message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param via
     * @param message
     * @param subject
     * @param fileOrFileArray
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.shareVia = function (via, message, subject, fileOrFileArray, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.shareVia(via, message, subject, fileOrFileArray, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    /**
     *
     * @param fileOrFileArray
     * @param successCallback
     * @param errorCallback
     */
    SocialSharing.saveToPhotoAlbum = function (fileOrFileArray, successCallback, errorCallback) {
        var _a;
        if ((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.socialsharing) {
            window.plugins.socialsharing.saveToPhotoAlbum(fileOrFileArray, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('ShareSocial is uninstalled or incompatible with current platform');
    };
    return SocialSharing;
}());
exports.default = SocialSharing;
