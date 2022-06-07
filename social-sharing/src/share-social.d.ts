interface Window {
  plugins: {
    socialsharing: ShareSocial;
  };
}

/**
 * This plugin allows you to use the native sharing window of your mobile device.
 */
interface ShareSocial {
  setIPadPopupCoordinates: (coords: string) => void;
  shareWithOptions: (options: any, successCallback: () => void, errorCallback: () => void) => void;
  share: (
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    iPadCoordinates: any,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  shareViaTwitter: (
    message: string,
    file: string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  shareViaFacebook: (
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  shareViaFacebookWithPasteMessageHint: (
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    pasteMessageHint: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  shareViaWhatsApp: ShareSocial['shareViaFacebook'];
  shareViaWhatsAppToReceiver: (
    receiver: string,
    message: string,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  shareViaSMS: (
    optionsOrMessage: string | any,
    phonenumbers: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  shareViaEmail: (
    message: string,
    subject: string,
    toArray: string[],
    ccArray: string[],
    bccArray: string[] | null,
    fileOrFileArray: string | string[] | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  canShareVia: (
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  canShareViaEmail: (successCallback: () => void, errorCallback: () => void) => void;
  shareViaInstagram: ShareSocial['shareViaFacebook'];
  shareVia: (
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
  saveToPhotoAlbum: (
    fileOrFileArray: string | string[],
    successCallback: () => void,
    errorCallback: () => void,
  ) => void;
}

declare var socialsharing: ShareSocial;
