import { useCallback } from 'react';
import Camera, { CameraOptions } from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * This plugin defines a global navigator.camera object, which provides an API for taking pictures and for choosing images from the system's image library.
 * Also, check out {@link https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-camera/index.html Cordova}
 * @requires module:cordova-plugin-camera
 */
const useCamera = () => {
  const getPicture = useCallback(
    (
      cameraSuccess: (imageData: string) => void,
      cameraError: (message: string) => void,
      cameraOptions?: Partial<CameraOptions>,
    ) => {
      Camera.getPicture(cameraSuccess, cameraError, cameraOptions);
    },
    [],
  );

  const cleanup = useCallback((onSuccess: () => void, onFail: () => void) => {
    Camera.cleanup(onSuccess, onFail);
  }, []);
  return { getPicture, cleanup };
};

export default useCamera;
