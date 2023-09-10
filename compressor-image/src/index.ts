export type FileExtension = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'bmp' | 'heic';
export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif' | 'image/bmp' | 'image/heic';
export type CompressOptions = {
  src: string;
  targetLength: number;
  quality?: number;
  outputFormat?: OutputFormat;
  minQuality?: number;
  maxWidth?: number;
  maxHeight?: number;
};
export type CompressorImageReturn = {
  base64: string;
  outputFormat?: OutputFormat;
  width: number;
  height: number;
  quality: number;
  length: number;
};
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 *
 * compressor-image is a lightweight and efficient Node.js module designed to compress images using the power of the HTML Canvas API. Whether you're dealing with JPEG, PNG, or other image formats, compressor-image aims to reduce the file size while maintaining good visual quality. Ideal for web applications, content management systems, or any scenario where bandwidth and storage optimizations are crucial.
 */
export default class CompressorImage {
  /**
   * Determines the optimal image format based on a given file extension.
   * @params extension {FileExtension}
   */
  static determineOutputFormat(extension: FileExtension): OutputFormat {
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
  }

  /**
   * Converts the size of a base64 string to megabytes (Mo).
   * @params base64 {string}
   */
  static sizeBase64ToMo(base64: string) {
    const byteLength =
      (base64.length * 3) / 4 -
      // @ts-ignore
      (base64.match(/=+/g) ? base64.match(/=+/g).length : 0);
    return parseFloat(Number(byteLength / 1048576).toFixed(2));
  }

  /**
   * Compresses and optimizes an image.
   * @params options {Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight'>}
   */
  static compress(
    options: Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight' | 'outputFormat'>,
  ): Promise<CompressorImageReturn> {
    return new Promise((resolve, reject) => {
      const { src, quality = 0.8, outputFormat, maxWidth, maxHeight } = options;
      let finalOuputFormat = outputFormat;
      if (!outputFormat) {
        const srcSplit = src.split('.');
        if (srcSplit.length <= 1) {
          finalOuputFormat = undefined;
        } else {
          const extension = srcSplit[srcSplit.length - 1] as FileExtension;
          finalOuputFormat = CompressorImage.determineOutputFormat(extension);
        }
      }

      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        if (maxWidth && maxHeight && width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else if (maxWidth && maxHeight && height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!!maxWidth && !!maxHeight) {
          ctx?.drawImage(img, 0, 0, width, height);
        } else {
          ctx?.drawImage(img, 0, 0);
        }
        const webPDataUrl = canvas.toDataURL(finalOuputFormat, quality);
        const base64 = webPDataUrl.split(',')[1];
        resolve({
          base64: `data:${finalOuputFormat || ''};base64,${base64}`,
          quality,
          outputFormat: finalOuputFormat,
          width,
          height,
          length: CompressorImage.sizeBase64ToMo(base64),
        });
      };

      img.onerror = () => {
        reject(`${src} error on loading`);
      };

      img.src = src;
    });
  }

  /**
   * Compresses the image to approximate a desired file size in MB.
   * @params options {Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight'>}
   */
  static async compressTargetLength(
    options: Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight' | 'outputFormat'>,
  ) {
    const { src, minQuality = 0.2, targetLength, maxWidth, maxHeight, outputFormat } = options;

    const compressReturn = await CompressorImage.compress({
      src,
      quality: 1,
      maxWidth,
      maxHeight,
      outputFormat,
    });

    const base64FromLength = CompressorImage.sizeBase64ToMo(compressReturn.base64);

    let finalBase64 = compressReturn;
    let base64SizeToLength = base64FromLength;
    let quality = 1;

    while (base64SizeToLength > targetLength && quality >= minQuality) {
      finalBase64 = await CompressorImage.compress({
        src: compressReturn.base64,
        quality,
        outputFormat: compressReturn.outputFormat,
      });
      base64SizeToLength = CompressorImage.sizeBase64ToMo(finalBase64.base64);

      quality = parseFloat((quality - 0.1).toFixed(2));
    }

    return finalBase64;
  }
}
