import { LogLevel, InAppMessageAction, InAppMessageLifecycleHandlerObject, OpenedEvent, OutcomeEvent, NotificationReceivedEvent, ChangeEvent, DeviceState, EmailSubscriptionChange, PermissionChange, SMSSubscriptionChange, SubscriptionChange } from '../';
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * @requires module:onesignal-cordova-plugin
 */
declare const useOnesignal: (appId: string) => {
    setAppId: (appId: string) => void;
    setNotificationWillShowInForegroundHandler: (handler: (event: NotificationReceivedEvent) => void) => void;
    setNotificationOpenedHandler: (handler: (openedEvent: OpenedEvent) => void) => void;
    setInAppMessageClickHandler: (handler: (action: InAppMessageAction) => void) => void;
    setInAppMessageLifecycleHandler: (handlerObject: InAppMessageLifecycleHandlerObject) => void;
    getDeviceState: (handler: (response: DeviceState) => void) => void;
    setLanguage: (language: string) => Promise<unknown>;
    addSubscriptionObserver: (observer: (event: ChangeEvent<SubscriptionChange>) => void) => void;
    addEmailSubscriptionObserver: (observer: (event: ChangeEvent<EmailSubscriptionChange>) => void) => void;
    addSMSSubscriptionObserver: (observer: (event: ChangeEvent<SMSSubscriptionChange>) => void) => void;
    addPermissionObserver: (observer: (event: ChangeEvent<PermissionChange>) => void) => void;
    getTags: (handler: (tags: object) => void) => void;
    sendTag: (key: string, value: string) => void;
    deleteTags: (keys: string[]) => void;
    registerForProvisionalAuthorization: (handler?: ((response: {
        accepted: boolean;
    }) => void) | undefined) => void;
    promptForPushNotificationsWithUserResponse: (fallbackToSettingsOrHandler?: boolean | ((response: boolean) => void) | undefined, handler?: ((response: boolean) => void) | undefined) => void;
    clearOneSignalNotifications: () => void;
    unsubscribeWhenNotificationsAreDisabled: (unsubscribe: boolean) => void;
    removeNotification: (id: number) => void;
    removeGroupedNotifications: (id: string) => void;
    disablePush: (disable: boolean) => void;
    postNotification: (notificationObject: object) => Promise<unknown>;
    setLaunchURLsInApp: (isEnabled: boolean) => void;
    setLogLevel: (nsLogLevel: LogLevel, visualLogLevel: LogLevel) => void;
    userProvidedPrivacyConsent: (handler: (response: boolean) => void) => void;
    requiresUserPrivacyConsent: (handler: (response: boolean | {
        value: boolean;
    }) => void) => void;
    setRequiresUserPrivacyConsent: (required: boolean) => void;
    provideUserConsent: (granted: boolean) => void;
    setEmail: (email: string, authCode?: string) => Promise<unknown>;
    logoutEmail: () => Promise<unknown>;
    setSMSNumber: (smsNumber: string, authCode?: string) => Promise<unknown>;
    logoutSMSNumber: () => Promise<unknown>;
    setExternalUserId: (externalId: string | null, handlerOrAuth?: string | ((results: object) => void) | undefined, handler?: ((results: object) => void) | undefined) => void;
    removeExternalUserId: (handler: (results: object) => void) => void;
    addTriggers: (triggers: {
        [key: string]: string | number | boolean;
    }) => void;
    addTrigger: (key: string, value: string | number | boolean) => void;
    removeTriggerForKey: (key: string) => void;
    removeTriggersForKeys: (keys: string[]) => void;
    getTriggerValueForKey: (key: string, handler: (value: string) => void) => void;
    pauseInAppMessages: (pause: boolean) => void;
    sendOutcome: (name: string, handler?: ((event: OutcomeEvent) => void) | undefined) => void;
    sendUniqueOutcome: (name: string, handler?: ((event: OutcomeEvent) => void) | undefined) => void;
    sendOutcomeWithValue: (name: string, value: string | number, handler?: ((event: OutcomeEvent) => void) | undefined) => void;
    promptLocation: () => void;
    setLocationShared: (shared: boolean) => void;
    isLocationShared: (handler: (response: boolean | {
        value: boolean;
    }) => void) => void;
};
export default useOnesignal;
