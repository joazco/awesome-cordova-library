import { useCallback, useEffect } from "react";
import useStatusbar from "@awesome-cordova-library/statusbar/lib/react";
import config from "../../config.json";

const useStatusBarConfig = () => {
  const {
    overlaysWebView,
    styleDefault,
    styleLightContent,
    backgroundColorByHexString,
    hide,
    show,
  } = useStatusbar();

  const configStatusBar = useCallback(() => {
    const {
      statusbar: {
        show: showConfig,
        overlaysWebView: overlaysWebViewConfig,
        backgroundColor: backgroundColorConfig,
        contentStyle: contentStyleConfig,
      },
      fullscreen: fullScreenConfig,
    } = config;

    if (fullScreenConfig) {
      overlaysWebView(true);
      hide();
      return;
    }
    if (showConfig) {
      show();
    } else {
      hide();
    }
    overlaysWebView(overlaysWebViewConfig);
    backgroundColorByHexString(backgroundColorConfig);

    switch (contentStyleConfig) {
      case "lightContent":
        styleLightContent();
        break;
      case "default":
      default:
        styleDefault();
        break;
    }
  }, [
    overlaysWebView,
    styleDefault,
    styleLightContent,
    backgroundColorByHexString,
    hide,
    show,
  ]);

  useEffect(() => {
    configStatusBar();
  }, [configStatusBar]);
};

export default useStatusBarConfig;
