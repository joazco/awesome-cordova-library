import React from "react";
import "./App.css";
import { useScreenOrientationConfig, useStatusBarConfig } from "./hooks";
import { Container, Grid } from "semantic-ui-react";
import { HeaderComponent } from "./components";
import PluginViewComponent from "./components/PluginViewComponent";
import { Device, StatusBar, Vibration } from "./plugins";

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
        <PluginViewComponent pluginName="Vibration">
          <Vibration />
        </PluginViewComponent>
      </Grid>
    </Container>
  );
};

export default App;
