import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import useDialogs from "@awesome-cordova-library/dialogs/lib/react";

const Dialogs: React.FC = () => {
  const { alert, confirm, prompt, beep } = useDialogs();

  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Button
              fluid
              onClick={() => {
                alert("Alert content", () => {}, "Alert", "OK");
              }}
            >
              Open alert
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              onClick={() => {
                confirm(
                  "Confirm content",
                  (buttonIndex) => {
                    console.log("confirm buttonIndex  " + buttonIndex);
                  },
                  "Confirmer?",
                  ["OK", "May be later", "No"]
                );
              }}
            >
              Open confirm
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Button
              fluid
              onClick={() => {
                prompt(
                  "Hello Prompt",
                  (results) => {
                    console.log(JSON.stringify(results));
                  },
                  "Prompt",
                  ["OK", "Cancel"],
                  "42"
                );
              }}
            >
              Open prompt
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              onClick={() => {
                beep();
              }}
            >
              Open beep
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Dialogs;
