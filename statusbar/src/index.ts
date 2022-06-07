/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * The StatusBar object provides some functions to customize the iOS and Android StatusBar.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-statusbar/index.html}
 * @requires module:cordova-plugin-statusbar
 */
export default class Statusbar {
  /**
   * On iOS 7, make the statusbar overlay or not overlay the WebView.
   *
   * @param isOverlay - On iOS 7, set to false to make the statusbar appear like iOS 6.
   *                    Set the style and background color to suit using the other functions.
   */
  static overlaysWebView(isOverlay: boolean) {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.overlaysWebView(isOverlay);
    } else {
      Statusbar.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * Use the default statusbar (dark text, for light backgrounds).
   */
  static styleDefault() {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.styleDefault();
    } else {
      Statusbar.changeThemeColor('#ffffff');
    }
  }

  /**
   * Use the lightContent statusbar (light text, for dark backgrounds).
   */
  static styleLightContent() {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.styleLightContent();
    } else {
      Statusbar.changeThemeColor('#000000');
    }
  }

  /**
   * Use the blackTranslucent statusbar (light text, for dark backgrounds).
   */
  static styleBlackTranslucent() {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.styleBlackTranslucent();
    } else {
      Statusbar.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * Use the blackOpaque statusbar (light text, for dark backgrounds).
   */
  static styleBlackOpaque() {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.styleBlackOpaque();
    } else {
      Statusbar.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false,
   * you can set the background color of the statusbar by color name.
   *
   * @param color - Supported color names are:
   *                black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
   */
  static backgroundColorByName(color: string) {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.backgroundColorByName(color);
    } else {
      Statusbar.changeThemeColor(color);
    }
  }

  /**
   * Sets the background color of the statusbar by a hex string.
   *
   * @param color - CSS shorthand properties are also supported.
   *                On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you can set the background color of the statusbar by a hex string (#RRGGBB).
   *                On WP7 and WP8 you can also specify values as #AARRGGBB, where AA is an alpha value
   */
  static backgroundColorByHexString(color: string) {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.backgroundColorByHexString(color);
    } else {
      Statusbar.changeThemeColor(color);
    }
  }
  /**
   * Shows the statusbar.
   */
  static show() {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.show();
    } else {
      Statusbar.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * Hide the statusbar.
   */
  static hide() {
    if (typeof StatusBar !== 'undefined') {
      StatusBar.hide();
    } else {
      Statusbar.warnPluginIsUnInstallOrIncompatible();
    }
  }

  /**
   * Read this property to see if the statusbar is visible or not.
   */
  static isVisible() {
    if (typeof StatusBar !== 'undefined') {
      return StatusBar.isVisible;
    } else {
      return true;
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('Statusbar is uninstalled or incompatible with current platform');
  }

  /**
   * Sets color of meta balise theme-color
   */
  static changeThemeColor(color: string) {
    let nodeThemeColor = document.head.children.namedItem('theme-color');
    if (typeof nodeThemeColor === 'undefined' || nodeThemeColor === null) {
      const createdNodeThemeColor = document.createElement('meta');
      createdNodeThemeColor.name = 'theme-color';
      document.head.appendChild(createdNodeThemeColor);
      nodeThemeColor = createdNodeThemeColor;
    }
    // @ts-ignore
    nodeThemeColor.content = color;
  }
}
