// Type definitions for Apache Cordova Splashscreen plugin
// Project: https://github.com/apache/cordova-plugin-splashscreen
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.

interface Notification {
  alert: (message: string, alertCallback: () => void, title?: string, buttonName?: string) => void;
  confirm: (
    message: string,
    confirmCallback: (buttonIndex: number) => void,
    title: string,
    buttonLabels: string[],
  ) => void;
  prompt: (
    message: string,
    promptCallback: (results: { buttonIndex: number; input1: string }) => void,
    title?: string,
    buttonLabels?: string[],
    defaultText?: string,
  ) => void;
  beep: (times?: number) => void;
}

interface Navigator {
  notification: Notification;
}
