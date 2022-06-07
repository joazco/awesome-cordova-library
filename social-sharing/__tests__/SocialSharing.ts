import { beforeEach, expect, test } from '@jest/globals';
import SocialSharing from '../src';

beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).window = {
    plugins: {
      socialsharing: {
        setIPadPopupCoordinates: () => expect(true).toBeTruthy(),
        shareWithOptions: () => expect(true).toBeTruthy(),
        share: () => expect(true).toBeTruthy(),
        shareViaTwitter: () => expect(true).toBeTruthy(),
        shareViaFacebook: () => expect(true).toBeTruthy(),
        shareViaFacebookWithPasteMessageHint: () => expect(true).toBeTruthy(),
        shareViaWhatsApp: () => expect(true).toBeTruthy(),
        shareViaWhatsAppToReceiver: () => expect(true).toBeTruthy(),
        shareViaSMS: () => expect(true).toBeTruthy(),
        shareViaEmail: () => expect(true).toBeTruthy(),
        canShareVia: () => expect(true).toBeTruthy(),
        canShareViaEmail: () => expect(true).toBeTruthy(),
        shareViaInstagram: () => expect(true).toBeTruthy(),
        shareVia: () => expect(true).toBeTruthy(),
        saveToPhotoAlbum: () => expect(true).toBeTruthy(),
      },
    },
  };
  /* tslint:disable-next-line:no-any */
  (global as any).navigator = {
    share: () => expect(true).toBeTruthy(),
    clipboard: {
      writeText: () => expect(true).toBeTruthy(),
    },
  };
});

test('Test setIPadPopupCoordinates', () => {
  SocialSharing.setIPadPopupCoordinates('1,1,1,1');
});

test('Test shareWithOptions', () => {
  SocialSharing.shareWithOptions(
    { message: 'sharing social' },
    () => {},
    () => {},
  );
});

test('Test share', () => {
  SocialSharing.share(
    'sharing social',
    'subject',
    null,
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test shareWeb', () => {
  SocialSharing.shareWeb({
    text: 'sharing social',
  });
});

test('Test clipboardWriteText', () => {
  SocialSharing.clipboardWriteText('sharing social');
});

test('Test shareViaTwitter', () => {
  SocialSharing.shareViaTwitter(
    'sharing social',
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test shareViaFacebook', () => {
  SocialSharing.shareViaFacebook(
    'sharing social',
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test shareViaFacebookWithPasteMessageHint', () => {
  SocialSharing.shareViaFacebookWithPasteMessageHint(
    'shargin social',
    null,
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test shareViaWhatsApp', () => {
  SocialSharing.shareViaWhatsApp(
    'sharing social',
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test shareViaWhatsAppToReceiver', () => {
  SocialSharing.shareViaWhatsAppToReceiver(
    'receiver',
    'sharing social',
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test shareViaSMS', () => {
  SocialSharing.shareViaSMS(
    'sharing social',
    null,
    () => {},
    () => {},
  );
});

test('Test shareViaEmail', () => {
  SocialSharing.shareViaEmail(
    'sharing social',
    'subject',
    [],
    [],
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test canShareVia', () => {
  SocialSharing.canShareVia(
    'sms',
    'sharing social',
    null,
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test canShareViaEmail', () => {
  SocialSharing.canShareViaEmail(
    () => {},
    () => {},
  );
});

test('Test shareViaInstagram', () => {
  SocialSharing.shareViaInstagram(
    'sharing social',
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test shareVia', () => {
  SocialSharing.shareVia(
    'sms',
    'sharing social',
    null,
    null,
    () => {},
    () => {},
  );
});

test('Test saveToPhotoAlbum', () => {
  SocialSharing.saveToPhotoAlbum(
    [],
    () => {},
    () => {},
  );
});
