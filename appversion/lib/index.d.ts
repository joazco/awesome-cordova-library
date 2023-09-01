/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Reads the version of your app from the target build settings.
 *
 * @requires module:cordova-plugin-app-version
 */
export default class Appversion {
    /**
     * Return App Name
     * @return Promise<string>
     */
    static getAppName(): Promise<string> | Promise<null>;
    /**
     * Return Package Name
     * @return Promise<string>
     */
    static getPackageName(): Promise<string> | Promise<null>;
    /**
     * Return App Version Number
     * @return Promise<string>
     */
    static getVersionNumber(): Promise<string> | Promise<null>;
    /**
     * Return App Version Code
     * @return Promise<string>
     */
    static getVersionCode(): Promise<string> | Promise<null>;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
