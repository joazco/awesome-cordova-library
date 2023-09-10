import { CompressOptions, FileExtension } from '../';
declare const useCompressorImage: () => {
    compress: (options: Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight' | 'outputFormat'>) => Promise<import("../").CompressorImageReturn>;
    compressTargetLength: (options: Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight' | 'outputFormat'>) => Promise<import("../").CompressorImageReturn>;
    determineOutputFormat: (extension: FileExtension) => import("../").OutputFormat;
    sizeBase64ToMo: (base64: string) => number;
};
export default useCompressorImage;
