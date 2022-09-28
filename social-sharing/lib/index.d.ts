/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin Github}
 * @requires module:cordova-plugin-x-socialsharing
 */
export default class SocialSharing {
    /**
     * when using the WkWebView polyfill the iPadPopupCoordinates overrides doesn't work so you can call the alternative setIPadPopupCoordinates method to define the popup position just before you call the share method.
     * @param coords
     */
    static setIPadPopupCoordinates(coords: string): void;
    /**
     * It's recommended to use shareWithOptions as it's the most feature rich way to share stuff cross-platform.
     * @param options
     * @param successCallback
     * @param errorCallback
     */
    static shareWithOptions(options: any, successCallback: () => void, errorCallback: () => void): void;
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
    static share(message: string, subject: string | null, fileOrFileArray: string | string[] | null, url: string | null, iPadCoordinates: any, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param options
     * @returns
     */
    static shareWeb(options: ShareData): Promise<void>;
    /**
     * Write text on clipboard
     * @param message
     * @returns
     */
    static clipboardWriteText(message: string): Promise<void>;
    /**
     *
     * @param message
     * @param file
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    static shareViaTwitter(message: string, file: string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    static shareViaFacebook(message: string, fileOrFileArray: string | string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param pasteMessageHint
     * @param successCallback
     * @param errorCallback
     */
    static shareViaFacebookWithPasteMessageHint(message: string, fileOrFileArray: string | string | null, url: string | null, pasteMessageHint: string | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    static shareViaWhatsApp(message: string, fileOrFileArray: string | string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param receiver
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    static shareViaWhatsAppToReceiver(receiver: string, message: string, fileOrFileArray: string | string[] | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param optionsOrMessage
     * @param phonenumbers
     * @param successCallback
     * @param errorCallback
     */
    static shareViaSMS(optionsOrMessage: string | any, phonenumbers: string | null, successCallback: () => void, errorCallback: () => void): void;
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
    static shareViaEmail(message: string, subject: string, toArray: string[], ccArray: string[], bccArray: string[] | null, fileOrFileArray: string | string[] | null, successCallback: () => void, errorCallback: () => void): void;
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
    static canShareVia(via: string, message: string, subject: string | null, fileOrFileArray: string | string[] | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param successCallback
     * @param errorCallback
     */
    static canShareViaEmail(successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param message
     * @param fileOrFileArray
     * @param url
     * @param successCallback
     * @param errorCallback
     */
    static shareViaInstagram(message: string, fileOrFileArray: string | string | null, url: string | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param via
     * @param message
     * @param subject
     * @param fileOrFileArray
     * @param successCallback
     * @param errorCallback
     */
    static shareVia(via: string, message: string, subject: string | null, fileOrFileArray: string | string[] | null, successCallback: () => void, errorCallback: () => void): void;
    /**
     *
     * @param fileOrFileArray
     * @param successCallback
     * @param errorCallback
     */
    static saveToPhotoAlbum(fileOrFileArray: string | string[], successCallback: () => void, errorCallback: () => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
