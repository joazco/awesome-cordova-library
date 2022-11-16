"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("../");
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * @requires module:onesignal-cordova-plugin
 */
var useOnesignal = function (appId) {
    var setAppId = (0, react_1.useCallback)(function (appId) {
        __1.default.setAppId(appId);
    }, []);
    var setNotificationWillShowInForegroundHandler = (0, react_1.useCallback)(function (handler) {
        __1.default.setNotificationWillShowInForegroundHandler(handler);
    }, []);
    var setNotificationOpenedHandler = (0, react_1.useCallback)(function (handler) {
        __1.default.setNotificationOpenedHandler(handler);
    }, []);
    var setInAppMessageClickHandler = (0, react_1.useCallback)(function (handler) {
        __1.default.setInAppMessageClickHandler(handler);
    }, []);
    var setInAppMessageLifecycleHandler = (0, react_1.useCallback)(function (handlerObject) {
        __1.default.setInAppMessageLifecycleHandler(handlerObject);
    }, []);
    var getDeviceState = (0, react_1.useCallback)(function (handler) {
        __1.default.getDeviceState(handler);
    }, []);
    var addSubscriptionObserver = (0, react_1.useCallback)(function (observer) {
        __1.default.addSubscriptionObserver(observer);
    }, []);
    var setLanguage = (0, react_1.useCallback)(function (language) {
        return new Promise(function (resolve, reject) { return __1.default.setLanguage(language, resolve, reject); });
    }, []);
    var addEmailSubscriptionObserver = (0, react_1.useCallback)(function (observer) {
        __1.default.addEmailSubscriptionObserver(observer);
    }, []);
    var addSMSSubscriptionObserver = (0, react_1.useCallback)(function (observer) {
        __1.default.addSMSSubscriptionObserver(observer);
    }, []);
    var addPermissionObserver = (0, react_1.useCallback)(function (observer) {
        __1.default.addPermissionObserver(observer);
    }, []);
    var getTags = (0, react_1.useCallback)(function (handler) {
        __1.default.getTags(handler);
    }, []);
    var sendTag = (0, react_1.useCallback)(function (key, value) {
        __1.default.sendTag(key, value);
    }, []);
    var deleteTags = (0, react_1.useCallback)(function (keys) {
        __1.default.deleteTags(keys);
    }, []);
    var registerForProvisionalAuthorization = (0, react_1.useCallback)(function (handler) {
        __1.default.registerForProvisionalAuthorization(handler);
    }, []);
    var promptForPushNotificationsWithUserResponse = (0, react_1.useCallback)(function (fallbackToSettingsOrHandler, handler) {
        __1.default.promptForPushNotificationsWithUserResponse(fallbackToSettingsOrHandler, handler);
    }, []);
    var clearOneSignalNotifications = (0, react_1.useCallback)(function () {
        __1.default.clearOneSignalNotifications();
    }, []);
    var unsubscribeWhenNotificationsAreDisabled = (0, react_1.useCallback)(function (unsubscribe) {
        __1.default.unsubscribeWhenNotificationsAreDisabled(unsubscribe);
    }, []);
    var removeNotification = (0, react_1.useCallback)(function (id) {
        __1.default.removeNotification(id);
    }, []);
    var removeGroupedNotifications = (0, react_1.useCallback)(function (id) {
        __1.default.removeGroupedNotifications(id);
    }, []);
    var disablePush = (0, react_1.useCallback)(function (disable) {
        __1.default.disablePush(disable);
    }, []);
    var postNotification = (0, react_1.useCallback)(function (notificationObject) {
        return new Promise(function (resolve, reject) { return __1.default.postNotification(notificationObject, resolve, reject); });
    }, []);
    var setLaunchURLsInApp = (0, react_1.useCallback)(function (isEnabled) {
        __1.default.setLaunchURLsInApp(isEnabled);
    }, []);
    var setLogLevel = (0, react_1.useCallback)(function (nsLogLevel, visualLogLevel) {
        __1.default.setLogLevel(nsLogLevel, visualLogLevel);
    }, []);
    var userProvidedPrivacyConsent = (0, react_1.useCallback)(function (handler) {
        __1.default.userProvidedPrivacyConsent(handler);
    }, []);
    var requiresUserPrivacyConsent = (0, react_1.useCallback)(function (handler) {
        __1.default.requiresUserPrivacyConsent(handler);
    }, []);
    var setRequiresUserPrivacyConsent = (0, react_1.useCallback)(function (required) {
        __1.default.setRequiresUserPrivacyConsent(required);
    }, []);
    var provideUserConsent = (0, react_1.useCallback)(function (granted) {
        __1.default.provideUserConsent(granted);
    }, []);
    var setEmail = (0, react_1.useCallback)(function (email, authCode) {
        return new Promise(function (resolve, reject) { return __1.default.setEmail(email, authCode, resolve, reject); });
    }, []);
    var logoutEmail = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) { return __1.default.logoutEmail(resolve, reject); });
    }, []);
    var setSMSNumber = (0, react_1.useCallback)(function (smsNumber, authCode) {
        return new Promise(function (resolve, reject) { return __1.default.setSMSNumber(smsNumber, authCode, resolve, reject); });
    }, []);
    var logoutSMSNumber = (0, react_1.useCallback)(function () {
        return new Promise(function (resolve, reject) { return __1.default.logoutSMSNumber(resolve, reject); });
    }, []);
    var setExternalUserId = (0, react_1.useCallback)(function (externalId, handlerOrAuth, handler) {
        __1.default.setExternalUserId(externalId, handlerOrAuth, handler);
    }, []);
    var removeExternalUserId = (0, react_1.useCallback)(function (handler) {
        __1.default.removeExternalUserId(handler);
    }, []);
    var addTriggers = (0, react_1.useCallback)(function (triggers) {
        __1.default.addTriggers(triggers);
    }, []);
    var addTrigger = (0, react_1.useCallback)(function (key, value) {
        __1.default.addTrigger(key, value);
    }, []);
    var removeTriggerForKey = (0, react_1.useCallback)(function (key) {
        __1.default.removeTriggerForKey(key);
    }, []);
    var removeTriggersForKeys = (0, react_1.useCallback)(function (keys) {
        __1.default.removeTriggersForKeys(keys);
    }, []);
    var getTriggerValueForKey = (0, react_1.useCallback)(function (key, handler) {
        __1.default.getTriggerValueForKey(key, handler);
    }, []);
    var pauseInAppMessages = (0, react_1.useCallback)(function (pause) {
        __1.default.pauseInAppMessages(pause);
    }, []);
    var sendOutcome = (0, react_1.useCallback)(function (name, handler) {
        __1.default.sendOutcome(name, handler);
    }, []);
    var sendUniqueOutcome = (0, react_1.useCallback)(function (name, handler) {
        __1.default.sendUniqueOutcome(name, handler);
    }, []);
    var sendOutcomeWithValue = (0, react_1.useCallback)(function (name, value, handler) {
        __1.default.sendOutcomeWithValue(name, value, handler);
    }, []);
    var promptLocation = (0, react_1.useCallback)(function () {
        __1.default.promptLocation();
    }, []);
    var setLocationShared = (0, react_1.useCallback)(function (shared) {
        __1.default.setLocationShared(shared);
    }, []);
    var isLocationShared = (0, react_1.useCallback)(function (handler) {
        __1.default.isLocationShared(handler);
    }, []);
    (0, react_1.useEffect)(function () {
        setAppId(appId);
    }, [appId]);
    return {
        setAppId: setAppId,
        setNotificationWillShowInForegroundHandler: setNotificationWillShowInForegroundHandler,
        setNotificationOpenedHandler: setNotificationOpenedHandler,
        setInAppMessageClickHandler: setInAppMessageClickHandler,
        setInAppMessageLifecycleHandler: setInAppMessageLifecycleHandler,
        getDeviceState: getDeviceState,
        setLanguage: setLanguage,
        addSubscriptionObserver: addSubscriptionObserver,
        addEmailSubscriptionObserver: addEmailSubscriptionObserver,
        addSMSSubscriptionObserver: addSMSSubscriptionObserver,
        addPermissionObserver: addPermissionObserver,
        getTags: getTags,
        sendTag: sendTag,
        deleteTags: deleteTags,
        registerForProvisionalAuthorization: registerForProvisionalAuthorization,
        promptForPushNotificationsWithUserResponse: promptForPushNotificationsWithUserResponse,
        clearOneSignalNotifications: clearOneSignalNotifications,
        unsubscribeWhenNotificationsAreDisabled: unsubscribeWhenNotificationsAreDisabled,
        removeNotification: removeNotification,
        removeGroupedNotifications: removeGroupedNotifications,
        disablePush: disablePush,
        postNotification: postNotification,
        setLaunchURLsInApp: setLaunchURLsInApp,
        setLogLevel: setLogLevel,
        userProvidedPrivacyConsent: userProvidedPrivacyConsent,
        requiresUserPrivacyConsent: requiresUserPrivacyConsent,
        setRequiresUserPrivacyConsent: setRequiresUserPrivacyConsent,
        provideUserConsent: provideUserConsent,
        setEmail: setEmail,
        logoutEmail: logoutEmail,
        setSMSNumber: setSMSNumber,
        logoutSMSNumber: logoutSMSNumber,
        setExternalUserId: setExternalUserId,
        removeExternalUserId: removeExternalUserId,
        addTriggers: addTriggers,
        addTrigger: addTrigger,
        removeTriggerForKey: removeTriggerForKey,
        removeTriggersForKeys: removeTriggersForKeys,
        getTriggerValueForKey: getTriggerValueForKey,
        pauseInAppMessages: pauseInAppMessages,
        sendOutcome: sendOutcome,
        sendUniqueOutcome: sendUniqueOutcome,
        sendOutcomeWithValue: sendOutcomeWithValue,
        promptLocation: promptLocation,
        setLocationShared: setLocationShared,
        isLocationShared: isLocationShared,
    };
};
exports.default = useOnesignal;
