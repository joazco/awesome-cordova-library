export declare type FileExtension = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'bmp' | 'heic';
export declare type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif' | 'image/bmp' | 'image/heic';
export declare type CompressOptions = {
    src: string;
    targetLength: number;
    quality?: number;
    outputFormat?: OutputFormat;
    minQuality?: number;
    maxWidth?: number;
    maxHeight?: number;
};
export declare type CompressorImageReturn = {
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
    static determineOutputFormat(extension: FileExtension): OutputFormat;
    /**
     * Converts the size of a base64 string to megabytes (Mo).
     * @params base64 {string}
     */
    static sizeBase64ToMo(base64: string): number;
    /**
     * Compresses and optimizes an image.
     * @params options {Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight'>}
     */
    static compress(options: Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight' | 'outputFormat'>): Promise<CompressorImageReturn>;
    /**
     * Compresses the image to approximate a desired file size in MB.
     * @params options {Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight'>}
     */
    static compressTargetLength(options: Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight' | 'outputFormat'>): Promise<CompressorImageReturn>;
}
