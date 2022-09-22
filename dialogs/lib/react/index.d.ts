/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
declare const useDialogs: () => {
    alert: (message: string, alertCallback: () => void, title?: string, buttonName?: string) => void;
    confirm: (message: string, confirmCallback: (buttonIndex: number) => void, title?: string, buttonLabels?: string[]) => boolean | void;
    prompt: (message: string, promptCallback: (results: {
        buttonIndex: number;
        input1: string;
    }) => void, title?: string, buttonLabels?: string[], defaultText?: string) => void;
    beep: (times?: number) => void;
};
export default useDialogs;
