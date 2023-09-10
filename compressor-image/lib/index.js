"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 *
 * compressor-image is a lightweight and efficient Node.js module designed to compress images using the power of the HTML Canvas API. Whether you're dealing with JPEG, PNG, or other image formats, compressor-image aims to reduce the file size while maintaining good visual quality. Ideal for web applications, content management systems, or any scenario where bandwidth and storage optimizations are crucial.
 */
var CompressorImage = /** @class */ (function () {
    function CompressorImage() {
    }
    /**
     * Determines the optimal image format based on a given file extension.
     * @params extension {FileExtension}
     */
    CompressorImage.determineOutputFormat = function (extension) {
        switch (extension.toLowerCase()) {
            case 'jpg':
            case 'jpeg':
                return 'image/jpeg';
            case 'png':
                return 'image/png';
            case 'webp':
                return 'image/webp';
            case 'gif':
                return 'image/gif';
            case 'bmp':
                return 'image/bmp';
            case 'heic':
                return 'image/heic';
            default:
                return 'image/jpeg';
        }
    };
    /**
     * Converts the size of a base64 string to megabytes (Mo).
     * @params base64 {string}
     */
    CompressorImage.sizeBase64ToMo = function (base64) {
        var byteLength = (base64.length * 3) / 4 -
            // @ts-ignore
            (base64.match(/=+/g) ? base64.match(/=+/g).length : 0);
        return parseFloat(Number(byteLength / 1048576).toFixed(2));
    };
    /**
     * Compresses and optimizes an image.
     * @params options {Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight'>}
     */
    CompressorImage.compress = function (options) {
        return new Promise(function (resolve, reject) {
            var src = options.src, _a = options.quality, quality = _a === void 0 ? 0.8 : _a, outputFormat = options.outputFormat, maxWidth = options.maxWidth, maxHeight = options.maxHeight;
            var finalOuputFormat = outputFormat;
            if (!outputFormat) {
                var srcSplit = src.split('.');
                if (srcSplit.length <= 1) {
                    finalOuputFormat = undefined;
                }
                else {
                    var extension = srcSplit[srcSplit.length - 1];
                    finalOuputFormat = CompressorImage.determineOutputFormat(extension);
                }
            }
            var img = new Image();
            img.onload = function () {
                var canvas = document.createElement('canvas');
                var width = img.width, height = img.height;
                if (maxWidth && maxHeight && width > height) {
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                }
                else if (maxWidth && maxHeight && height > maxHeight) {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                if (!!maxWidth && !!maxHeight) {
                    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, width, height);
                }
                else {
                    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0);
                }
                var webPDataUrl = canvas.toDataURL(finalOuputFormat, quality);
                var base64 = webPDataUrl.split(',')[1];
                resolve({
                    base64: "data:".concat(finalOuputFormat || '', ";base64,").concat(base64),
                    quality: quality,
                    outputFormat: finalOuputFormat,
                    width: width,
                    height: height,
                    length: CompressorImage.sizeBase64ToMo(base64),
                });
            };
            img.onerror = function () {
                reject("".concat(src, " error on loading"));
            };
            img.src = src;
        });
    };
    /**
     * Compresses the image to approximate a desired file size in MB.
     * @params options {Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight'>}
     */
    CompressorImage.compressTargetLength = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var src, _a, minQuality, targetLength, maxWidth, maxHeight, outputFormat, compressReturn, base64From, finalBase64, base64SizeTo, quality, tmpBase64;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        src = options.src, _a = options.minQuality, minQuality = _a === void 0 ? 0.2 : _a, targetLength = options.targetLength, maxWidth = options.maxWidth, maxHeight = options.maxHeight, outputFormat = options.outputFormat;
                        return [4 /*yield*/, CompressorImage.compress({
                                src: src,
                                quality: 1,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                outputFormat: outputFormat,
                            })];
                    case 1:
                        compressReturn = _b.sent();
                        base64From = CompressorImage.sizeBase64ToMo(compressReturn.base64);
                        finalBase64 = compressReturn;
                        base64SizeTo = base64From;
                        quality = 1;
                        _b.label = 2;
                    case 2:
                        if (!(base64SizeTo > targetLength)) return [3 /*break*/, 4];
                        return [4 /*yield*/, CompressorImage.compress({ src: src, quality: quality, outputFormat: outputFormat })];
                    case 3:
                        tmpBase64 = _b.sent();
                        base64SizeTo = CompressorImage.sizeBase64ToMo(tmpBase64.base64);
                        if (base64SizeTo < targetLength || quality < minQuality) {
                            finalBase64 = tmpBase64;
                        }
                        if (quality < minQuality) {
                            return [3 /*break*/, 4];
                        }
                        quality = parseFloat((quality - 0.1).toFixed(2));
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, finalBase64];
                }
            });
        });
    };
    return CompressorImage;
}());
exports.default = CompressorImage;
