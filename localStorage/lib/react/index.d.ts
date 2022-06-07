/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Library to use localstorage easily
 */
declare const useLocalStorage: () => {
    setItem: <T = any>(key: string, value: T) => void;
    getItem: <T_1 = any>(key: string) => T_1 | null;
    removeItem: (key: string) => void;
    clear: () => void;
};
export default useLocalStorage;
