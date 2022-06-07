import { useCallback } from 'react';
import SocialSharing from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/
 * Also, check out {@link https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin Github}
 * @requires module:cordova-plugin-x-socialsharing
 */
const useSocialSharing = () => {
  const setIPadPopupCoordinates = useCallback((coords: string) => {
    SocialSharing.setIPadPopupCoordinates(coords);
  }, []);

  const shareWithOptions = useCallback(
    (options: any, successCallback: () => void, errorCallback: () => void): Promise<void> => {
      return new Promise((resolve, reject) => SocialSharing.shareWithOptions(options, resolve, reject));
    },
    [],
  );

  const share = useCallback(
    (
      message: string,
      subject: string | null,
      fileOrFileArray: string | string[] | null,
      url: string | null,
      iPadCoordinates: any,
    ): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.share(message, subject, fileOrFileArray, url, iPadCoordinates, resolve, reject),
      );
    },
    [],
  );

  const shareWeb = useCallback((options: ShareData) => {
    return SocialSharing.shareWeb(options);
  }, []);

  const clipboardWriteText = useCallback((message: string) => {
    return SocialSharing.clipboardWriteText(message);
  }, []);

  const shareViaTwitter = useCallback((message: string, file: string | null, url: string | null): Promise<void> => {
    return new Promise((resolve, reject) => SocialSharing.shareViaTwitter(message, file, url, resolve, reject));
  }, []);

  const shareViaFacebook = useCallback(
    (message: string, fileOrFileArray: string | string | null, url: string | null): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.shareViaFacebook(message, fileOrFileArray, url, resolve, reject),
      );
    },
    [],
  );

  const shareViaFacebookWithPasteMessageHint = useCallback(
    (
      message: string,
      fileOrFileArray: string | string | null,
      url: string | null,
      pasteMessageHint: string | null,
    ): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.shareViaFacebookWithPasteMessageHint(
          message,
          fileOrFileArray,
          url,
          pasteMessageHint,
          resolve,
          reject,
        ),
      );
    },
    [],
  );

  const shareViaWhatsApp = useCallback(
    (message: string, fileOrFileArray: string | string | null, url: string | null): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.shareViaWhatsApp(message, fileOrFileArray, url, resolve, reject),
      );
    },
    [],
  );

  const shareViaWhatsAppToReceiver = useCallback(
    (
      receiver: string,
      message: string,
      fileOrFileArray: string | string[] | null,
      url: string | null,
    ): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.shareViaWhatsAppToReceiver(receiver, message, fileOrFileArray, url, resolve, reject),
      );
    },
    [],
  );

  const shareViaSMS = useCallback((optionsOrMessage: string | any, phonenumbers: string | null): Promise<void> => {
    return new Promise((resolve, reject) => SocialSharing.shareViaSMS(optionsOrMessage, phonenumbers, resolve, reject));
  }, []);

  const shareViaEmail = useCallback(
    (
      message: string,
      subject: string,
      toArray: string[],
      ccArray: string[],
      bccArray: string[] | null,
      fileOrFileArray: string | string[] | null,
    ): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.shareViaEmail(message, subject, toArray, ccArray, bccArray, fileOrFileArray, resolve, reject),
      );
    },
    [],
  );

  const canShareVia = useCallback(
    (
      via: string,
      message: string,
      subject: string | null,
      fileOrFileArray: string | string[] | null,
      url: string | null,
    ): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.canShareVia(via, message, subject, fileOrFileArray, url, resolve, reject),
      );
    },
    [],
  );

  const canShareViaEmail = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => SocialSharing.canShareViaEmail(resolve, reject));
  }, []);

  const shareViaInstagram = useCallback(
    (message: string, fileOrFileArray: string | string | null, url: string | null): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.shareViaInstagram(message, fileOrFileArray, url, resolve, reject),
      );
    },
    [],
  );

  const shareVia = useCallback(
    (
      via: string,
      message: string,
      subject: string | null,
      fileOrFileArray: string | string[] | null,
    ): Promise<void> => {
      return new Promise((resolve, reject) =>
        SocialSharing.shareVia(via, message, subject, fileOrFileArray, resolve, reject),
      );
    },
    [],
  );

  const saveToPhotoAlbum = useCallback((fileOrFileArray: string | string[]): Promise<void> => {
    return new Promise((resolve, reject) => SocialSharing.saveToPhotoAlbum(fileOrFileArray, resolve, reject));
  }, []);

  return {
    setIPadPopupCoordinates,
    shareWithOptions,
    share,
    shareWeb,
    clipboardWriteText,
    shareViaTwitter,
    shareViaFacebook,
    shareViaFacebookWithPasteMessageHint,
    shareViaWhatsApp,
    shareViaWhatsAppToReceiver,
    shareViaSMS,
    shareViaEmail,
    canShareVia,
    canShareViaEmail,
    shareViaInstagram,
    shareVia,
    saveToPhotoAlbum,
  };
};

export default useSocialSharing;
