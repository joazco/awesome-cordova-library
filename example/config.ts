import CordovaConfig from "./config.interface";

const config: CordovaConfig = {
  name: "AwesomeCordovaLibrary",
  build: {
    version: "1.0.0",
    id: "com.joazco.awesomecordovalibrary",
    android: {
      versionCode: "1",
    },
    ios: {
      CFBundleVersion: "1",
    },
  },
  author: {
    email: "jazoulay@joazco.com",
    link: "https://joazco.com",
    name: "Jordan AZOULAY",
  },
  fullscreen: false,
  statusbar: {
    show: true,
    backgroundColor: "#ffffff",
    overlaysWebView: false,
    contentStyle: "default",
  },
  screenOrientation: "any",
  splashscreen: {
    fadeSplashscreen: true,
    fadeSplashscreenDuration: 500,
    splashscreenDelay: 3000,
  },
};

export default config;
