import { useCallback } from 'react';
import DatabaseVanilla from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Library to use localstorage easily
 */
const useLocalStorage = () => {
  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   * @param key key name
   * @param value
   */
  const setItem = useCallback(<T = any>(key: string, value: T): void => {
    DatabaseVanilla.setItem<T>(key, value);
  }, []);

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist.
   * @param key key name
   * @returns
   */
  const getItem = useCallback(<T = any>(key: string): T | null => {
    return DatabaseVanilla.getItem<T>(key);
  }, []);

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
   *
   * @param key key name
   */
  const removeItem = useCallback((key: string) => {
    return DatabaseVanilla.removeItem(key);
  }, []);

  /**
   * Removes all key/value pairs, if there are any.
   */
  const clear = useCallback(() => {
    return DatabaseVanilla.clear();
  }, []);

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  };
};

export default useLocalStorage;
