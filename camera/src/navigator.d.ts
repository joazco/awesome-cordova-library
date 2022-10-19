interface Navigator {
  camera?: {
    getPicture: (cameraSuccess: () => void, cameraError: () => void, cameraOptions: any) => void;
    cleanup: (onSuccess: () => void, onFail: (message: string) => void) => void;
  };
}
