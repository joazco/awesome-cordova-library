"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Library to use localstorage easily
 */
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    /**
     * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     * @param key key name
     * @param value
     */
    LocalStorage.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    /**
     * Returns the current value associated with the given key, or null if the given key does not exist.
     * @param key key name
     * @returns
     */
    LocalStorage.getItem = function (key) {
        var data = localStorage.getItem(key);
        if (!data)
            return null;
        return JSON.parse(data);
    };
    /**
     * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
     *
     * @param key key name
     */
    LocalStorage.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    /**
     * Removes all key/value pairs, if there are any.
     */
    LocalStorage.clear = function () {
        localStorage.clear();
    };
    return LocalStorage;
}());
exports.default = LocalStorage;
