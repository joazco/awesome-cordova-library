import {
  CameraOptions,
  DestinationType,
  Direction,
  EncodingType,
  MediaType,
  PopoverOptions,
  SourceType,
} from './types';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin provides an implementation of an old version of the Battery Status Events API.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-battery-status/index.html Cordova}
 * @requires module:cordova-plugin-battery-status
 */
export default class Camera {
  static getPicture(cameraSuccess: () => void, cameraError: () => void, cameraOptions: CameraOptions) {
    console.log(
      '🚀 ~ file: index.ts ~ line 12 ~ Camera ~ getPicture ~ cameraOptions.destinationType',
      cameraOptions.destinationType,
    );
    if (typeof navigator.camera !== 'undefined') {
    } else {
      Camera.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('Camera is uninstalled or incompatible with current platform');
  }
}

export { CameraOptions, DestinationType, Direction, EncodingType, MediaType, PopoverOptions, SourceType };
