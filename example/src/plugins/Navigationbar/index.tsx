import { useCallback, useEffect, useState } from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import useDevice from "@awesome-cordova-library/device/lib/react";
import useNavigationBar from "@awesome-cordova-library/navigationbar/lib/react";

const Navigationbar: React.FC = () => {
  const [navigationbarIsHided, setNavigationbarIsHided] =
    useState<boolean>(false);
  const { getPlatform } = useDevice();
  const { hideNavigationBar } = useNavigationBar();

  const hideNavigationbar = useCallback(() => {
    hideNavigationBar();
    setNavigationbarIsHided(true);
  }, []);

  if (getPlatform() !== "Android") {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>Compatible only on Android</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Grid>
        <Grid.Row>
          {navigationbarIsHided && (
            <Grid.Column>Navigationbar is hided</Grid.Column>
          )}
          {!navigationbarIsHided && (
            <Grid.Column>
              <Button fluid primary onClick={hideNavigationbar}>
                Hide navigationbar
              </Button>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Navigationbar;
