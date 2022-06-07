/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Library to use localstorage easily
 */
export default class LocalStorage {
  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   * @param key key name
   * @param value
   */
  static setItem<T = any>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist.
   * @param key key name
   * @returns
   */
  static getItem<T = any>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  }

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
   *
   * @param key key name
   */
  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * Removes all key/value pairs, if there are any.
   */
  static clear() {
    localStorage.clear();
  }
}
