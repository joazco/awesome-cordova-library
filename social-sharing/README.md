# @awesome-cordova-library/social-sharing

This plugin allows you to use the native sharing window of your mobile device.

[Github documentation](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)

## Installation

```sh
cordova plugin add cordova-plugin-x-socialsharing
npm i @awesome-cordova-library/social-sharing
```

## Vanilla

### Declaration

```typescript
class SocialSharing {
  static setIPadPopupCoordinates(coords: string): void;
  static shareWithOptions(options: any, successCallback: () => void, errorCallback: () => void): void;
  static share(
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    iPadCoordinates: any,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareWeb(options: ShareData): Promise<void>;
  static clipboardWriteText(message: string): Promise<void>;
  static shareViaTwitter(
    message: string,
    file: string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareViaFacebook(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareViaFacebookWithPasteMessageHint(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    pasteMessageHint: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareViaWhatsApp(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareViaWhatsAppToReceiver(
    receiver: string,
    message: string,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareViaSMS(
    optionsOrMessage: string | any,
    phonenumbers: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareViaEmail(
    message: string,
    subject: string,
    toArray: string[],
    ccArray: string[],
    bccArray: string[] | null,
    fileOrFileArray: string | string[] | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static canShareVia(
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static canShareViaEmail(successCallback: () => void, errorCallback: () => void): void;
  static shareViaInstagram(
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static shareVia(
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static saveToPhotoAlbum(
    fileOrFileArray: string | string[],
    successCallback: () => void,
    errorCallback: () => void,
  ): void;
  static warnPluginIsUnInstallOrIncompatible(): void;
}
```

### Usages

```typescript
import SocialSharing from '@awesome-cordova-library/social-sharing';

SocialSharing.share('Message and link', null, null, 'http://www.x-services.nl');
SocialSharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
SocialSharing.shareViaInstagram('Message via Instagram', 'https://www.google.nl/images/srpr/logo4w.png', function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
.....
```

## React

### Declaration

```typescript
const useSocialSharing: () => {
  setIPadPopupCoordinates: (coords: string) => void;
  shareWithOptions: (options: any, successCallback: () => void, errorCallback: () => void) => Promise<void>;
  share: (
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
    iPadCoordinates: any,
  ) => Promise<void>;
  shareWeb: (options: ShareData) => Promise<void>;
  clipboardWriteText: (message: string) => Promise<void>;
  shareViaTwitter: (message: string, file: string | null, url: string | null) => Promise<void>;
  shareViaFacebook: (message: string, fileOrFileArray: string | string | null, url: string | null) => Promise<void>;
  shareViaFacebookWithPasteMessageHint: (
    message: string,
    fileOrFileArray: string | string | null,
    url: string | null,
    pasteMessageHint: string | null,
  ) => Promise<void>;
  shareViaWhatsApp: (message: string, fileOrFileArray: string | string | null, url: string | null) => Promise<void>;
  shareViaWhatsAppToReceiver: (
    receiver: string,
    message: string,
    fileOrFileArray: string | string[] | null,
    url: string | null,
  ) => Promise<void>;
  shareViaSMS: (optionsOrMessage: string | any, phonenumbers: string | null) => Promise<void>;
  shareViaEmail: (
    message: string,
    subject: string,
    toArray: string[],
    ccArray: string[],
    bccArray: string[] | null,
    fileOrFileArray: string | string[] | null,
  ) => Promise<void>;
  canShareVia: (
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
    url: string | null,
  ) => Promise<void>;
  canShareViaEmail: () => Promise<void>;
  shareViaInstagram: (message: string, fileOrFileArray: string | string | null, url: string | null) => Promise<void>;
  shareVia: (
    via: string,
    message: string,
    subject: string | null,
    fileOrFileArray: string | string[] | null,
  ) => Promise<void>;
  saveToPhotoAlbum: (fileOrFileArray: string | string[]) => Promise<void>;
};
```

### Usages

```typescript
import useSocialSharing from "@awesome-cordova-library/social-sharing/lib/react";

function App() {
  const { share, ...... } = useSocialSharing();
  return <div>
  <button
        onClick={() => {
          share("share my message", null, null, "http://localhost", null);
        }}
      >
        Share
      </button></div>;
}
```
