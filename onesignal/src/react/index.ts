import { useCallback, useEffect } from 'react';
import Onesignal, {
  LogLevel,
  InAppMessageAction,
  InAppMessageLifecycleHandlerObject,
  OpenedEvent,
  OutcomeEvent,
  NotificationReceivedEvent,
  ChangeEvent,
  DeviceState,
  EmailSubscriptionChange,
  PermissionChange,
  SMSSubscriptionChange,
  SubscriptionChange,
} from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * @requires module:onesignal-cordova-plugin
 */
const useOnesignal = (appId: string) => {
  const setAppId = useCallback((appId: string) => {
    Onesignal.setAppId(appId);
  }, []);
  const setNotificationWillShowInForegroundHandler = useCallback(
    (handler: (event: NotificationReceivedEvent) => void) => {
      Onesignal.setNotificationWillShowInForegroundHandler(handler);
    },
    [],
  );
  const setNotificationOpenedHandler = useCallback((handler: (openedEvent: OpenedEvent) => void) => {
    Onesignal.setNotificationOpenedHandler(handler);
  }, []);
  const setInAppMessageClickHandler = useCallback((handler: (action: InAppMessageAction) => void) => {
    Onesignal.setInAppMessageClickHandler(handler);
  }, []);
  const setInAppMessageLifecycleHandler = useCallback((handlerObject: InAppMessageLifecycleHandlerObject) => {
    Onesignal.setInAppMessageLifecycleHandler(handlerObject);
  }, []);
  const getDeviceState = useCallback((handler: (response: DeviceState) => void) => {
    Onesignal.getDeviceState(handler);
  }, []);
  const addSubscriptionObserver = useCallback((observer: (event: ChangeEvent<SubscriptionChange>) => void) => {
    Onesignal.addSubscriptionObserver(observer);
  }, []);
  const setLanguage = useCallback((language: string) => {
    return new Promise((resolve, reject) => Onesignal.setLanguage(language, resolve, reject));
  }, []);
  const addEmailSubscriptionObserver = useCallback(
    (observer: (event: ChangeEvent<EmailSubscriptionChange>) => void) => {
      Onesignal.addEmailSubscriptionObserver(observer);
    },
    [],
  );
  const addSMSSubscriptionObserver = useCallback((observer: (event: ChangeEvent<SMSSubscriptionChange>) => void) => {
    Onesignal.addSMSSubscriptionObserver(observer);
  }, []);
  const addPermissionObserver = useCallback((observer: (event: ChangeEvent<PermissionChange>) => void) => {
    Onesignal.addPermissionObserver(observer);
  }, []);
  const getTags = useCallback((handler: (tags: object) => void) => {
    Onesignal.getTags(handler);
  }, []);
  const sendTag = useCallback((key: string, value: string) => {
    Onesignal.sendTag(key, value);
  }, []);
  const deleteTags = useCallback((keys: string[]) => {
    Onesignal.deleteTags(keys);
  }, []);
  const registerForProvisionalAuthorization = useCallback((handler?: (response: { accepted: boolean }) => void) => {
    Onesignal.registerForProvisionalAuthorization(handler);
  }, []);
  const promptForPushNotificationsWithUserResponse = useCallback(
    (fallbackToSettingsOrHandler?: boolean | ((response: boolean) => void), handler?: (response: boolean) => void) => {
      Onesignal.promptForPushNotificationsWithUserResponse(fallbackToSettingsOrHandler, handler);
    },
    [],
  );
  const clearOneSignalNotifications = useCallback(() => {
    Onesignal.clearOneSignalNotifications();
  }, []);
  const unsubscribeWhenNotificationsAreDisabled = useCallback((unsubscribe: boolean) => {
    Onesignal.unsubscribeWhenNotificationsAreDisabled(unsubscribe);
  }, []);
  const removeNotification = useCallback((id: number) => {
    Onesignal.removeNotification(id);
  }, []);
  const removeGroupedNotifications = useCallback((id: string) => {
    Onesignal.removeGroupedNotifications(id);
  }, []);
  const disablePush = useCallback((disable: boolean) => {
    Onesignal.disablePush(disable);
  }, []);
  const postNotification = useCallback((notificationObject: object) => {
    return new Promise((resolve, reject) => Onesignal.postNotification(notificationObject, resolve, reject));
  }, []);
  const setLaunchURLsInApp = useCallback((isEnabled: boolean) => {
    Onesignal.setLaunchURLsInApp(isEnabled);
  }, []);
  const setLogLevel = useCallback((nsLogLevel: LogLevel, visualLogLevel: LogLevel) => {
    Onesignal.setLogLevel(nsLogLevel, visualLogLevel);
  }, []);
  const userProvidedPrivacyConsent = useCallback((handler: (response: boolean) => void) => {
    Onesignal.userProvidedPrivacyConsent(handler);
  }, []);
  const requiresUserPrivacyConsent = useCallback((handler: (response: boolean | { value: boolean }) => void) => {
    Onesignal.requiresUserPrivacyConsent(handler);
  }, []);
  const setRequiresUserPrivacyConsent = useCallback((required: boolean) => {
    Onesignal.setRequiresUserPrivacyConsent(required);
  }, []);
  const provideUserConsent = useCallback((granted: boolean) => {
    Onesignal.provideUserConsent(granted);
  }, []);
  const setEmail = useCallback((email: string, authCode?: string) => {
    return new Promise((resolve, reject) => Onesignal.setEmail(email, authCode, resolve, reject));
  }, []);
  const logoutEmail = useCallback(() => {
    return new Promise((resolve, reject) => Onesignal.logoutEmail(resolve, reject));
  }, []);
  const setSMSNumber = useCallback((smsNumber: string, authCode?: string) => {
    return new Promise((resolve, reject) => Onesignal.setSMSNumber(smsNumber, authCode, resolve, reject));
  }, []);
  const logoutSMSNumber = useCallback(() => {
    return new Promise((resolve, reject) => Onesignal.logoutSMSNumber(resolve, reject));
  }, []);
  const setExternalUserId = useCallback(
    (
      externalId: string | null,
      handlerOrAuth?: ((results: object) => void) | string,
      handler?: (results: object) => void,
    ) => {
      Onesignal.setExternalUserId(externalId, handlerOrAuth, handler);
    },
    [],
  );
  const removeExternalUserId = useCallback((handler: (results: object) => void) => {
    Onesignal.removeExternalUserId(handler);
  }, []);
  const addTriggers = useCallback((triggers: { [key: string]: string | number | boolean }) => {
    Onesignal.addTriggers(triggers);
  }, []);
  const addTrigger = useCallback((key: string, value: string | number | boolean) => {
    Onesignal.addTrigger(key, value);
  }, []);
  const removeTriggerForKey = useCallback((key: string) => {
    Onesignal.removeTriggerForKey(key);
  }, []);
  const removeTriggersForKeys = useCallback((keys: string[]) => {
    Onesignal.removeTriggersForKeys(keys);
  }, []);
  const getTriggerValueForKey = useCallback((key: string, handler: (value: string) => void) => {
    Onesignal.getTriggerValueForKey(key, handler);
  }, []);
  const pauseInAppMessages = useCallback((pause: boolean) => {
    Onesignal.pauseInAppMessages(pause);
  }, []);
  const sendOutcome = useCallback((name: string, handler?: (event: OutcomeEvent) => void) => {
    Onesignal.sendOutcome(name, handler);
  }, []);
  const sendUniqueOutcome = useCallback((name: string, handler?: (event: OutcomeEvent) => void) => {
    Onesignal.sendUniqueOutcome(name, handler);
  }, []);
  const sendOutcomeWithValue = useCallback(
    (name: string, value: string | number, handler?: (event: OutcomeEvent) => void) => {
      Onesignal.sendOutcomeWithValue(name, value, handler);
    },
    [],
  );
  const promptLocation = useCallback(() => {
    Onesignal.promptLocation();
  }, []);
  const setLocationShared = useCallback((shared: boolean) => {
    Onesignal.setLocationShared(shared);
  }, []);
  const isLocationShared = useCallback((handler: (response: boolean | { value: boolean }) => void) => {
    Onesignal.isLocationShared(handler);
  }, []);

  useEffect(() => {
    setAppId(appId);
  }, [appId]);

  return {
    setAppId,
    setNotificationWillShowInForegroundHandler,
    setNotificationOpenedHandler,
    setInAppMessageClickHandler,
    setInAppMessageLifecycleHandler,
    getDeviceState,
    setLanguage,
    addSubscriptionObserver,
    addEmailSubscriptionObserver,
    addSMSSubscriptionObserver,
    addPermissionObserver,
    getTags,
    sendTag,
    deleteTags,
    registerForProvisionalAuthorization,
    promptForPushNotificationsWithUserResponse,
    clearOneSignalNotifications,
    unsubscribeWhenNotificationsAreDisabled,
    removeNotification,
    removeGroupedNotifications,
    disablePush,
    postNotification,
    setLaunchURLsInApp,
    setLogLevel,
    userProvidedPrivacyConsent,
    requiresUserPrivacyConsent,
    setRequiresUserPrivacyConsent,
    provideUserConsent,
    setEmail,
    logoutEmail,
    setSMSNumber,
    logoutSMSNumber,
    setExternalUserId,
    removeExternalUserId,
    addTriggers,
    addTrigger,
    removeTriggerForKey,
    removeTriggersForKeys,
    getTriggerValueForKey,
    pauseInAppMessages,
    sendOutcome,
    sendUniqueOutcome,
    sendOutcomeWithValue,
    promptLocation,
    setLocationShared,
    isLocationShared,
  };
};

export default useOnesignal;
