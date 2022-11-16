"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceState = exports.NotificationReceivedEvent = void 0;
var NotificationReceivedEvent_1 = require("onesignal-cordova-plugin/dist/NotificationReceivedEvent");
exports.NotificationReceivedEvent = NotificationReceivedEvent_1.default;
var Subscription_1 = require("onesignal-cordova-plugin/dist/Subscription");
Object.defineProperty(exports, "DeviceState", { enumerable: true, get: function () { return Subscription_1.DeviceState; } });
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * @requires module:onesignal-cordova-plugin
 */
var Onesignal = /** @class */ (function () {
    function Onesignal() {
    }
    Onesignal.setAppId = function (appId) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setAppId(appId);
    };
    /**
     * Set the callback to run just before displaying a notification while the app is in focus.
     * @param  {(event:NotificationReceivedEvent)=>void} handler
     * @returns void
     */
    Onesignal.setNotificationWillShowInForegroundHandler = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setNotificationWillShowInForegroundHandler(handler);
    };
    /**
     * Set the callback to run on notification open.
     * @param  {(openedEvent:OpenedEvent) => void} handler
     * @returns void
     */
    Onesignal.setNotificationOpenedHandler = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setNotificationOpenedHandler(handler);
    };
    /**
     * Sets an In-App Message click event handler.
     * @param  {(action:InAppMessageAction)=>void} handler
     * @returns void
     */
    Onesignal.setInAppMessageClickHandler = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setNotificationOpenedHandler(handler);
    };
    /**
     * Sets the In-App Message lifecycle handler object to run on displaying and/or dismissing an In-App Message.
     * @param  {InAppMessageLifecycleHandlerObject} handlerObject
     * @returns void
     */
    Onesignal.setInAppMessageLifecycleHandler = function (handlerObject) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setInAppMessageLifecycleHandler(handlerObject);
    };
    /**
     * This method returns a "snapshot" of the device state for when it was called.
     * @param  {(response: DeviceState) => void} handler
     * @returns void
     */
    Onesignal.getDeviceState = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.getDeviceState(handler);
    };
    /**
     * Allows you to set the app defined language with the OneSignal SDK.
     * @param  {string} language
     * @param  {(success:object)=>void} onSuccess
     * @param  {(failure:object)=>void} onFailure
     * @returns void
     */
    Onesignal.setLanguage = function (language, onSuccess, onFailure) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setLanguage(language, onSuccess, onFailure);
    };
    /**
     * Add a callback that fires when the OneSignal subscription state changes.
     * @param  {(event:ChangeEvent<SubscriptionChange>)=>void} observer
     * @returns void
     */
    Onesignal.addSubscriptionObserver = function (observer) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.addSubscriptionObserver(observer);
    };
    /**
     * Add a callback that fires when the OneSignal email subscription changes.
     * @param  {(event:ChangeEvent<EmailSubscriptionChange>)=>void} observer
     * @returns void
     */
    Onesignal.addEmailSubscriptionObserver = function (observer) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.addEmailSubscriptionObserver(observer);
    };
    /**
     * Add a callback that fires when the OneSignal sms subscription changes.
     * @param  {(event:ChangeEvent<SMSSubscriptionChange>)=>void} observer
     * @returns void
     */
    Onesignal.addSMSSubscriptionObserver = function (observer) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.addSMSSubscriptionObserver(observer);
    };
    /**
     * Add a callback that fires when the native push permission changes.
     * @param  {(event:ChangeEvent<PermissionChange>)=>void} observer
     * @returns void
     */
    Onesignal.addPermissionObserver = function (observer) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.addPermissionObserver(observer);
    };
    /**
     * Retrieve a list of tags that have been set on the user from the OneSignal server.
     * @param  {(tags:object)=>void} handler
     * @returns void
     */
    Onesignal.getTags = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.getTags(handler);
    };
    /**
     * Tag a user based on an app event of your choosing so they can be targeted later via segments.
     * @param  {string} key
     * @param  {string} value
     * @returns void
     */
    Onesignal.sendTag = function (key, value) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.sendTag(key, value);
    };
    /**
     * Deletes multiple tags that were previously set on a user.
     * @param  {string[]} keys
     * @returns void
     */
    Onesignal.deleteTags = function (keys) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.deleteTags(keys);
    };
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
    Onesignal.registerForProvisionalAuthorization = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.registerForProvisionalAuthorization(handler);
    };
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
    Onesignal.promptForPushNotificationsWithUserResponse = function (fallbackToSettingsOrHandler, handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(fallbackToSettingsOrHandler, handler);
    };
    /**
     * Android Only. iOS provides a standard way to clear notifications by clearing badge count.
     * @returns void
     */
    Onesignal.clearOneSignalNotifications = function () {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.clearOneSignalNotifications();
    };
    /**
     * Android Only. If notifications are disabled for your application, unsubscribe the user from OneSignal.
     * @param  {boolean} unsubscribe
     * @returns void
     */
    Onesignal.unsubscribeWhenNotificationsAreDisabled = function (unsubscribe) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.unsubscribeWhenNotificationsAreDisabled(unsubscribe);
    };
    /**
     * Removes a single OneSignal notification based on its Android notification integer id.
     * @param  {number} id - notification id to cancel
     * @returns void
     */
    Onesignal.removeNotification = function (id) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.removeNotification(id);
    };
    /**
     * Removes all OneSignal notifications based on its Android notification group Id.
     * @param  {string} id - notification group id to cancel
     * @returns void
     */
    Onesignal.removeGroupedNotifications = function (id) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.removeGroupedNotifications(id);
    };
    /**
     * Disable the push notification subscription to OneSignal.
     * @param  {boolean} disable
     * @returns void
     */
    Onesignal.disablePush = function (disable) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.disablePush(disable);
    };
    /**
     * Send a notification
     * @param  {object} notificationObject - JSON payload (see REST API reference)
     * @param  {(success:object)=>void} onSuccess
     * @param  {(failure:object)=>void} onFailure
     * @returns void
     */
    Onesignal.postNotification = function (notificationObject, onSuccess, onFailure) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.postNotification(notificationObject, onSuccess, onFailure);
    };
    /**
     * iOS only.
     * This method can be used to set if launch URLs should be opened within the application or in Safari.
     * @param  {boolean} isEnabled - false will open the link in Safari or user's default browser
     * @returns void
     */
    Onesignal.setLaunchURLsInApp = function (isEnabled) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setLaunchURLsInApp(isEnabled);
    };
    /**
     * Enable logging to help debug if you run into an issue setting up OneSignal.
     * @param  {LogLevel} nsLogLevel - Sets the logging level to print to the Android LogCat log or Xcode log.
     * @param  {LogLevel} visualLogLevel - Sets the logging level to show as alert dialogs.
     * @returns void
     */
    Onesignal.setLogLevel = function (nsLogLevel, visualLogLevel) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setLogLevel(nsLogLevel, visualLogLevel);
    };
    /**
     * Did the user provide privacy consent for GDPR purposes.
     * @param  {(response: boolean) => void} handler
     * @returns void
     */
    Onesignal.userProvidedPrivacyConsent = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.userProvidedPrivacyConsent(handler);
    };
    /**
     * True if the application requires user privacy consent, false otherwise
     * Passes a boolean on Android and passes an object on iOS to the handler.
     *
     * @param  {(response: boolean | {value: boolean}) => void} handler
     * @returns void
     */
    Onesignal.requiresUserPrivacyConsent = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.requiresUserPrivacyConsent(handler);
    };
    /**
     * For GDPR users, your application should call this method before setting the App ID.
     * @param  {boolean} required
     * @returns void
     */
    Onesignal.setRequiresUserPrivacyConsent = function (required) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setRequiresUserPrivacyConsent(required);
    };
    /**
     * If your application is set to require the user's privacy consent, you can provide this consent using this method.
     * @param  {boolean} granted
     * @returns void
     */
    Onesignal.provideUserConsent = function (granted) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.provideUserConsent(granted);
    };
    /**
     * Allows you to set the user's email address with the OneSignal SDK.
     * @param  {string} email
     * @param  {string} authCode
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    Onesignal.setEmail = function (email, authCode, onSuccess, onFailure) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setEmail(email, authCode, onSuccess, onFailure);
    };
    /**
     * If your app implements logout () => voidality, you can call logoutEmail to dissociate the email from the device.
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    Onesignal.logoutEmail = function (onSuccess, onFailure) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.logoutEmail(onSuccess, onFailure);
    };
    /**
     * Allows you to set the user's SMS number with the OneSignal SDK.
     * @param  {string} smsNumber
     * @param  {string} authCode
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    Onesignal.setSMSNumber = function (smsNumber, authCode, onSuccess, onFailure) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setSMSNumber(smsNumber, authCode, onSuccess, onFailure);
    };
    /**
     * If your app implements logout () => voidality, you can call logoutSMSNumber to dissociate the SMS number from the device.
     * @param  {() => void} onSuccess
     * @param  {() => void} onFailure
     * @returns void
     */
    Onesignal.logoutSMSNumber = function (onSuccess, onFailure) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.logoutSMSNumber(onSuccess, onFailure);
    };
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
    Onesignal.setExternalUserId = function (externalId, handlerOrAuth, handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setExternalUserId(externalId, handlerOrAuth, handler);
    };
    /**
     * Removes whatever was set as the current user's external user ID.
     * @param  {(results:object)=>void} handler
     * @returns void
     */
    Onesignal.removeExternalUserId = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.removeExternalUserId(handler);
    };
    /**
     * Adds Multiple In-App Message Triggers.
     * @param  {[key: string]: string | number | boolean} triggers
     * @returns void
     */
    Onesignal.addTriggers = function (triggers) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.addTriggers(triggers);
    };
    /**
     * Add an In-App Message Trigger.
     * @param  {string} key
     * @param  {string | number | boolean} value
     * @returns void
     */
    Onesignal.addTrigger = function (key, value) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.addTrigger(key, value);
    };
    /**
     * Removes a list of triggers based on a key.
     * @param  {string} key
     * @returns void
     */
    Onesignal.removeTriggerForKey = function (key) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.removeTriggerForKey(key);
    };
    /**
     * Removes a list of triggers based on a collection of keys.
     * @param  {string[]} keys
     * @returns void
     */
    Onesignal.removeTriggersForKeys = function (keys) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.removeTriggersForKeys(keys);
    };
    /**
     * Gets a trigger value for a provided trigger key.
     * @param  {string} key
     * @param  {(value: string) => void} handler
     * @returns void
     */
    Onesignal.getTriggerValueForKey = function (key, handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.getTriggerValueForKey(key, handler);
    };
    /**
     * Pause & unpause In-App Messages
     * @param  {boolean} pause
     * @returns void
     */
    Onesignal.pauseInAppMessages = function (pause) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.pauseInAppMessages(pause);
    };
    /**
     * Increases the "Count" of this Outcome by 1 and will be counted each time sent.
     * @param  {string} name
     * @param  {(event:OutcomeEvent)=>void} handler
     * @returns void
     */
    Onesignal.sendOutcome = function (name, handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.sendOutcome(name, handler);
    };
    /**
     * Increases "Count" by 1 only once. This can only be attributed to a single notification.
     * @param  {string} name
     * @param  {(event:OutcomeEvent)=>void} handler
     * @returns void
     */
    Onesignal.sendUniqueOutcome = function (name, handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.sendUniqueOutcome(name, handler);
    };
    /**
     * Increases the "Count" of this Outcome by 1 and the "Sum" by the value. Will be counted each time sent.
     * If the method is called outside of an attribution window, it will be unattributed until a new session occurs.
     * @param  {string} name
     * @param  {string|number} value
     * @param  {(event:OutcomeEvent)=>void} handler
     * @returns void
     */
    Onesignal.sendOutcomeWithValue = function (name, value, handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.sendOutcomeWithValue(name, value, handler);
    };
    /**
     * Prompts the user for location permissions to allow geotagging from the OneSignal dashboard.
     * @returns void
     */
    Onesignal.promptLocation = function () {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.promptLocation();
    };
    /**
     * Disable or enable location collection (defaults to enabled if your app has location permission).
     * @param  {boolean} shared
     * @returns void
     */
    Onesignal.setLocationShared = function (shared) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.setLocationShared(shared);
    };
    /**
     * True if the application has location share activated, false otherwise
     * Passes a boolean on Android and passes an object on iOS to the handler.
     *
     * @param  {(response: boolean | {value: boolean}) => void} handler
     * @returns void
     */
    Onesignal.isLocationShared = function (handler) {
        if (typeof window.plugins === 'undefined' || typeof window.plugins.OneSignal === 'undefined') {
            Onesignal.warnPluginIsUnInstallOrIncompatible();
            return;
        }
        window.plugins.OneSignal.isLocationShared(handler);
    };
    Onesignal.warnPluginIsUnInstallOrIncompatible = function () {
        console.warn('Onesignal is uninstalled or incompatible with current platform');
    };
    return Onesignal;
}());
exports.default = Onesignal;
