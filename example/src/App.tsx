import React from "react";
import "./App.css";
import { useScreenOrientationConfig, useStatusBarConfig } from "./hooks";
import { Container, Grid } from "semantic-ui-react";
import { HeaderComponent } from "./components";
import PluginViewComponent from "./components/PluginViewComponent";
import {
  Device,
  StatusBar,
  Vibration,
  ScreenOrientation,
  SplashScreen,
  Globalization,
  SocialSharing,
  InAppBrowser,
  BatteryStatus,
  RateDialog,
  Camera,
  Dialogs,
  NetworkInformation,
  NativeAudio,
  Geolocation,
  Navigationbar,
} from "./plugins";

const App = () => {
  useScreenOrientationConfig();
  useStatusBarConfig();

  return (
    <Container fluid>
      <Grid>
        <HeaderComponent />
        <PluginViewComponent pluginName="Device">
          <Device />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Status Bar">
          <StatusBar />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Screen Orientation">
          <ScreenOrientation />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Vibration">
          <Vibration />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Splash Screen">
          <SplashScreen />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Globalization">
          <Globalization />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Battery Status">
          <BatteryStatus />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Network Information">
          <NetworkInformation />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Social Sharing">
          <SocialSharing />
        </PluginViewComponent>
        <PluginViewComponent pluginName="In App Browser">
          <InAppBrowser />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Dialogs">
          <Dialogs />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Rate Dialog">
          <RateDialog />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Camera">
          <Camera />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Native Audio">
          <NativeAudio />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Geolocation">
          <Geolocation />
        </PluginViewComponent>
        <PluginViewComponent pluginName="Navigationbar">
          <Navigationbar />
        </PluginViewComponent>
      </Grid>
    </Container>
  );
};

export default App;
