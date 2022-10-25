# Example of @awesome-cordova-library

Project for test @awesome-cordova-library.

This project is initialize from https://github.com/joazco/cordova-reactjs

## Installation

```bash
npm install -g cordova
git clone git@github.com:poohia/react-cordova.git
cd react-cordova
npm install
npm start
```

## Configuration

Edit `config.ts`

| Parameter                               | Type                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                  | `string`                                                                                                       | **Required**. Your application name                                                                                                                                                                                                                                                                                                        |
| `build.version`                         | `string`                                                                                                       | **Required**. Your application name                                                                                                                                                                                                                                                                                                        |
| `build.id`                              | `string`                                                                                                       | **Required**. Full version number expressed in major/minor/patch notation.                                                                                                                                                                                                                                                                 |
| `build.version`                         | `string`                                                                                                       | **Required**. Specifies the app's identifier. The id should be in a reverse-DNS format however, only alphanumeric and dot characters are allowed. e.g: com.example.myapp                                                                                                                                                                   |
| `build.android.versionCode`             | `string`                                                                                                       | **Required**. Alternative version for Android. Sets the [version code](https://developer.android.com/studio/publish/versioning) for the application. See the [Android guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#setting-the-version-code) for information on how this attribute may be modified. |
| `build.ios.CFBundleVersion`             | `string`                                                                                                       | **Required**. Alternative version for iOS. For further details, see [iOS versioning](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364).                                                                              |
| `author.email`                          | `string`                                                                                                       | Author email                                                                                                                                                                                                                                                                                                                               |
| `author.link`                           | `string`                                                                                                       | Author link                                                                                                                                                                                                                                                                                                                                |
| `author.name`                           | `string`                                                                                                       | Author name                                                                                                                                                                                                                                                                                                                                |
| `fullscreen`                            | `boolean`                                                                                                      | **Default: false**. Set application fullscreen                                                                                                                                                                                                                                                                                             |
| `statusbar.show`                        | `boolean`                                                                                                      | **Default: true**. Shows the statusbar.                                                                                                                                                                                                                                                                                                    |
| `statusbar.backgroundColor`             | `string`                                                                                                       | **Default: #ffffff**. Set the background color of the statusbar by a hex string (#RRGGBB) at startup                                                                                                                                                                                                                                       |
| `statusbar.overlaysWebView`             | `boolean`                                                                                                      | **Default: true**. Make the statusbar overlay or not overlay the WebView at startup                                                                                                                                                                                                                                                        |
| `statusbar.contentStyle`                | `default` `lightContent`                                                                                       | **Default: default**. Set the status bar style (e.g. text color)                                                                                                                                                                                                                                                                           |
| `screenOrientation`                     | `any` `landscape` `landscape-primary` `landscape-secondary` `portrait` `portrait-primary` `portrait-secondary` | **Default: any**. Set screen orientation                                                                                                                                                                                                                                                                                                   |
| `splashscreen.splashscreenDelay`        | `number`                                                                                                       | **Default: 3000**. Amount of time in milliseconds to wait before automatically hide splash screen.                                                                                                                                                                                                                                         |
| `splashscreen.fadeSplashscreen`         | `boolean`                                                                                                      | **Default: true**. Set to false to prevent the splash screen from fading in and out when its display state changes.                                                                                                                                                                                                                        |
| `splashscreen.fadeSplashscreenDuration` | `number`                                                                                                       | **Default: 500**. Specifies the number of milliseconds for the splash screen fade effect to execute.                                                                                                                                                                                                                                       |

## Ios

### Installation

```bash
cordova platform add ios
cordova platform prepare ios
```

Open file `platform/ios/*.xcworkspace` with XCode

### Icon and Splashscreen

Icon and splashscreen will be generated at prepare command. Based on files `resources/icon.png` and `resources/splash.png`.
Icon image needs to be 1024x1024 pixel and Splashscreen image needs to be 2732x2732 pixel.

## Android

### Installation

```bash
cordova platform add android@11 # Version 11 is minimal version to push store
cordova prepare android
```

Open folder `platform/android` with Android Studio

### Icon

Icon will be generated at prepare command. Based on files `resources/android/icon-background.png` `resources/android/icon-foreground.png`.
They needs to be 432x432 pixels.

### Splashscreen

Android need an xml at resources/splash.xml [see more](https://developer.android.com/develop/ui/views/launch/splash-screen).
You can change background color at resources/colors.xml.

## Browser

```bash
cordova platform add browser
cordova build browser
```

Upload `platform/browser/www` on your server.

## Electron

If you can build a website, you can build a desktop app. Electron is a framework for creating native applications [see documentation](https://cordova.apache.org/docs/en/11.x/guide/platforms/electron/index.html)

```
cordova platform add electron
cordova run electron --nobuild
cordova build electron --release
```

## Other documentations

- Cordova [https://cordova.apache.org/docs/en/latest/](https://cordova.apache.org/docs/en/latest/)
- ReactJS [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- Generation Icon/Splashscreen with **cordova-res** [https://github.com/ionic-team/capacitor-assets](https://github.com/ionic-team/capacitor-assets)
- Android Splashscreen [https://developer.android.com/develop/ui/views/launch/splash-screen](https://developer.android.com/develop/ui/views/launch/splash-screen)
- awesome-cordova-library [https://github.com/joazco/awesome-cordova-library](https://github.com/joazco/awesome-cordova-library)
