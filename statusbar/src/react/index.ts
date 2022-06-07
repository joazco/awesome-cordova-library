import { useCallback } from 'react';
import Statusbar from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * The StatusBar object provides some functions to customize the iOS and Android StatusBar.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-statusbar/index.html}
 * @requires module:cordova-plugin-statusbar
 */
const useStatusbar = () => {
  /**
   * On iOS 7, make the statusbar overlay or not overlay the WebView.
   *
   * @param isOverlay - On iOS 7, set to false to make the statusbar appear like iOS 6.
   *                    Set the style and background color to suit using the other functions.
   */
  const overlaysWebView = useCallback((isOverlay: boolean): void => {
    Statusbar.overlaysWebView(isOverlay);
  }, []);

  /**
   * Use the default statusbar (dark text, for light backgrounds).
   */
  const styleDefault = useCallback((): void => {
    Statusbar.styleDefault();
  }, []);

  /**
   * Use the lightContent statusbar (light text, for dark backgrounds).
   */
  const styleLightContent = useCallback((): void => {
    Statusbar.styleLightContent();
  }, []);

  /**
   * Use the blackTranslucent statusbar (light text, for dark backgrounds).
   */
  const styleBlackTranslucent = useCallback((): void => {
    Statusbar.styleBlackTranslucent();
  }, []);

  /**
   * Use the blackOpaque statusbar (light text, for dark backgrounds).
   */
  const styleBlackOpaque = useCallback((): void => {
    Statusbar.styleBlackOpaque();
  }, []);

  /**
   * On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false,
   * you can set the background color of the statusbar by color name.
   *
   * @param color - Supported color names are:
   *                black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
   */
  const backgroundColorByName = useCallback((color: string): void => {
    Statusbar.backgroundColorByName(color);
  }, []);

  /**
   * Sets the background color of the statusbar by a hex string.
   *
   * @param color - CSS shorthand properties are also supported.
   *                On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you can set the background color of the statusbar by a hex string (#RRGGBB).
   *                On WP7 and WP8 you can also specify values as #AARRGGBB, where AA is an alpha value
   */
  const backgroundColorByHexString = useCallback((color: string): void => {
    Statusbar.backgroundColorByHexString(color);
  }, []);

  /**
   * Hide the statusbar.
   */
  const hide = useCallback((): void => {
    Statusbar.hide();
  }, []);

  /**
   * Show the statusbar.
   */
  const show = useCallback((): void => {
    Statusbar.show();
  }, []);

  /**
   * Read this property to see if the statusbar is visible or not.
   */
  const isVisible = useCallback((): boolean => {
    return Statusbar.isVisible();
  }, []);

  return {
    overlaysWebView,
    styleDefault,
    styleLightContent,
    styleBlackTranslucent,
    styleBlackOpaque,
    backgroundColorByName,
    backgroundColorByHexString,
    hide,
    show,
    isVisible,
  };
};

export default useStatusbar;
