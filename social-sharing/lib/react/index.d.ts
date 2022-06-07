/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin Github}
 * @requires module:cordova-plugin-x-socialsharing
 */
declare const useSocialSharing: () => {
    setIPadPopupCoordinates: (coords: string) => void;
    shareWithOptions: (options: any, successCallback: () => void, errorCallback: () => void) => Promise<void>;
    share: (message: string, subject: string | null, fileOrFileArray: string | string[] | null, url: string | null, iPadCoordinates: any) => Promise<void>;
    shareWeb: (options: ShareData) => Promise<void>;
    clipboardWriteText: (message: string) => Promise<void>;
    shareViaTwitter: (message: string, file: string | null, url: string | null) => Promise<void>;
    shareViaFacebook: (message: string, fileOrFileArray: string | string | null, url: string | null) => Promise<void>;
    shareViaFacebookWithPasteMessageHint: (message: string, fileOrFileArray: string | string | null, url: string | null, pasteMessageHint: string | null) => Promise<void>;
    shareViaWhatsApp: (message: string, fileOrFileArray: string | string | null, url: string | null) => Promise<void>;
    shareViaWhatsAppToReceiver: (receiver: string, message: string, fileOrFileArray: string | string[] | null, url: string | null) => Promise<void>;
    shareViaSMS: (optionsOrMessage: string | any, phonenumbers: string | null) => Promise<void>;
    shareViaEmail: (message: string, subject: string, toArray: string[], ccArray: string[], bccArray: string[] | null, fileOrFileArray: string | string[] | null) => Promise<void>;
    canShareVia: (via: string, message: string, subject: string | null, fileOrFileArray: string | string[] | null, url: string | null) => Promise<void>;
    canShareViaEmail: () => Promise<void>;
    shareViaInstagram: (message: string, fileOrFileArray: string | string | null, url: string | null) => Promise<void>;
    shareVia: (via: string, message: string, subject: string | null, fileOrFileArray: string | string[] | null) => Promise<void>;
    saveToPhotoAlbum: (fileOrFileArray: string | string[]) => Promise<void>;
};
export default useSocialSharing;
