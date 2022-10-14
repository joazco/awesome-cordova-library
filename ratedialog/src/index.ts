import LocalStorage from '@awesome-cordova-library/localstorage';
import Dialogs from '@awesome-cordova-library/dialogs';
import Device from '@awesome-cordova-library/device';
import InAppBrowser from '@awesome-cordova-library/inappbrowser';
import { DialogRateBDD, DialogRateLanguagesAccepted, DialogRateOption, dialogRateTableName } from './types';
import translations from './translations';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * A plugin to provide rate this app functionality into your cordova application
 * @requires module:@awesome-cordova-library/localstorage
 * @requires module:@awesome-cordova-library/dialogs
 * @requires module:@awesome-cordova-library/device
 * @requires module:@awesome-cordova-library/inappbrowser
 *
 */
export default class RateDialog {
  /**
   * Set preferences for use RateDialog
   * @param options {DialogRateOption}
   */
  static setPreference(options: DialogRateOption) {
    const platform = Device.getPlatform();
    if (platform !== 'Android' && platform !== 'iOS') {
      RateDialog.warnPluginIsUnInstallOrIncompatible();
      return;
    }
    let data: DialogRateBDD | null = LocalStorage.getItem<DialogRateBDD>(dialogRateTableName);
    if (!data) {
      data = {
        nbUseApp: 0,
        userRatedOrRefused: false,
        options,
      };
    } else {
      data.options = options;
    }
    LocalStorage.setItem<DialogRateBDD>(dialogRateTableName, data);
  }

  /**
   * Show dialog rating if user open app usesUntilPrompt times. You can force open dialog with force = true. If user had select no or rate now dialog won't open again. If user selected later usesUntilPrompt is reset at 0.
   * @param force {boolean}
   */
  static promptForRating(force: boolean = false) {
    const platform = Device.getPlatform();
    if (platform !== 'Android' && platform !== 'iOS') {
      RateDialog.warnPluginIsUnInstallOrIncompatible();
      return;
    }
    const data: DialogRateBDD | null = LocalStorage.getItem<DialogRateBDD>(dialogRateTableName);
    if (!data) {
      console.warn('RateDialog:: use setPreference before promptForRatng');
      return;
    }
    if (!force && data.userRatedOrRefused) {
      return;
    }

    const setUserRatedOrRefused = () => {
      data.userRatedOrRefused = true;
      LocalStorage.setItem(dialogRateTableName, data);
    };

    const openRated = () => {
      if (platform === 'iOS') {
        InAppBrowser.open(
          `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${data.options.storeAppURL.ios}?action=write-review`,
          '_system',
        );
      } else {
        InAppBrowser.open(`market://details?id=${data.options.storeAppURL.android}&showAllReviews=true`, '_system');
      }
    };

    const setUserSelectRemindLater = () => {
      data.nbUseApp = 0;
      LocalStorage.setItem(dialogRateTableName, data);
    };

    const openRateDialog = () => {
      const translation = data.options.forceText ? data.options.forceText : translations[data.options.locale];
      Dialogs.confirm(
        translation.rate_dialog_content,
        (buttonIndex) => {
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
        },
        translation.rate_dialog_modal_title.replace('{appName}', data.options.appName),
        [
          translation.rate_dialog_modal_btn_ratenow,
          translation.rate_dialog_modal_btn_maybe_later,
          translation.rate_dialog_modal_btn_no,
        ],
      );
    };

    if (force) {
      openRateDialog();
      return;
    } else if (data.nbUseApp === data.options.usesUntilPrompt) {
      openRateDialog();
    } else {
      data.nbUseApp += 1;
      LocalStorage.setItem(dialogRateTableName, data);
    }
  }

  /**
   * Reset usesUntilPrompt at 0 and dialog will be open again after user open app usesUntilPrompt times
   */
  static resetUserRatedOrRefused() {
    const data: DialogRateBDD | null = LocalStorage.getItem<DialogRateBDD>(dialogRateTableName);
    if (!data) {
      console.warn('RateDialog:: use setPreference before promptForRatng');
      return;
    }
    data.nbUseApp = 0;
    data.userRatedOrRefused = false;
    LocalStorage.setItem(dialogRateTableName, data);
  }

  /**
   * Get information if user select no or rate now
   * @returns {bool|undefined}
   */
  static getUserRatedOrRefused() {
    const data: DialogRateBDD | null = LocalStorage.getItem<DialogRateBDD>(dialogRateTableName);
    if (!data) {
      console.warn('RateDialog:: use setPreference before promptForRatng');
      return;
    }
    return data.userRatedOrRefused;
  }

  /**
   * Get number of times user open app since the first call promptForRating
   * @returns {number|undefined}
   */
  static getNbUseApp() {
    const data: DialogRateBDD | null = LocalStorage.getItem<DialogRateBDD>(dialogRateTableName);
    if (!data) {
      console.warn('RateDialog:: use setPreference before promptForRatng');
      return;
    }
    return data.nbUseApp;
  }

  /**
   * Override langage
   * @param locale {DialogRateLanguagesAccepted}
   * @returns
   */
  static setLocale(locale: DialogRateLanguagesAccepted) {
    const data: DialogRateBDD | null = LocalStorage.getItem<DialogRateBDD>(dialogRateTableName);
    if (!data) {
      console.warn('RateDialog:: use setPreference before promptForRatng');
      return;
    }
    data.options.locale = locale;
    LocalStorage.setItem(dialogRateTableName, data);
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('RateDialog is uninstalled or incompatible with current platform');
  }
}
