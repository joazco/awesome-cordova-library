import { InAppMessageAction, InAppMessageLifecycleHandlerObject } from 'onesignal-cordova-plugin/dist/models/InAppMessage';
import { OpenedEvent } from 'onesignal-cordova-plugin/dist/models/NotificationOpened';
import { OutcomeEvent } from 'onesignal-cordova-plugin/dist/models/Outcomes';
import NotificationReceivedEvent from 'onesignal-cordova-plugin/dist/NotificationReceivedEvent';
import { ChangeEvent, DeviceState, EmailSubscriptionChange, PermissionChange, SMSSubscriptionChange, SubscriptionChange } from 'onesignal-cordova-plugin/dist/Subscription';
declare type LogLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * @requires module:onesignal-cordova-plugin
 */
export default class Onesignal {
    static setAppId(appId: string): void;
    /**
     * Set the callback to run just before displaying a notification while the app is in focus.
     * @param  {(event:NotificationReceivedEvent)=>void} handler
     * @returns void
     */
    static setNotificationWillShowInForegroundHandler(handler: (event: NotificationReceivedEvent) => void): void;
    /**
     * Set the callback to run on notification open.
     * @param  {(openedEvent:OpenedEvent) => void} handler
     * @returns void
     */
    static setNotificationOpenedHandler(handler: (openedEvent: OpenedEvent) => void): void;
    /**
     * Sets an In-App Message click event handler.
     * @param  {(action:InAppMessageAction)=>void} handler
     * @returns void
     */
    static setInAppMessageClickHandler(handler: (action: InAppMessageAction) => void): void;
    /**
     * Sets the In-App Message lifecycle handler object to run on displaying and/or dismissing an In-App Message.
     * @param  {InAppMessageLifecycleHandlerObject} handlerObject
     * @returns void
     */
    static setInAppMessageLifecycleHandler(handlerObject: InAppMessageLifecycleHandlerObject): void;
    /**
     * This method returns a "snapshot" of the device state for when it was called.
     * @param  {(response: DeviceState) => void} handler
     * @returns void
     */
    static getDeviceState(handler: (response: DeviceState) => void): void;
    /**
     * Allows you to set the app defined language with the OneSignal SDK.
     * @param  {string} language
     * @param  {(success:object)=>void} onSuccess
     * @param  {(failure:object)=>void} onFailure
     * @returns void
     */
    static setLanguage(language: string, onSuccess?: (success: object) => void, onFailure?: (failure: object) => void): void;
    /**
     * Add a callback that fires when the OneSignal subscription state changes.
     * @param  {(event:ChangeEvent<SubscriptionChange>)=>void} observer
     * @returns void
     */
    static addSubscriptionObserver(observer: (event: ChangeEvent<SubscriptionChange>) => void): void;
    /**
     * Add a callback that fires when the OneSignal email subscription changes.
     * @param  {(event:ChangeEvent<EmailSubscriptionChange>)=>void} observer
     * @returns void
     */
    static addEmailSubscriptionObserver(observer: (event: ChangeEvent<EmailSubscriptionChange>) => void): void;
    /**
     * Add a callback that fires when the OneSignal sms subscription changes.
     * @param  {(event:ChangeEvent<SMSSubscriptionChange>)=>void} observer
     * @returns void
     */
    static addSMSSubscriptionObserver(observer: (event: ChangeEvent<SMSSubscriptionChange>) => void): void;
    /**
     * Add a callback that fires when the native push permission changes.
     * @param  {(event:ChangeEvent<PermissionChange>)=>void} observer
     * @returns void
     */
    static addPermissionObserver(observer: (event: ChangeEvent<PermissionChange>) => void): void;
    /**
     * Retrieve a list of tags that have been set on the user from the OneSignal server.
     * @param  {(tags:object)=>void} handler
     * @returns void
     */
    static getTags(handler: (tags: object) => void): void;
    /**
     * Tag a user based on an app event of your choosing so they can be targeted later via segments.
     * @param  {string} key
     * @param  {string} value
     * @returns void
     */
    static sendTag(key: string, value: string): void;
    /**
     * Deletes multiple tags that were previously set on a user.
     * @param  {string[]} keys
     * @returns void
     */
    static deleteTags(keys: string[]): void;
    /**
     * Only applies to iOS (does nothing on Android as it always silently registers)
     * Call only if you passed false to autoRegister
     * Request for Direct-To-History push notification authorization
     *
     * For more information: https://documentation.onesignal.com/docs/ios-customizations#provisional-push-notifications
     *
     * @param  {(response:{accepted:boolean})=>void} handler
     * @returns void
     */
    static registerForProvisionalAuthorization(handler?: (response: {
        accepted: boolean;
    }) => void): void;
    /**
     * Prompts the user for push notifications permission in iOS and Android 13+.
     * Use the fallbackToSettings parameter to prompt to open the settings app if a user has already declined push permissions.
     *
     * Call with promptForPushNotificationsWithUserResponse(fallbackToSettings?, handler?)
     *
     * @param  {boolean} fallbackToSettings
     * @param  {(response:boolean)=>void} handler
     * @returns void
     */
    static promptForPushNotificationsWithUserResponse(fallbackToSettingsOrHandler?: boolean | ((response: boolean) => void), handler?: (response: boolean) => void): void;
    /**
     * Android Only. iOS provides a standard way to clear notifications by clearing badge count.
     * @returns void
     */
    static clearOneSignalNotifications(): void;
    /**
     * Android Only. If notifications are disabled for your application, unsubscribe the user from OneSignal.
     * @param  {boolean} unsubscribe
     * @returns void
     */
    static unsubscribeWhenNotificationsAreDisabled(unsubscribe: boolean): void;
    /**
     * Removes a single OneSignal notification based on its Android notification integer id.
     * @param  {number} id - notification id to cancel
     * @returns void
     */
    static removeNotification(id: number): void;
    /**
     * Removes all OneSignal notifications based on its Android notification group Id.
     * @param  {string} id - notification group id to cancel
     * @returns void
     */
    static removeGroupedNotifications(id: string): void;
    /**
     * Disable the push notification subscription to OneSignal.
     * @param  {boolean} disable
     * @returns void
     */
    static disablePush(disable: boolean): void;
    /**
     * Send a notification
     * @param  {object} notificationObject - JSON payload (see REST API reference)
     * @param  {(success:object)=>void} onSuccess
     * @param  {(failure:object)=>void} onFailure
     * @returns void
     */
    static postNotification(notificationObject: object, onSuccess?: (success: object) => void, onFailure?: (failure: object) => void): void;
    /**
     * iOS only.
     * This method can be used to set if launch URLs should be opened within the application or in Safari.
     * @param  {boolean} isEnabled - false will open the link in Safari or user's default browser
     * @returns void
     */
    static setLaunchURLsInApp(isEnabled: boolean): void;
    /**
     * Enable logging to help debug if you run into an issue setting up OneSignal.
     * @param  {LogLevel} nsLogLevel - Sets the logging level to print to the Android LogCat log or Xcode log.
     * @param  {LogLevel} visualLogLevel - Sets the logging level to show as alert dialogs.
     * @returns void
     */
    static setLogLevel(nsLogLevel: LogLevel, visualLogLevel: LogLevel): void;
    /**
     * Did the user provide privacy consent for GDPR purposes.
     * @param  {(response: boolean) => void} handler
     * @returns void
     */
    static userProvidedPrivacyConsent(handler: (response: boolean) => void): void;
    /**
     * True if the application requires user privacy consent, false otherwise
     * Passes a boolean on Android and passes an object on iOS to the handler.
     *
     * @param  {(response: boolean | {value: boolean}) => void} handler
     * @returns void
     */
    static requiresUserPrivacyConsent(handler: (response: boolean | {
        value: boolean;
    }) => void): void;
    /**
     * For GDPR users, your application should call this method before setting the App ID.
     * @param  {boolean} required
     * @returns void
     */
    static setRequiresUserPrivacyConsent(required: boolean): void;
    /**
     * If your application is set to require the user's privacy consent, you can provide this consent using this method.
     * @param  {boolean} granted
     * @returns void
     */
    static provideUserConsent(granted: boolean): void;
    /**
     * Allows you to set the user's email address with the OneSignal SDK.
     * @param  {string} email
     * @param  {string} authCode
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    static setEmail(email: string, authCode?: string, onSuccess?: () => void, onFailure?: () => void): void;
    /**
     * If your app implements logout () => voidality, you can call logoutEmail to dissociate the email from the device.
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    static logoutEmail(onSuccess?: () => void, onFailure?: () => void): void;
    /**
     * Allows you to set the user's SMS number with the OneSignal SDK.
     * @param  {string} smsNumber
     * @param  {string} authCode
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    static setSMSNumber(smsNumber: string, authCode?: string, onSuccess?: () => void, onFailure?: () => void): void;
    /**
     * If your app implements logout () => voidality, you can call logoutSMSNumber to dissociate the SMS number from the device.
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    static logoutSMSNumber(onSuccess?: () => void, onFailure?: () => void): void;
    /**
     * Allows you to use your own system's user ID's to send push notifications to your users.
     *
     * Possible () => void usages:
     * setExternalUserId(externalId: string?): void
     * setExternalUserId(externalId: string?, handler: () => void?): void
     * setExternalUserId(externalId: string?, externalIdAuthCode: string?, handler: () => void?): void
     *
     * @param  {string} externalId
     * @param  {string} externalIdAuthCode
     * @param  {(results:object) => void} handler
     * @returns void
     */
    static setExternalUserId(externalId: string | null, handlerOrAuth?: ((results: object) => void) | string, handler?: (results: object) => void): void;
    /**
     * Removes whatever was set as the current user's external user ID.
     * @param  {(results:object)=>void} handler
     * @returns void
     */
    static removeExternalUserId(handler?: (results: object) => void): void;
    /**
     * Adds Multiple In-App Message Triggers.
     * @param  {[key: string]: string | number | boolean} triggers
     * @returns void
     */
    static addTriggers(triggers: {
        [key: string]: string | number | boolean;
    }): void;
    /**
     * Add an In-App Message Trigger.
     * @param  {string} key
     * @param  {string | number | boolean} value
     * @returns void
     */
    static addTrigger(key: string, value: string | number | boolean): void;
    /**
     * Removes a list of triggers based on a key.
     * @param  {string} key
     * @returns void
     */
    static removeTriggerForKey(key: string): void;
    /**
     * Removes a list of triggers based on a collection of keys.
     * @param  {string[]} keys
     * @returns void
     */
    static removeTriggersForKeys(keys: string[]): void;
    /**
     * Gets a trigger value for a provided trigger key.
     * @param  {string} key
     * @param  {(value: string) => void} handler
     * @returns void
     */
    static getTriggerValueForKey(key: string, handler: (value: string) => void): void;
    /**
     * Pause & unpause In-App Messages
     * @param  {boolean} pause
     * @returns void
     */
    static pauseInAppMessages(pause: boolean): void;
    /**
     * Increases the "Count" of this Outcome by 1 and will be counted each time sent.
     * @param  {string} name
     * @param  {(event:OutcomeEvent)=>void} handler
     * @returns void
     */
    static sendOutcome(name: string, handler?: (event: OutcomeEvent) => void): void;
    /**
     * Increases "Count" by 1 only once. This can only be attributed to a single notification.
     * @param  {string} name
     * @param  {(event:OutcomeEvent)=>void} handler
     * @returns void
     */
    static sendUniqueOutcome(name: string, handler?: (event: OutcomeEvent) => void): void;
    /**
     * Increases the "Count" of this Outcome by 1 and the "Sum" by the value. Will be counted each time sent.
     * If the method is called outside of an attribution window, it will be unattributed until a new session occurs.
     * @param  {string} name
     * @param  {string|number} value
     * @param  {(event:OutcomeEvent)=>void} handler
     * @returns void
     */
    static sendOutcomeWithValue(name: string, value: string | number, handler?: (event: OutcomeEvent) => void): void;
    /**
     * Prompts the user for location permissions to allow geotagging from the OneSignal dashboard.
     * @returns void
     */
    static promptLocation(): void;
    /**
     * Disable or enable location collection (defaults to enabled if your app has location permission).
     * @param  {boolean} shared
     * @returns void
     */
    static setLocationShared(shared: boolean): void;
    /**
     * True if the application has location share activated, false otherwise
     * Passes a boolean on Android and passes an object on iOS to the handler.
     *
     * @param  {(response: boolean | {value: boolean}) => void} handler
     * @returns void
     */
    static isLocationShared(handler: (response: boolean | {
        value: boolean;
    }) => void): void;
    static warnPluginIsUnInstallOrIncompatible(): void;
}
export { LogLevel, InAppMessageAction, InAppMessageLifecycleHandlerObject, OpenedEvent, OutcomeEvent, NotificationReceivedEvent, ChangeEvent, DeviceState, EmailSubscriptionChange, PermissionChange, SMSSubscriptionChange, SubscriptionChange, };
