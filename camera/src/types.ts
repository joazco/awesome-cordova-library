export enum DestinationType {
  /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI if possible */
  DATA_URL = 0,
  /** Return file uri (content://media/external/images/media/2 for Android) */
  FILE_URI = 1,
}

export enum PictureSourceType {
  /** Choose image from the device's photo library (same as SAVEDPHOTOALBUM for Android) */
  PHOTOLIBRARY = 0,
  /** Take picture from camera */
  CAMERA = 1,
  /** Choose image only from the device's Camera Roll album (same as PHOTOLIBRARY for Android) */
  SAVEDPHOTOALBUM = 2,
}

export enum EncodingType {
  /** Return JPEG encoded image */
  JPEG = 0,
  /** Return PNG encoded image */
  PNG = 1,
}

export enum MediaType {
  /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
  PICTURE = 0,
  /** Allow selection of video only, ONLY RETURNS URL */
  VIDEO = 1,
  /** Allow selection from all media types */
  ALLMEDIA = 2,
}

export enum Direction {
  /** Use the back-facing camera */
  BACK = 0,
  /** Use the front-facing camera */
  FRONT = 1,
}

export type CameraOptions = {
  quality: number;
  destinationType: DestinationType;
  sourceType: PictureSourceType;
  allowEdit: boolean;
  encodingType: EncodingType;
  targetWidth?: number;
  targetHeight?: number;
  mediaType: MediaType;
  correctOrientation?: boolean;
  saveToPhotoAlbum?: boolean;
  popoverOptions?: any;
  cameraDirection: Direction;
};

export const defaultOptions: CameraOptions = {
  quality: 50,
  destinationType: DestinationType.FILE_URI,
  sourceType: PictureSourceType.CAMERA,
  allowEdit: false,
  encodingType: EncodingType.JPEG,
  mediaType: MediaType.PICTURE,
  cameraDirection: Direction.BACK,
};
