interface ImageResizer {
  resize: (
    options: {
      uri: string;
      folderName?: string;
      fileName: string;
      quality: number;
      width: number;
      height: number;
      base64?: boolean;
      fit?: boolean;
    },
    success: (image: string) => void,
    error: () => void,
  ) => void;
}

interface Window {
  ImageResizer?: ImageResizer;
}
