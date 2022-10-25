import React, { useCallback } from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import useSplashScreen from "@awesome-cordova-library/splashscreen/lib/react";

const SplashScreen: React.FC = () => {
  const { show, hide } = useSplashScreen();

  const showSplashScreen = useCallback(() => {
    show();
    setTimeout(() => {
      hide();
    }, 3000);
  }, [hide, show]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button
              onClick={() => {
                showSplashScreen();
              }}
              fluid
              primary
            >
              Show Splash Screen
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default SplashScreen;
