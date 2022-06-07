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
  static setIPadPopupCoordinates(coords: string) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.setIPadPopupCoordinates(coords);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * It's recommended to use shareWithOptions as it's the most feature rich way to share stuff cross-platform.
   * @param options
   * @param successCallback
   * @param errorCallback
   */
  static shareWithOptions(options: any, successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareWithOptions(options, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

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
  static share(
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    iPadCoordinates: any,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.share(
        message,
        subject,
        fileOrFileArray,
        url,
        iPadCoordinates,
        successCallback,
        errorCallback,
      );
    } else {
      SocialSharing.shareWeb({
        text: message,
        url: url || undefined,
        title: subject || undefined,
      })
        .then(successCallback)
        .catch(errorCallback);
    }
  }

  /**
   *
   * @param options
   * @returns
   */
  static shareWeb(options: ShareData) {
    if (typeof navigator.share !== 'undefined') {
      return navigator.share(options);
    } else {
      return SocialSharing.clipboardWriteText(options.text || 'Message empty');
    }
  }

  /**
   * Write text on clipboard
   * @param message
   * @returns
   */
  static clipboardWriteText(message: string) {
    return navigator.clipboard.writeText(message);
  }

  /**
   *
   * @param message
   * @param file
   * @param url
   * @param successCallback
   * @param errorCallback
   */
  static shareViaTwitter(
    message: string,
    file: string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaTwitter(message, file, url, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param message
   * @param fileOrFileArray
   * @param url
   * @param successCallback
   * @param errorCallback
   */
  static shareViaFacebook(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaFacebook(message, fileOrFileArray, url, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param message
   * @param fileOrFileArray
   * @param url
   * @param pasteMessageHint
   * @param successCallback
   * @param errorCallback
   */
  static shareViaFacebookWithPasteMessageHint(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    pasteMessageHint: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(
        message,
        fileOrFileArray,
        url,
        pasteMessageHint,
        successCallback,
        errorCallback,
      );
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param message
   * @param fileOrFileArray
   * @param url
   * @param successCallback
   * @param errorCallback
   */
  static shareViaWhatsApp(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaWhatsApp(message, fileOrFileArray, url, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param receiver
   * @param message
   * @param fileOrFileArray
   * @param url
   * @param successCallback
   * @param errorCallback
   */
  static shareViaWhatsAppToReceiver(
    receiver: string,
    message: string,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaWhatsAppToReceiver(
        receiver,
        message,
        fileOrFileArray,
        url,
        successCallback,
        errorCallback,
      );
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param optionsOrMessage
   * @param phonenumbers
   * @param successCallback
   * @param errorCallback
   */
  static shareViaSMS(
    optionsOrMessage: string | any,
    phonenumbers: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaSMS(optionsOrMessage, phonenumbers, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

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
  static shareViaEmail(
    message: string,
    subject: string,
    toArray: string[],
    ccArray: string[],
    bccArray: string[] | null,
    fileOrFileArray: string | string[] | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaEmail(
        message,
        subject,
        toArray,
        ccArray,
        bccArray,
        fileOrFileArray,
        successCallback,
        errorCallback,
      );
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

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
  static canShareVia(
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.canShareVia(
        via,
        message,
        subject,
        fileOrFileArray,
        url,
        successCallback,
        errorCallback,
      );
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param successCallback
   * @param errorCallback
   */
  static canShareViaEmail(successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.canShareViaEmail(successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param message
   * @param fileOrFileArray
   * @param url
   * @param successCallback
   * @param errorCallback
   */
  static shareViaInstagram(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareViaInstagram(message, fileOrFileArray, url, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param via
   * @param message
   * @param subject
   * @param fileOrFileArray
   * @param successCallback
   * @param errorCallback
   */
  static shareVia(
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    successCallback: () => void,
    errorCallback: () => void,
  ) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.shareVia(via, message, subject, fileOrFileArray, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   *
   * @param fileOrFileArray
   * @param successCallback
   * @param errorCallback
   */
  static saveToPhotoAlbum(fileOrFileArray: string | string[], successCallback: () => void, errorCallback: () => void) {
    if (window.plugins?.socialsharing) {
      window.plugins.socialsharing.saveToPhotoAlbum(fileOrFileArray, successCallback, errorCallback);
    } else {
      SocialSharing.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('ShareSocial is uninstalled or incompatible with current platform');
  }
}
