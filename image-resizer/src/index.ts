export type OptionsImageResizer = {
  uri: string;
  folderName?: string;
  fileName: string;
  quality: number;
  width: number;
  height: number;
  base64?: boolean;
  fit?: boolean;
};

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Cordova Plugin For Image Resize.
 * Also, check out {@link https://github.com/JoschkaSchulz/cordova-plugin-image-resizer Github}
 * @requires module:cordova-plugin-camera
 */
export default class ImageResizer {
  static resize(options: OptionsImageResizer, success: (image: string) => void, error: () => void) {
    if (typeof window.ImageResizer === 'undefined') {
      ImageResizer.warnPluginIsUnInstallOrIncompatible();
    } else {
      window.ImageResizer.resize(options, success, error);
    }
  }
  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('PatternPlugin is uninstalled or incompatible with current platform');
  }
}
