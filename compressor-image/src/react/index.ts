import { useCallback } from 'react';
import CompressorImage, { CompressOptions, FileExtension } from '../';

const useCompressorImage = () => {
  const compress = useCallback(
    (options: Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight' | 'outputFormat'>) => {
      return CompressorImage.compress(options);
    },
    [],
  );
  const compressTargetLength = useCallback(
    (
      options: Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight' | 'outputFormat'>,
    ) => {
      return CompressorImage.compressTargetLength(options);
    },
    [],
  );
  const determineOutputFormat = useCallback((extension: FileExtension) => {
    return CompressorImage.determineOutputFormat(extension);
  }, []);
  const sizeBase64ToMo = useCallback((base64: string) => {
    return CompressorImage.sizeBase64ToMo(base64);
  }, []);

  return { compress, compressTargetLength, determineOutputFormat, sizeBase64ToMo };
};

export default useCompressorImage;
