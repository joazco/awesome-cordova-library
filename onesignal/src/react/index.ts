import { LogLevel } from 'onesignal-cordova-plugin';
import {
  InAppMessageAction,
  InAppMessageLifecycleHandlerObject,
} from 'onesignal-cordova-plugin/dist/models/InAppMessage';
import { OpenedEvent } from 'onesignal-cordova-plugin/dist/models/NotificationOpened';
import NotificationReceivedEvent from 'onesignal-cordova-plugin/dist/NotificationReceivedEvent';
import {
  ChangeEvent,
  DeviceState,
  EmailSubscriptionChange,
  PermissionChange,
  SMSSubscriptionChange,
  SubscriptionChange,
} from 'onesignal-cordova-plugin/dist/Subscription';
import { useCallback } from 'react';
import Onesignal from '../';

/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * @requires module:onesignal-cordova-plugin
 */
const useOnesignal = () => {
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
  };
};

export default useOnesignal;
