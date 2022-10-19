"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = exports.Direction = exports.MediaType = exports.EncodingType = exports.PictureSourceType = exports.DestinationType = void 0;
var DestinationType;
(function (DestinationType) {
    /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI if possible */
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    /** Return file uri (content://media/external/images/media/2 for Android) */
    DestinationType[DestinationType["FILE_URI"] = 1] = "FILE_URI";
})(DestinationType = exports.DestinationType || (exports.DestinationType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    /** Choose image from the device's photo library (same as SAVEDPHOTOALBUM for Android) */
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    /** Take picture from camera */
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    /** Choose image only from the device's Camera Roll album (same as PHOTOLIBRARY for Android) */
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType = exports.PictureSourceType || (exports.PictureSourceType = {}));
var EncodingType;
(function (EncodingType) {
    /** Return JPEG encoded image */
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    /** Return PNG encoded image */
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
var MediaType;
(function (MediaType) {
    /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    /** Allow selection of video only, ONLY RETURNS URL */
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    /** Allow selection from all media types */
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
var Direction;
(function (Direction) {
    /** Use the back-facing camera */
    Direction[Direction["BACK"] = 0] = "BACK";
    /** Use the front-facing camera */
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction = exports.Direction || (exports.Direction = {}));
exports.defaultOptions = {
    quality: 50,
    destinationType: DestinationType.FILE_URI,
    sourceType: PictureSourceType.CAMERA,
    allowEdit: false,
    encodingType: EncodingType.JPEG,
    mediaType: MediaType.PICTURE,
    cameraDirection: Direction.BACK,
};
