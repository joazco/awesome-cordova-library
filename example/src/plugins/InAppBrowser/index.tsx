import React, { useCallback } from "react";
import { InAppBrowserType } from "@awesome-cordova-library/inappbrowser/lib/types";
import useInAppBrowser from "@awesome-cordova-library/inappbrowser/lib/react";
import { Container, Grid, Button } from "semantic-ui-react";

const InAppBrowser: React.FC = () => {
  const open = useInAppBrowser();

  const openLink = useCallback(() => {
    const ref: InAppBrowserType = open(
      "https://github.com/joazco/awesome-cordova-library",
      "_blank",
      {
        location: "yes",
        footer: "yes",
        fullscreen: "yes",
        hidden: "yes",
      }
    ) as InAppBrowserType;
    setTimeout(() => ref.show(), 1000);
  }, [open]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button primary fluid onClick={openLink}>
              Open link
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default InAppBrowser;
