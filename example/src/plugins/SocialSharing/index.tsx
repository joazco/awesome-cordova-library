import React, { useCallback, useState } from "react";
import { Container, Grid, Input, Button } from "semantic-ui-react";
import useSocialSharing from "@awesome-cordova-library/social-sharing/lib/react";

const SocialSharing = () => {
  const { share } = useSocialSharing();

  const [shareMessage, setShareMessage] = useState<string>("Share my message");

  const messageToShare = useCallback(() => {
    share(
      shareMessage,
      shareMessage,
      null,
      "https://github.com/joazco/awesome-cordova-library",
      null
    ).then();
  }, [share, shareMessage]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              type="text"
              fluid
              value={shareMessage}
              onChange={(e) => {
                setShareMessage(e.target.value);
              }}
            ></Input>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button
              primary
              fluid
              onClick={() => {
                messageToShare();
              }}
            >
              Share
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default SocialSharing;
