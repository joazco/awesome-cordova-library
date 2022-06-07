"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Library to use localstorage easily
 */
var useLocalStorage = function () {
    /**
     * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     * @param key key name
     * @param value
     */
    var setItem = (0, react_1.useCallback)(function (key, value) {
        __1.default.setItem(key, value);
    }, []);
    /**
     * Returns the current value associated with the given key, or null if the given key does not exist.
     * @param key key name
     * @returns
     */
    var getItem = (0, react_1.useCallback)(function (key) {
        return __1.default.getItem(key);
    }, []);
    /**
     * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
     *
     * @param key key name
     */
    var removeItem = (0, react_1.useCallback)(function (key) {
        return __1.default.removeItem(key);
    }, []);
    /**
     * Removes all key/value pairs, if there are any.
     */
    var clear = (0, react_1.useCallback)(function () {
        return __1.default.clear();
    }, []);
    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem,
        clear: clear,
    };
};
exports.default = useLocalStorage;
