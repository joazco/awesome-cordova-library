import { CameraOptions, DestinationType, Direction, EncodingType, MediaType, PictureSourceType } from './types';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin defines a global navigator.camera object, which provides an API for taking pictures and for choosing images from the system's image library.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-camera/index.html Cordova}
 * @requires module:cordova-plugin-camera
 */
export default class Camera {
    /**
     * Takes a photo using the camera, or retrieves a photo from the device's image gallery. The image is passed to the success callback as a Base64-encoded String, or as the URI for the image file.
     * @param cameraSuccess {(imageData: string) => void}
     * @param cameraError {(message: string) => void}
     * @param cameraOptions {Partial<CameraOptions>|undefined}
     */
    static getPicture(cameraSuccess: (imageData: string) => void, cameraError: (message: string) => void, cameraOptions?: Partial<CameraOptions>): void;
    /**
     * Removes intermediate image files that are kept in temporary storage after calling camera.getPicture. Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @param onSuccess {() => void}
     * @param onFail {() => void}
     */
    static cleanup(onSuccess: () => void, onFail: () => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
export { CameraOptions, DestinationType, Direction, EncodingType, MediaType, PictureSourceType };
