import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import useRateDialog from "@awesome-cordova-library/ratedialog/lib/react";

const RateDialog: React.FC = () => {
  const { promptForRating } = useRateDialog({
    appName: "Cordova Awesome Library",
    locale: "en",
    usesUntilPrompt: 3,
    storeAppURL: {
      ios: "1234567",
      android: "com.joazco.cordovaawesomelibrary",
    },
  });

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button primary fluid onClick={() => promptForRating(true)}>
              Open Rate Dialog
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default RateDialog;
