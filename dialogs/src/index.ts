/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
export default class Dialogs {
  /**
   * Open a native alert dialog, with a customizable title and button text.
   *
   * @param {String} message              Message to print in the body of the alert
   * @param {Function} completeCallback   The callback that is called when user clicks on a button.
   * @param {String} title                Title of the alert dialog (default: Alert)
   * @param {String} buttonLabel          Label of the close button (default: OK)
   */
  static alert(message: string, alertCallback: () => void, title: string = 'Alert', buttonName: string = 'OK') {
    if (navigator.notification?.alert) {
      navigator.notification.alert(message, alertCallback, title, buttonName);
    } else {
      window.alert(message);
    }
  }

  /**
   * Open a native confirm dialog, with a customizable title and button text.
   * The result that the user selects is returned to the result callback.
   *
   * @param {String} message              Message to print in the body of the alert
   * @param {Function} resultCallback     The callback that is called when user clicks on a button.
   * @param {String} title                Title of the alert dialog (default: Confirm)
   * @param {Array} buttonLabels          Array of the labels of the buttons (default: ['OK', 'Cancel'])
   */
  static confirm(
    message: string,
    confirmCallback: (buttonIndex: number) => void,
    title: string = 'Confirm',
    buttonLabels: string[] = ['OK', 'Cancel'],
  ): boolean | void {
    if (navigator.notification?.confirm) {
      navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
    } else {
      return window.confirm(message);
    }
  }

  /**
   * Open a native prompt dialog, with a customizable title and button text.
   * The following results are returned to the result callback:
   *  buttonIndex     Index number of the button selected.
   *  input1          The text entered in the prompt dialog box.
   *
   * @param {String} message              Dialog message to display (default: "Prompt message")
   * @param {Function} resultCallback     The callback that is called when user clicks on a button.
   * @param {String} title                Title of the dialog (default: "Prompt")
   * @param {Array} buttonLabels          Array of strings for the button labels (default: ["OK","Cancel"])
   * @param {String} defaultText          Textbox input value (default: empty string)
   */
  static prompt(
    message: string,
    promptCallback: (results: { buttonIndex: number; input1: string }) => void,
    title: string = 'Prompt',
    buttonLabels: string[] = ['OK', 'Cancel'],
    defaultText?: string,
  ) {
    if (navigator.notification?.prompt) {
      navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
    } else {
      return window.prompt(message, defaultText);
    }
  }

  /**
   * Causes the device to beep.
   * On Android, the default notification ringtone is played "count" times.
   *
   * @param {Integer} count       The number of beeps. (default: 1)
   */
  static beep(times: number = 1) {
    if (navigator.notification?.beep) {
      navigator.notification.beep(times);
    } else {
      console.warn('Dialogs.beep is uninstalled or incompatible with current platform');
    }
  }
}
