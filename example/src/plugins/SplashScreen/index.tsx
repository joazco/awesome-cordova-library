import React, { useEffect } from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import useSplashScreen from "@awesome-cordova-library/splashscreen/lib/react";

const SplashScreen: React.FC = () => {
  const { show, hide } = useSplashScreen();

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button
              onClick={() => {
                show();
                setTimeout(() => {
                  hide();
                }, 3000);
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
