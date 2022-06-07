import { useCallback } from 'react';
import SplashScreen from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin displays and hides a splash screen while your web application is launching. Using its methods you can also show and hide the splash screen manually.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html}
 * @requires module:cordova-plugin-splashscreen
 */
const useSplashScreen = () => {
  /**
   * Displays the splash screen.
   */
  const show = useCallback(() => {
    SplashScreen.show();
  }, []);

  /**
   * Dismiss the splash screen.
   */
  const hide = useCallback(() => {
    SplashScreen.hide();
  }, []);

  return {
    show,
    hide,
  };
};

export default useSplashScreen;
