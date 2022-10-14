import { DialogRateLanguagesAccepted, DialogRateOption } from '../types';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
declare const useRateDialog: (initOptions: DialogRateOption) => {
    setPreference: (options: DialogRateOption) => void;
    promptForRating: (force?: boolean) => void;
    resetUserRatedOrRefused: () => void;
    getUserRatedOrRefused: () => boolean | undefined;
    getNbUseApp: () => number | undefined;
    setLocale: (locale: DialogRateLanguagesAccepted) => void;
};
export default useRateDialog;
