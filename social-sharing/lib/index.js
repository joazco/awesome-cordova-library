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
    SocialSharing.setIPadPopupCoordinates = function (coords) {
        if (typeof window.plugins !== 'undefined' && typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.setIPadPopupCoordinates(coords);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareWithOptions = function (options, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareWithOptions(options, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
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
    SocialSharing.shareWeb = function (options) {
        if (typeof navigator.share !== 'undefined') {
            return navigator.share(options);
        }
        else {
            return SocialSharing.clipboardWriteText(options.text || 'Message empty');
        }
    };
    SocialSharing.clipboardWriteText = function (message) {
        return navigator.clipboard.writeText(message);
    };
    SocialSharing.shareViaTwitter = function (message, file, url, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaTwitter(message, file, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareViaFacebook = function (message, fileOrFileArray, url, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaFacebook(message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareViaFacebookWithPasteMessageHint = function (message, fileOrFileArray, url, pasteMessageHint, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, fileOrFileArray, url, pasteMessageHint, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareViaWhatsApp = function (message, fileOrFileArray, url, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaWhatsApp(message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareViaWhatsAppToReceiver = function (receiver, message, fileOrFileArray, url, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaWhatsAppToReceiver(receiver, message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareViaSMS = function (optionsOrMessage, phonenumbers, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaSMS(optionsOrMessage, phonenumbers, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareViaEmail = function (message, subject, toArray, ccArray, bccArray, fileOrFileArray, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaEmail(message, subject, toArray, ccArray, bccArray, fileOrFileArray, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.canShareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.canShareVia(via, message, subject, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.canShareViaEmail = function (successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.canShareViaEmail(successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareViaInstagram = function (message, fileOrFileArray, url, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareViaInstagram(message, fileOrFileArray, url, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.shareVia = function (via, message, subject, fileOrFileArray, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
            window.plugins.socialsharing.shareVia(via, message, subject, fileOrFileArray, successCallback, errorCallback);
        }
        else {
            SocialSharing.warnPluginIsUnInstallOrIncompatible();
        }
    };
    SocialSharing.saveToPhotoAlbum = function (fileOrFileArray, successCallback, errorCallback) {
        if (typeof window.plugins.socialsharing !== 'undefined') {
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
