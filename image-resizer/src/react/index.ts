import { useCallback } from 'react';
import ImageResizer, { OptionsImageResizer } from '../';

const useImageResizer = () => {
  const resize = useCallback((options: OptionsImageResizer) => {
    return new Promise<string>((resolve, reject) => {
      ImageResizer.resize(options, resolve, reject);
    });
  }, []);
  return resize;
};

export default useImageResizer;
