import { useCallback, useEffect } from 'react';
import RateDialog from '../';
import { DialogRateLanguagesAccepted, DialogRateOption } from '../types';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * A plugin to provide rate this app functionality into your cordova application
 * @requires module:@awesome-cordova-library/localstorage
 * @requires module:@awesome-cordova-library/dialogs
 * @requires module:@awesome-cordova-library/device
 * @requires module:@awesome-cordova-library/inappbrowser
 */
const useRateDialog = (initOptions: DialogRateOption) => {
  const setPreference = useCallback((options: Partial<DialogRateOption>) => {
    RateDialog.setPreference({ ...initOptions, ...options });
  }, []);

  const promptForRating = useCallback((force: boolean = false) => {
    RateDialog.promptForRating(force);
  }, []);

  const resetUserRatedOrRefused = useCallback(() => {
    RateDialog.resetUserRatedOrRefused();
  }, []);

  const getUserRatedOrRefused = useCallback(() => {
    return RateDialog.getUserRatedOrRefused();
  }, []);

  const getNbUseApp = useCallback(() => {
    return RateDialog.getNbUseApp();
  }, []);

  const setLocale = useCallback((locale: DialogRateLanguagesAccepted) => {
    return RateDialog.setLocale(locale);
  }, []);

  useEffect(() => {
    RateDialog.setPreference(initOptions);
  }, [initOptions]);

  return {
    setPreference,
    promptForRating,
    resetUserRatedOrRefused,
    getUserRatedOrRefused,
    getNbUseApp,
    setLocale,
  };
};

export default useRateDialog;
