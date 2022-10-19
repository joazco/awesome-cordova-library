interface Navigator {
  camera?: {
    getPicture: (
      cameraSuccess: (imageData: string) => void,
      cameraError: (message: string) => void,
      cameraOptions: any,
    ) => void;
    cleanup: (onSuccess: () => void, onFail: (message: string) => void) => void;
  };
}
