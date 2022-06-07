/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin Github}
 * @requires module:cordova-plugin-x-socialsharing
 */
export default class SocialSharing {
    static setIPadPopupCoordinates(coords: string): void;
    static shareWithOptions(options: any, successCallback: () => void, errorCallback: () => void): void;
    static share(message: string, subject: string | null, fileOrFileArray: string | string[] | null, url: string | null, iPadCoordinates: any, successCallback: () => void, errorCallback: () => void): void;
    static shareWeb(options: ShareData): Promise<void>;
    static clipboardWriteText(message: string): Promise<void>;
    static shareViaTwitter(message: string, file: string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    static shareViaFacebook(message: string, fileOrFileArray: string | string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    static shareViaFacebookWithPasteMessageHint(message: string, fileOrFileArray: string | string | null, url: string | null, pasteMessageHint: string | null, successCallback: () => void, errorCallback: () => void): void;
    static shareViaWhatsApp(message: string, fileOrFileArray: string | string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    static shareViaWhatsAppToReceiver(receiver: string, message: string, fileOrFileArray: string | string[] | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    static shareViaSMS(optionsOrMessage: string | any, phonenumbers: string | null, successCallback: () => void, errorCallback: () => void): void;
    static shareViaEmail(message: string, subject: string, toArray: string[], ccArray: string[], bccArray: string[] | null, fileOrFileArray: string | string[] | null, successCallback: () => void, errorCallback: () => void): void;
    static canShareVia(via: string, message: string, subject: string | null, fileOrFileArray: string | string[] | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    static canShareViaEmail(successCallback: () => void, errorCallback: () => void): void;
    static shareViaInstagram(message: string, fileOrFileArray: string | string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    static shareVia(via: string, message: string, subject: string | null, fileOrFileArray: string | string[] | null, successCallback: () => void, errorCallback: () => void): void;
    static saveToPhotoAlbum(fileOrFileArray: string | string[], successCallback: () => void, errorCallback: () => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
