/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * The StatusBar object provides some functions to customize the iOS and Android StatusBar.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-statusbar/index.html}
 * @requires module:cordova-plugin-statusbar
 */
declare const useStatusbar: () => {
    overlaysWebView: (isOverlay: boolean) => void;
    styleDefault: () => void;
    styleLightContent: () => void;
    styleBlackTranslucent: () => void;
    styleBlackOpaque: () => void;
    backgroundColorByName: (color: string) => void;
    backgroundColorByHexString: (color: string) => void;
    hide: () => void;
    show: () => void;
    isVisible: () => boolean;
};
export default useStatusbar;
