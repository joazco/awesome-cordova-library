import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import useTapicEngineIos from "@awesome-cordova-library/taptic-engine/lib/react";

const TapticEngine: React.FC = () => {
  const { selection, notification, impact, weakBoom, strongBoom, burst } =
    useTapicEngineIos();

  return (
    <Container>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Button onClick={() => selection()}>Selection</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => weakBoom()}>Weak Boom</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => strongBoom()}>Strong Boom</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => burst()}>Burst</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h2>Notification</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Button onClick={() => notification("success")}>Success</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => notification("error")}>Error</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => notification("warning")}>Warning</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h2>Impact</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Button onClick={() => impact("heavy")}>Heavy</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => impact("medium")}>Medium</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => impact("rigid")}>Heavy</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default TapticEngine;
