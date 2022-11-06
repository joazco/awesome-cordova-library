# @awesome-cordova-library/camera

This plugin defines a global navigator.camera object, which provides an API for taking pictures and for choosing images from the system's image library.

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-camera/index.html#module_CameraPopoverHandle)

## Installation

```sh
cordova plugin add cordova-plugin-camera
npm i @awesome-cordova-library/camera
```

## Vanilla

### Declaration

```typescript
class Camera {
  /**
   * Takes a photo using the camera, or retrieves a photo from the device's image gallery. The image is passed to the success callback as a Base64-encoded String, or as the URI for the image file.
   * @param cameraSuccess {(imageData: string) => void}
   * @param cameraError {(message: string) => void}
   * @param cameraOptions {Partial<CameraOptions>|undefined}
   */
  static getPicture(
    cameraSuccess: (imageData: string) => void,
    cameraError: (message: string) => void,
    cameraOptions?: Partial<CameraOptions>,
  ): void;
  /**
   * Removes intermediate image files that are kept in temporary storage after calling camera.getPicture. Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
   * @param onSuccess {() => void}
   * @param onFail {() => void}
   */
  static cleanup(onSuccess: () => void, onFail: () => void): void;
}
```

### Usages

```typescript
import Camera, { DestinationType } from '@awesome-cordova-library/camera';

Camera.getPicture(
  (imageData) => console.log(imageData),
  (messageError) => console.log(messageError),
  { destinationType: DestinationType.DATA_URL },
);
```

## React

### Declaration

```typescript
const useCamera: () => {
  getPicture: (
    cameraSuccess: (imageData: string) => void,
    cameraError: (message: string) => void,
    cameraOptions?: Partial<CameraOptions>,
  ) => void;
  cleanup: (onSuccess: () => void, onFail: () => void) => void;
};
```

### Usages

```typescript
import { useEffect, useState, useCallback } from 'react';
import useCamera from '@awesome-cordova-library/camera/lib/react';
import { DestinationType } from '@awesome-cordova-library/camera';

function App() {
  const [srcImage, setSrcImage] = useState<string | undefined>();
  const { getPicture } = useCamera();

  const takePicture = useCallback(() => {
    getPicture(
      (imageData) => setSrcImage(imageData),
      () => {
        alert('Error to take picture');
      },
      {
        destinationType: DestinationType.DATA_URL,
      },
    );
  }, [getPicture]);

  return (
    <div>
      <button fluid primary onClick={takePicture}>
        Get Picture
      </button>
      {srcImage && <img src={`data:image/jpeg;base64,${srcImage}`} alt="" />}
    </div>
  );
}
```
