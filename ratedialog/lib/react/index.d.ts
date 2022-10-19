import { DialogRateLanguagesAccepted, DialogRateOption } from '../types';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * A plugin to provide rate this app functionality into your cordova application
 * @requires module:@awesome-cordova-library/localstorage
 * @requires module:@awesome-cordova-library/dialogs
 * @requires module:@awesome-cordova-library/device
 * @requires module:@awesome-cordova-library/inappbrowser
 */
declare const useRateDialog: (initOptions: DialogRateOption) => {
    setPreference: (options: Partial<DialogRateOption>) => void;
    promptForRating: (force?: boolean) => void;
    resetUserRatedOrRefused: () => void;
    getUserRatedOrRefused: () => boolean | undefined;
    getNbUseApp: () => number | undefined;
    setLocale: (locale: DialogRateLanguagesAccepted) => void;
};
export default useRateDialog;
