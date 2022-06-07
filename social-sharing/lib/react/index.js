"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin Github}
 * @requires module:cordova-plugin-x-socialsharing
 */
var useSocialSharing = function () {
    var setIPadPopupCoordinates = (0, react_1.useCallback)(function (coords) {
        __1.default.setIPadPopupCoordinates(coords);
    }, []);
    var shareWithOptions = (0, react_1.useCallback)(function (options, successCallback, errorCallback) {
        return new Promise(function (resolve, reject) { return __1.default.shareWithOptions(options, resolve, reject); });
    }, []);
    var share = (0, react_1.useCallback)(function (message, subject, fileOrFileArray, url, iPadCoordinates) {
        return new Promise(function (resolve, reject) {
            return __1.default.share(message, subject, fileOrFileArray, url, iPadCoordinates, resolve, reject);
        });
    }, []);
    var shareWeb = (0, react_1.useCallback)(function (options) {
        return __1.default.shareWeb(options);
    }, []);
    var clipboardWriteText = (0, react_1.useCallback)(function (message) {
        return __1.default.clipboardWriteText(message);
    }, []);
    var shareViaTwitter = (0, react_1.useCallback)(function (message, file, url) {
        return new Promise(function (resolve, reject) { return __1.default.shareViaTwitter(message, file, url, resolve, reject); });
    }, []);
    var shareViaFacebook = (0, react_1.useCallback)(function (message, fileOrFileArray, url) {
        return new Promise(function (resolve, reject) {
            return __1.default.shareViaFacebook(message, fileOrFileArray, url, resolve, reject);
        });
    }, []);
    var shareViaFacebookWithPasteMessageHint = (0, react_1.useCallback)(function (message, fileOrFileArray, url, pasteMessageHint) {
        return new Promise(function (resolve, reject) {
            return __1.default.shareViaFacebookWithPasteMessageHint(message, fileOrFileArray, url, pasteMessageHint, resolve, reject);
        });
    }, []);
    var shareViaWhatsApp = (0, react_1.useCallback)(function (message, fileOrFileArray, url) {
        return new Promise(function (resolve, reject) {
            return __1.default.shareViaWhatsApp(message, fileOrFileArray, url, resolve, reject);
        });
    }, []);
    var shareViaWhatsAppToReceiver = (0, react_1.useCallback)(function (receiver, message, fileOrFileArray, url) {
        return new Promise(function (resolve, reject) {
            return __1.default.shareViaWhatsAppToReceiver(receiver, message, fileOrFileArray, url, resolve, reject);
        });
    }, []);
    var shareViaSMS = (0, react_1.useCallback)(function (optionsOrMessage, phonenumbers) {
        return new Promise(function (resolve, reject) { return __1.default.shareViaSMS(optionsOrMessage, phonenumbers, resolve, reject); });
    }, []);
    var shareViaEmail = (0, react_1.useCallback)(function (message, subject, toArray, ccArray, bccArray, fileOrFileArray) {
        return new Promise(function (resolve, reject) {
            return __1.default.shareViaEmail(message, subject, toArray, ccArray, bccArray, fileOrFileArray, resolve, reject);
        });
    }, []);
    var canShareVia = (0, react_1.useCallback)(function (via, message, subject, fileOrFileArray, url) {
        return new Promise(function (resolve, reject) {
            return __1.default.canShareVia(via, message, subject, fileOrFileArray, url, resolve, reject);
        });
    }, []);
    var canShareViaEmail = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) { return __1.default.canShareViaEmail(resolve, reject); });
    }, []);
    var shareViaInstagram = (0, react_1.useCallback)(function (message, fileOrFileArray, url) {
        return new Promise(function (resolve, reject) {
            return __1.default.shareViaInstagram(message, fileOrFileArray, url, resolve, reject);
        });
    }, []);
    var shareVia = (0, react_1.useCallback)(function (via, message, subject, fileOrFileArray) {
        return new Promise(function (resolve, reject) {
            return __1.default.shareVia(via, message, subject, fileOrFileArray, resolve, reject);
        });
    }, []);
    var saveToPhotoAlbum = (0, react_1.useCallback)(function (fileOrFileArray) {
        return new Promise(function (resolve, reject) { return __1.default.saveToPhotoAlbum(fileOrFileArray, resolve, reject); });
    }, []);
    return {
        setIPadPopupCoordinates: setIPadPopupCoordinates,
        shareWithOptions: shareWithOptions,
        share: share,
        shareWeb: shareWeb,
        clipboardWriteText: clipboardWriteText,
        shareViaTwitter: shareViaTwitter,
        shareViaFacebook: shareViaFacebook,
        shareViaFacebookWithPasteMessageHint: shareViaFacebookWithPasteMessageHint,
        shareViaWhatsApp: shareViaWhatsApp,
        shareViaWhatsAppToReceiver: shareViaWhatsAppToReceiver,
        shareViaSMS: shareViaSMS,
        shareViaEmail: shareViaEmail,
        canShareVia: canShareVia,
        canShareViaEmail: canShareViaEmail,
        shareViaInstagram: shareViaInstagram,
        shareVia: shareVia,
        saveToPhotoAlbum: saveToPhotoAlbum,
    };
};
exports.default = useSocialSharing;
