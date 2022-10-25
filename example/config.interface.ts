export default interface CordovaConfig {
  name: string;
  build: {
    version: string;
    id: string;
    description?: string;
    ios: {
      CFBundleVersion: string;
    };
    android: {
      versionCode: string;
    };
  };
  author?: {
    email: string;
    link: string;
    name: string;
  };
  fullscreen?: boolean;
  statusbar?: {
    show?: boolean;
    overlaysWebView?: boolean;
    backgroundColor?: string;
    contentStyle?: "default" | "lightContent";
  };
  screenOrientation?:
    | "any"
    | "landscape"
    | "landscape-primary"
    | "landscape-secondary"
    | "portrait"
    | "portrait-primary"
    | "portrait-secondary";
  splashscreen?: {
    splashscreenDelay?: number;
    fadeSplashscreen?: boolean;
    fadeSplashscreenDuration?: number;
  };
}
