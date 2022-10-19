import { DialogRateLanguagesAccepted, DialogRateOption } from './types';
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
    static setPreference(options: DialogRateOption): void;
    /**
     * Show dialog rating if user open app usesUntilPrompt times. You can force open dialog with force = true. If user had select no or rate now dialog won't open again. If user selected later usesUntilPrompt is reset at 0.
     * @param force {boolean}
     */
    static promptForRating(force?: boolean): void;
    /**
     * Reset usesUntilPrompt at 0 and dialog will be open again after user open app usesUntilPrompt times
     */
    static resetUserRatedOrRefused(): void;
    /**
     * Get information if user select no or rate now
     * @returns {bool|undefined}
     */
    static getUserRatedOrRefused(): boolean | undefined;
    /**
     * Get number of times user open app since the first call promptForRating
     * @returns {number|undefined}
     */
    static getNbUseApp(): number | undefined;
    /**
     * Override langage
     * @param locale {DialogRateLanguagesAccepted}
     * @returns
     */
    static setLocale(locale: DialogRateLanguagesAccepted): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
export { DialogRateOption, DialogRateLanguagesAccepted };
