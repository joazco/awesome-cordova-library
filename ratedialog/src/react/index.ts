import { useCallback, useEffect } from 'react';
import RateDialog from '../';
import { DialogRateLanguagesAccepted, DialogRateOption } from '../types';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
const useRateDialog = (initOptions: DialogRateOption) => {
  const setPreference = useCallback((options: DialogRateOption) => {
    RateDialog.setPreference(options);
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
