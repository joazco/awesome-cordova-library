import { useCallback } from 'react';
import Dialogs from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides access to some native dialog UI elements via a global navigator.notification object.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-dialogs/index.html Cordova}
 * @requires module:cordova-plugin-dialogs
 */
const useDialogs = () => {
  const alert = useCallback((message: string, alertCallback: () => void, title?: string, buttonName?: string) => {
    return Dialogs.alert(message, alertCallback, title, buttonName);
  }, []);

  const confirm = useCallback(
    (message: string, confirmCallback: (buttonIndex: number) => void, title?: string, buttonLabels?: string[]) => {
      return Dialogs.confirm(message, confirmCallback, title, buttonLabels);
    },
    [],
  );

  const prompt = useCallback(
    (
      message: string,
      promptCallback: (results: { buttonIndex: number; input1: string }) => void,
      title?: string,
      buttonLabels?: string[],
      defaultText?: string,
    ) => {
      Dialogs.prompt(message, promptCallback, title, buttonLabels, defaultText);
    },
    [],
  );

  const beep = useCallback((times?: number) => {
    Dialogs.beep(times);
  }, []);

  return { alert, confirm, prompt, beep };
};

export default useDialogs;
