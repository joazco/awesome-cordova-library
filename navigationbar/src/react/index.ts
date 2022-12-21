import { useCallback } from 'react';
import NavigationBar from '../';

const useNavigationBar = () => {
  const setUp = useCallback(
    (autoHideNavigationBar: boolean): Promise<void> =>
      new Promise((resolve, reject) => NavigationBar.setUp(autoHideNavigationBar, resolve, reject)),
    [],
  );

  const hideNavigationBar = useCallback(
    (): Promise<void> => new Promise((resolve, reject) => NavigationBar.hideNavigationBar(resolve, reject)),
    [],
  );

  return { setUp, hideNavigationBar };
};

export default useNavigationBar;
